/**
 * Lógica Visual — Plataforma Multi-Página Cinemática
 */
(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded', init);

    function init(){
        initA11yPanel();
        initParticles();
        initAccordions();
        initSimulator();
        initModuleButtons();
        initVideoButtons();
        initScrollReveal();
    }

    /* ─── PANEL DE ACCESIBILIDAD ─── */
    function initA11yPanel(){
        var fab = document.getElementById('a11yFab');
        if(!fab) return;
        var toggle = document.getElementById('a11yToggle');
        var panel = document.getElementById('a11yPanel');
        var btns = panel.querySelectorAll('.a11y-btn[data-mode]');
        var fs = parseInt(localStorage.getItem('lv-fs') || '16');
        document.documentElement.style.fontSize = fs + 'px';

        toggle.addEventListener('click', function(e){
            e.stopPropagation();
            fab.classList.toggle('open');
        });
        document.addEventListener('click', function(e){
            if(!fab.contains(e.target)) fab.classList.remove('open');
        });

        btns.forEach(function(b){
            b.addEventListener('click', function(){
                var m = this.dataset.mode;
                document.documentElement.setAttribute('data-mode', m);
                localStorage.setItem('lv-mode', m);
                btns.forEach(function(x){ x.classList.remove('active'); });
                this.classList.add('active');
            });
        });

        var fontInc = document.getElementById('fontIncrease');
        var fontDec = document.getElementById('fontDecrease');
        if(fontInc) fontInc.addEventListener('click', function(){
            if(fs < 22){ fs += 2; document.documentElement.style.fontSize = fs + 'px'; localStorage.setItem('lv-fs', fs); }
        });
        if(fontDec) fontDec.addEventListener('click', function(){
            if(fs > 14){ fs -= 2; document.documentElement.style.fontSize = fs + 'px'; localStorage.setItem('lv-fs', fs); }
        });

        var saved = localStorage.getItem('lv-mode');
        if(saved){
            document.documentElement.setAttribute('data-mode', saved);
            btns.forEach(function(b){ b.classList.remove('active'); if(b.dataset.mode === saved) b.classList.add('active'); });
        }
    }

    /* ─── PARTÍCULAS CINEMÁTICAS ─── */
    function initParticles(){
        var container = document.getElementById('particles');
        if(!container) return;
        var count = 25;
        var colors = ['#6366F1','#8B5CF6','#EC4899','#06B6D4','#34D399','#FBBF24'];
        for(var i = 0; i < count; i++){
            var p = document.createElement('div');
            p.className = 'particle';
            p.style.left = Math.random() * 100 + '%';
            p.style.width = (Math.random() * 4 + 2) + 'px';
            p.style.height = p.style.width;
            p.style.background = colors[Math.floor(Math.random() * colors.length)];
            p.style.animationDuration = (Math.random() * 15 + 10) + 's';
            p.style.animationDelay = (Math.random() * 15) + 's';
            container.appendChild(p);
        }
    }

    /* ─── ACORDEONES ─── */
    function initAccordions(){
        var all = document.querySelectorAll('.acc');
        all.forEach(function(acc){
            var hdr = acc.querySelector('.acc-header');
            var body = acc.querySelector('.acc-body');
            if(!hdr || !body) return;
            hdr.addEventListener('click', function(){
                var isOpen = acc.getAttribute('aria-expanded') === 'true';
                all.forEach(function(a){
                    a.setAttribute('aria-expanded', 'false');
                    var b = a.querySelector('.acc-body');
                    if(b) b.classList.remove('open');
                });
                if(!isOpen){
                    acc.setAttribute('aria-expanded', 'true');
                    body.classList.add('open');
                }
            });
        });
    }

    /* ─── SIMULADOR ─── */
    function initSimulator(){
        var workspace = document.getElementById('workspace');
        if(!workspace) return;
        var placeholder = document.getElementById('wsPlaceholder');
        var runBtn = document.getElementById('runBtn');
        var stepBtn = document.getElementById('stepBtn');
        var clearBtn = document.getElementById('clearBtn');
        var log = document.getElementById('simLog');
        var grid = document.getElementById('simGrid');
        var charEl = document.getElementById('simChar');
        var blocks = document.querySelectorAll('.sim-block');
        var wsBlocks = [];
        var charPos = { x: 0, y: 0 };
        var charDir = 0;
        var running = false;
        var stepIdx = 0;

        for(var r = 0; r < 5; r++){
            for(var c = 0; c < 5; c++){
                var cell = document.createElement('div');
                cell.className = 'sim-cell';
                cell.dataset.x = c;
                cell.dataset.y = r;
                grid.appendChild(cell);
            }
        }
        setCharPos();

        blocks.forEach(function(b){
            b.addEventListener('click', function(){
                var label = this.querySelector('span:last-child').textContent;
                addBlock(this.dataset.type, label);
            });
            b.addEventListener('dragstart', function(e){
                e.dataTransfer.setData('type', this.dataset.type);
                e.dataTransfer.setData('label', this.querySelector('span:last-child').textContent);
            });
        });

        workspace.addEventListener('dragover', function(e){ e.preventDefault(); workspace.classList.add('dragover'); });
        workspace.addEventListener('dragleave', function(){ workspace.classList.remove('dragover'); });
        workspace.addEventListener('drop', function(e){
            e.preventDefault(); workspace.classList.remove('dragover');
            addBlock(e.dataTransfer.getData('type'), e.dataTransfer.getData('label'));
        });

        if(clearBtn) clearBtn.addEventListener('click', function(){
            if(running) return;
            wsBlocks.forEach(function(b){ if(b.el.parentNode) b.el.remove(); });
            wsBlocks = [];
            placeholder.style.display = 'flex';
            charPos = { x:0, y:0 }; charDir = 0; setCharPos();
            clearCells(); clearLog();
            addLog('🗑 Workspace limpio.');
        });

        if(runBtn) runBtn.addEventListener('click', function(){
            if(running) return;
            if(!wsBlocks.length){ addLog('⚠ Agrega bloques primero.'); return; }
            running = true; runAll();
        });

        if(stepBtn) stepBtn.addEventListener('click', function(){
            if(running) return;
            if(!wsBlocks.length){ addLog('⚠ Agrega bloques primero.'); return; }
            stepExec();
        });

        function addBlock(type, label){
            if(running) return;
            placeholder.style.display = 'none';
            var el = document.createElement('div');
            el.className = 'ws-block';
            el.innerHTML = '<span>' + label + '</span><button class="ws-remove" aria-label="Quitar">&times;</button>';
            el.querySelector('.ws-remove').addEventListener('click', function(e){
                e.stopPropagation();
                el.remove();
                wsBlocks = wsBlocks.filter(function(b){ return b.el !== el; });
                if(!wsBlocks.length) placeholder.style.display = 'flex';
            });
            workspace.appendChild(el);
            wsBlocks.push({ type: type, el: el });
        }

        function runAll(){
            clearCells(); clearLog();
            charPos = { x:0, y:0 }; charDir = 0; setCharPos();
            addLog('▶ Iniciando ejecución...');
            var i = 0;
            function next(){
                if(i >= wsBlocks.length){ addLog('✅ Ejecución completada.'); running = false; return; }
                var b = wsBlocks[i];
                b.el.classList.add('executing');
                setTimeout(function(){
                    execBlock(b.type);
                    b.el.classList.remove('executing');
                    i++;
                    if(b.type !== 'stop'){ next(); } else { addLog('⏹ Programa detenido.'); running = false; }
                }, 600);
            }
            next();
        }

        function stepExec(){
            if(stepIdx >= wsBlocks.length){
                stepIdx = 0; clearCells(); clearLog();
                charPos = { x:0, y:0 }; charDir = 0; setCharPos();
                addLog('🔄 Reiniciando desde el inicio.'); return;
            }
            var b = wsBlocks[stepIdx];
            b.el.classList.add('executing');
            setTimeout(function(){
                execBlock(b.type);
                b.el.classList.remove('executing');
                stepIdx++;
            }, 400);
        }

        function execBlock(type){
            var dx = [1,0,-1,0], dy = [0,1,0,-1];
            switch(type){
                case 'start': addLog('▶ Inicio'); break;
                case 'move':
                    var nx = charPos.x + dx[charDir], ny = charPos.y + dy[charDir];
                    if(nx >= 0 && nx < 5 && ny >= 0 && ny < 5){
                        charPos.x = nx; charPos.y = ny;
                        var cell = grid.querySelector('[data-x="' + nx + '"][data-y="' + ny + '"]');
                        if(cell) cell.classList.add('visited');
                        addLog('→ Avanza a (' + nx + ',' + ny + ')');
                    } else { addLog('⚠ Límite del tablero.'); }
                    setCharPos(); break;
                case 'turn':
                    charDir = (charDir + 1) % 4;
                    var rots = [0, 90, 180, 270];
                    charEl.style.transform = 'rotate(' + rots[charDir] + 'deg)';
                    addLog('↻ Gira 90°'); break;
                case 'repeat': addLog('🔄 Repetir ×3'); break;
                case 'stop': addLog('⏹ Detenido'); break;
            }
        }

        function setCharPos(){
            charEl.style.left = (charPos.x * 20) + '%';
            charEl.style.top = (charPos.y * 20) + '%';
        }
        function clearCells(){
            grid.querySelectorAll('.sim-cell').forEach(function(c){ c.classList.remove('visited'); });
        }
        function clearLog(){ if(log) log.innerHTML = ''; }
        function addLog(msg){
            if(!log) return;
            var el = document.createElement('div');
            el.className = 'sim-log-entry';
            el.textContent = msg;
            log.appendChild(el);
            log.scrollTop = log.scrollHeight;
        }
    }

    /* ─── BOTONES DE MÓDULOS ─── */
    function initModuleButtons(){
        document.querySelectorAll('.mod-btn').forEach(function(btn){
            btn.addEventListener('click', function(){
                var original = btn.textContent;
                btn.textContent = '✓ ¡Listo!';
                btn.style.background = 'linear-gradient(135deg, #10B981, #14B8A6)';
                setTimeout(function(){
                    btn.textContent = original;
                    btn.style.background = '';
                }, 1500);
            });
        });
    }

    /* ─── BOTONES DE VIDEO (YouTube real) ─── */
    function initVideoButtons(){
        document.querySelectorAll('.video-play-btn').forEach(function(btn){
            btn.addEventListener('click', function(){
                var container = btn.closest('.video-placeholder');
                if(!container) return;
                var videoId = container.getAttribute('data-video-id');
                if(!videoId) return;
                container.innerHTML = '<iframe src="https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0" title="Video educativo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:inherit;"></iframe>';
            });
        });
    }

    /* ─── REVELADO AL HACER SCROLL ─── */
    function initScrollReveal(){
        var els = document.querySelectorAll('.section-head, .mod-card, .challenge-card, .res-card, .acc, .video-wrapper, .sim-shell');
        if(!('IntersectionObserver' in window)){
            els.forEach(function(el){ el.style.opacity = '1'; el.style.transform = 'none'; });
            return;
        }
        els.forEach(function(el){
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity .7s cubic-bezier(.4,0,.2,1), transform .7s cubic-bezier(.4,0,.2,1)';
        });
        var obs = new IntersectionObserver(function(entries){
            entries.forEach(function(e){
                if(e.isIntersecting){
                    e.target.style.opacity = '1';
                    e.target.style.transform = 'translateY(0)';
                    obs.unobserve(e.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
        els.forEach(function(el){ obs.observe(el); });
    }
})();
