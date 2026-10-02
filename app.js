/**
 * Lógica Visual — Plataforma Multi-Página Cinemática
 */
(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded', init);

    function init(){
        initA11yPanel();
        initMobileNav();
        initParticles();
        initAccordions();
        initSimulator();
        initModuleButtons();
        initVideoButtons();
        initScrollReveal();
        initTiltCards();
        initPageTransitions();
    }

    /* ─── TILT 3D EN TARJETAS ─── */
    function initTiltCards(){
        if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        if(!window.matchMedia('(hover: hover)').matches) return;
        var sel = '.mod-card, .res-card, .challenge-card';
        document.querySelectorAll(sel).forEach(function(card){
            card.addEventListener('mousemove', function(e){
                var r = card.getBoundingClientRect();
                var px = (e.clientX - r.left) / r.width - 0.5;
                var py = (e.clientY - r.top) / r.height - 0.5;
                var rx = (-py * 8).toFixed(2);
                var ry = (px * 10).toFixed(2);
                card.style.transition = 'transform .12s ease-out, box-shadow .3s ease, border-color .3s ease';
                card.style.transform = 'perspective(900px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) translateY(-6px) scale(1.02)';
            });
            card.addEventListener('mouseleave', function(){
                card.style.transform = '';
                card.style.transition = '';
            });
        });
    }

    /* ─── TRANSICIÓN AL NAVEGAR ─── */
    function initPageTransitions(){
        if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        document.addEventListener('click', function(e){
            var a = e.target.closest('a[href]');
            if(!a) return;
            var href = a.getAttribute('href');
            if(!href || href.charAt(0) === '#' || a.target === '_blank' || /^https?:\/\//i.test(href)) return;
            e.preventDefault();
            document.body.classList.add('page-leave');
            setTimeout(function(){ window.location.href = href; }, 220);
        });
    }

    /* ─── NAVEGACIÓN MÓVIL ─── */
    function initMobileNav(){
        var toggle = document.getElementById('navToggle');
        var links = document.getElementById('navLinks');
        if(!toggle || !links) return;
        toggle.addEventListener('click', function(){
            var open = links.classList.toggle('open');
            toggle.classList.toggle('active', open);
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        links.querySelectorAll('.nav-link').forEach(function(a){
            a.addEventListener('click', function(){
                links.classList.remove('open');
                toggle.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
        window.addEventListener('resize', function(){
            if(window.innerWidth > 768){
                links.classList.remove('open');
                toggle.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
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
        var won = false;
        var program = [];
        var stepIdx = 0;
        var GOAL = { x: 4, y: 4 };
        var LABELS = { start:'▶ Inicio', move:'→ Mover', down:'⬇ Bajar', turn:'↻ Girar', repeat:'🔄 Repetir ×3', stop:'⏹ Detener' };
        var EXAMPLES = {
            meta:   ['start','move','move','move','move','down','down','down','down'],
            repeat: ['start','repeat','move','move','turn'],
            square: ['start','move','move','turn','move','move','turn','move','move','turn','move','move','turn']
        };

        var gridWrap = charEl.parentNode;

        for(var r = 0; r < 5; r++){
            for(var c = 0; c < 5; c++){
                var cell = document.createElement('div');
                cell.className = 'sim-cell';
                cell.dataset.x = c;
                cell.dataset.y = r;
                if(c === GOAL.x && r === GOAL.y) cell.classList.add('goal');
                grid.appendChild(cell);
            }
        }
        setCharPos();

        blocks.forEach(function(b){
            b.addEventListener('click', function(){
                addBlock(this.dataset.type, this.querySelector('span:last-child').textContent);
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

        document.querySelectorAll('.sim-example-btn').forEach(function(btn){
            btn.addEventListener('click', function(){
                if(running) return;
                removeAllBlocks();
                clearCells(); clearLog(); resetVictory();
                charPos = { x:0, y:0 }; charDir = 0; charEl.style.transform = ''; setCharPos();
                EXAMPLES[btn.dataset.example].forEach(function(t){ addBlock(t, LABELS[t]); });
                addLog('📋 Ejemplo cargado: ' + btn.textContent.trim());
            });
        });

        if(clearBtn) clearBtn.addEventListener('click', function(){
            if(running) return;
            removeAllBlocks();
            charPos = { x:0, y:0 }; charDir = 0; charEl.style.transform = ''; setCharPos();
            clearCells(); clearLog(); resetVictory();
            addLog('🗑 Workspace limpio.');
        });

        if(runBtn) runBtn.addEventListener('click', function(){
            if(running) return;
            program = buildProgram();
            if(!program.length){ addLog('⚠ Agrega bloques primero.'); return; }
            running = true; runAll();
        });

        if(stepBtn) stepBtn.addEventListener('click', function(){
            if(running) return;
            if(!program.length){
                program = buildProgram();
                if(!program.length){ addLog('⚠ Agrega bloques primero.'); return; }
            }
            if(stepIdx >= program.length){
                stepIdx = 0; clearCells(); clearLog(); resetVictory();
                charPos = { x:0, y:0 }; charDir = 0; charEl.style.transform = ''; setCharPos();
                addLog('🔄 Reiniciando desde el inicio.'); return;
            }
            stepExec();
        });

        /* Expande el programa: "Repetir ×3" ejecuta los 3 bloques siguientes 3 veces */
        function buildProgram(){
            var prog = [];
            for(var i = 0; i < wsBlocks.length; i++){
                var b = wsBlocks[i];
                if(b.type === 'repeat'){
                    var inner = wsBlocks.slice(i + 1, i + 4);
                    for(var k = 0; k < 3; k++){
                        inner.forEach(function(x){ prog.push(x); });
                    }
                    i += 3;
                } else {
                    prog.push(b);
                }
            }
            return prog;
        }

        function invalidateProgram(){ program = []; stepIdx = 0; }

        function removeAllBlocks(){
            wsBlocks.forEach(function(b){ if(b.el.parentNode) b.el.remove(); });
            wsBlocks = [];
            invalidateProgram();
            placeholder.style.display = 'flex';
        }

        function blockIndex(el){
            for(var i = 0; i < wsBlocks.length; i++){ if(wsBlocks[i].el === el) return i; }
            return -1;
        }

        function moveBlock(el, dir){
            if(running) return;
            var i = blockIndex(el), j = i + dir;
            if(i < 0 || j < 0 || j >= wsBlocks.length) return;
            var a = wsBlocks[i], b = wsBlocks[j];
            wsBlocks[i] = b; wsBlocks[j] = a;
            if(dir < 0) workspace.insertBefore(a.el, b.el);
            else workspace.insertBefore(b.el, a.el);
            invalidateProgram();
        }

        function addBlock(type, label){
            if(running) return;
            placeholder.style.display = 'none';
            var el = document.createElement('div');
            el.className = 'ws-block' + (type === 'repeat' ? ' is-repeat' : '');
            el.innerHTML = '<span class="ws-label">' + label + '</span>' +
                '<span class="ws-actions">' +
                '<button class="ws-move" data-dir="-1" aria-label="Mover arriba">↑</button>' +
                '<button class="ws-move" data-dir="1" aria-label="Mover abajo">↓</button>' +
                '<button class="ws-remove" aria-label="Quitar">&times;</button></span>';
            el.querySelector('.ws-remove').addEventListener('click', function(e){
                e.stopPropagation();
                if(running) return;
                el.remove();
                wsBlocks = wsBlocks.filter(function(b){ return b.el !== el; });
                invalidateProgram();
                if(!wsBlocks.length) placeholder.style.display = 'flex';
            });
            el.querySelectorAll('.ws-move').forEach(function(mv){
                mv.addEventListener('click', function(e){
                    e.stopPropagation();
                    moveBlock(el, parseInt(mv.dataset.dir, 10));
                });
            });
            workspace.appendChild(el);
            wsBlocks.push({ type: type, el: el });
            invalidateProgram();
        }

        function runAll(){
            clearCells(); clearLog(); resetVictory();
            charPos = { x:0, y:0 }; charDir = 0; charEl.style.transform = ''; setCharPos();
            stepIdx = 0;
            addLog('▶ Iniciando ejecución...');
            nextStep();
        }

        function nextStep(){
            if(stepIdx >= program.length){ addLog('✅ Ejecución completada.'); running = false; return; }
            var b = program[stepIdx];
            b.el.classList.add('executing');
            setTimeout(function(){
                execBlock(b.type);
                b.el.classList.remove('executing');
                stepIdx++;
                if(won){ running = false; return; }
                if(b.type === 'stop'){ addLog('⏹ Programa detenido.'); running = false; return; }
                nextStep();
            }, 600);
        }

        function stepExec(){
            var b = program[stepIdx];
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
                        if(nx === GOAL.x && ny === GOAL.y) victory();
                    } else { addLog('⚠ Límite del tablero.'); }
                    setCharPos(); break;
                case 'down':
                    var ny2 = charPos.y + 1;
                    if(ny2 < 5){
                        charPos.y = ny2;
                        var cell2 = grid.querySelector('[data-x="' + charPos.x + '"][data-y="' + ny2 + '"]');
                        if(cell2) cell2.classList.add('visited');
                        addLog('⬇ Baja a (' + charPos.x + ',' + ny2 + ')');
                        if(charPos.x === GOAL.x && ny2 === GOAL.y) victory();
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

        /* ─── VICTORIA (META ⭐) ─── */
        function victory(){
            if(won) return;
            won = true;
            var goalCell = grid.querySelector('.goal');
            if(goalCell) goalCell.classList.add('reached');
            charEl.classList.add('win');
            addLog('🎉 ¡Llegaste a la meta! Tu algoritmo funciona.');
            var v = document.createElement('div');
            v.className = 'sim-victory';
            v.innerHTML = '<div class="sim-victory-emoji">🏆</div>' +
                '<div class="sim-victory-text">¡Ganaste!</div>' +
                '<div class="sim-victory-sub">Tu algoritmo llegó a la meta ⭐</div>';
            gridWrap.appendChild(v);
            var colors = ['#F87171','#FBBF24','#34D399','#818CF8','#F472B6','#22D3EE'];
            for(var i = 0; i < 16; i++){
                (function(){
                    var p = document.createElement('span');
                    p.className = 'confetti-piece';
                    p.style.left = (Math.random() * 95) + '%';
                    p.style.background = colors[Math.floor(Math.random() * colors.length)];
                    p.style.animationDelay = (Math.random() * 0.6) + 's';
                    p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
                    gridWrap.appendChild(p);
                    setTimeout(function(){ p.remove(); }, 2600);
                })();
            }
        }

        function resetVictory(){
            won = false;
            charEl.classList.remove('win');
            var goalCell = grid.querySelector('.goal');
            if(goalCell) goalCell.classList.remove('reached');
            var v = gridWrap.querySelector('.sim-victory');
            if(v) v.remove();
            gridWrap.querySelectorAll('.confetti-piece').forEach(function(p){ p.remove(); });
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
