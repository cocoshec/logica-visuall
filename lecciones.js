/**
 * Lógica Visual — Lecciones con Fragmentos de Código Entendibles
 */
(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded', init);

    // ═══════════════════════════════════════════
    // LECCIONES CON CÓDIGO SIMPLE Y ENTENDIBLE
    // ═══════════════════════════════════════════
    var lessons = [

        // ─── LECCIÓN 1: HOLA MUNDO ───
        {
            title: "Hola Mundo",
            badge: "Lección 1",
            filename: "saludo.txt",
            color: "#6366F1",
            completeMsg: "¡Has creado tu primer programa! Ya sabes mostrar texto en pantalla.",
            steps: [
                {
                    lines: [
                        "Hola Mundo"
                    ],
                    explain: {
                        icon: "👋",
                        title: "¡Tu primer texto!",
                        text: "Esto es lo más básico de la programación. Simplemente escribimos un mensaje. La computadora lo leerá tal cual.",
                        concept: "Texto simple = lo que ves es lo que hay"
                    },
                    visual: [
                        {type:"start", icon:"📝", text:'Mostrar: "Hola Mundo"'}
                    ],
                    console: ["Hola Mundo"]
                },
                {
                    lines: [
                        "Hola Mundo",
                        "Bienvenido al código"
                    ],
                    explain: {
                        icon: "➡️",
                        title: "Línea por línea",
                        text: "La computadora lee de arriba hacia abajo. Primero dice \"Hola Mundo\", luego dice \"Bienvenido al código\". Siempre en ese orden.",
                        concept: "Primero arriba → luego abajo"
                    },
                    visual: [
                        {type:"start", icon:"📝", text:'Mostrar: "Hola Mundo"'},
                        {type:"print", icon:"📝", text:'Mostrar: "Bienvenido al código"'}
                    ],
                    console: ["Hola Mundo", "Bienvenido al código"]
                },
                {
                    lines: [
                        "Hola Mundo",
                        "Bienvenido al código",
                        "",
                        "Mi nombre es Ana",
                        "Tengo 10 años"
                    ],
                    explain: {
                        icon: "💬",
                        title: "Líneas en blanco",
                        text: "Las líneas en blanco solo son para organizar. La computadora las ignora. Puedes agrupar tu código en secciones para que se vea más ordenado.",
                        concept: "Línea vacía = espacio para organizar"
                    },
                    visual: [
                        {type:"start", icon:"📝", text:'Mostrar: "Hola Mundo"'},
                        {type:"print", icon:"📝", text:'Mostrar: "Bienvenido al código"'},
                        {type:"variable", icon:"👤", text:'Mostrar: "Mi nombre es Ana"'},
                        {type:"variable", icon:"🔢", text:'Mostrar: "Tengo 10 años"'}
                    ],
                    console: ["Hola Mundo", "Bienvenido al código", "", "Mi nombre es Ana", "Tengo 10 años"]
                },
                {
                    lines: [
                        "Hola Mundo",
                        "Bienvenido al código",
                        "",
                        "Mi nombre es Ana",
                        "Tengo 10 años",
                        "",
                        "¡Fin del programa!"
                    ],
                    explain: {
                        icon: "🏁",
                        title: "¡Listo para ejecutar!",
                        text: "Tu programa está completo. Cuando hagas clic en \"Ejecutar\", la computadora leerá cada línea y la mostrará en la pantalla, una por una.",
                        concept: "Ejecutar = la computadora obedece tu código"
                    },
                    visual: [
                        {type:"start", icon:"📝", text:'Mostrar: "Hola Mundo"'},
                        {type:"print", icon:"📝", text:'Mostrar: "Bienvenido al código"'},
                        {type:"variable", icon:"👤", text:'Mostrar: "Mi nombre es Ana"'},
                        {type:"variable", icon:"🔢", text:'Mostrar: "Tengo 10 años"'},
                        {type:"end", icon:"🏁", text:'Mostrar: "¡Fin del programa!"'}
                    ],
                    console: ["Hola Mundo", "Bienvenido al código", "", "Mi nombre es Ana", "Tengo 10 años", "", "¡Fin del programa!"],
                    showRun: true
                }
            ]
        },

        // ─── LECCIÓN 2: VARIABLES (CAJAS) ───
        {
            title: "Variables",
            badge: "Lección 2",
            filename: "cajas.txt",
            color: "#10B981",
            completeMsg: "¡Ahora sabes guardar información en cajas con nombre! Eso es programar variables.",
            steps: [
                {
                    lines: [
                        "CAJA nombre = \"Ana\""
                    ],
                    explain: {
                        icon: "📦",
                        title: "Una caja con nombre",
                        text: "Imagina una caja de regalo. Le pones una etiqueta que dice \"nombre\" y dentro guardas el valor \"Ana\". Así funciona una variable.",
                        concept: "CAJA nombre = contenido"
                    },
                    visual: [
                        {type:"start", icon:"📦", text:'CAJA nombre = "Ana"'}
                    ],
                    console: []
                },
                {
                    lines: [
                        "CAJA nombre = \"Ana\"",
                        "CAJA edad = 10"
                    ],
                    explain: {
                        icon: "🔢",
                        title: "Cajas con números",
                        text: "Las cajas también guardan números. La caja \"edad\" tiene el número 10. Nota que los números NO llevan comillas, pero el texto SÍ.",
                        concept: "Texto = \"comillas\" | Número = sin comillas"
                    },
                    visual: [
                        {type:"start", icon:"📦", text:'CAJA nombre = "Ana"'},
                        {type:"variable", icon:"📦", text:'CAJA edad = 10'}
                    ],
                    console: []
                },
                {
                    lines: [
                        "CAJA nombre = \"Ana\"",
                        "CAJA edad = 10",
                        "",
                        "MOSTRAR nombre",
                        "MOSTRAR edad"
                    ],
                    explain: {
                        icon: "👀",
                        title: "Abrir la caja",
                        text: "Cuando escribes MOSTRAR nombre, la computadora abre la caja \"nombre\" y muestra lo que tiene dentro. ¡Abre cada caja y lee su contenido!",
                        concept: "MOSTRAR caja → abre y muestra el contenido"
                    },
                    visual: [
                        {type:"start", icon:"📦", text:'CAJA nombre = "Ana"'},
                        {type:"variable", icon:"📦", text:'CAJA edad = 10'},
                        {type:"print", icon:"👁️", text:'MOSTRAR nombre → "Ana"'},
                        {type:"print", icon:"👁️", text:'MOSTRAR edad → 10'}
                    ],
                    console: ["Ana", "10"]
                },
                {
                    lines: [
                        "CAJA nombre = \"Ana\"",
                        "CAJA edad = 10",
                        "CAJA escuela = \"San Pablo\"",
                        "",
                        "MOSTRAR nombre",
                        "MOSTRAR edad",
                        "MOSTRAR escuela"
                    ],
                    explain: {
                        icon: "🎉",
                        title: "¡Tres cajas funcionando!",
                        text: "Creamos 3 cajas con diferentes datos: un texto, un número y otro texto. Cada caja tiene su nombre y su contenido. ¡Ejecuta para ver todo!",
                        concept: "Cada variable guarda UN valor a la vez"
                    },
                    visual: [
                        {type:"start", icon:"📦", text:'CAJA nombre = "Ana"'},
                        {type:"variable", icon:"📦", text:'CAJA edad = 10'},
                        {type:"variable", icon:"📦", text:'CAJA escuela = "San Pablo"'},
                        {type:"print", icon:"👁️", text:'MOSTRAR nombre'},
                        {type:"print", icon:"👁️", text:'MOSTRAR edad'},
                        {type:"print", icon:"👁️", text:'MOSTRAR escuela'},
                        {type:"end", icon:"▶", text:"¡Ejecutar!"}
                    ],
                    console: ["Ana", "10", "San Pablo"],
                    showRun: true
                }
            ]
        },

        // ─── LECCIÓN 3: CONDICIONALES (SI/NO) ───
        {
            title: "Condicionales",
            badge: "Lección 3",
            filename: "decisiones.txt",
            color: "#F59E0B",
            completeMsg: "¡Tu programa ya puede tomar decisiones! Sabe elegir entre SÍ y NO.",
            steps: [
                {
                    lines: [
                        "SI llueve ENTONCES",
                        "    usar paraguas",
                        "SINO",
                        "    usar lentes de sol"
                    ],
                    explain: {
                        icon: "🌤️",
                        title: "¿SÍ o NO?",
                        text: "Un condicional es como decidir qué hacer según el clima. Si llueve → paraguas. Si no llueve → lentes. Solo se ejecuta UNO de los dos caminos.",
                        concept: "SI ... ENTONCES ... SINO = dos caminos posibles"
                    },
                    visual: [
                        {type:"start", icon:"❓", text:"¿Llueve?"},
                        {type:"condition", icon:"☂️", text:"SI sí → usar paraguas"},
                        {type:"condition", icon:"😎", text:"SI no → usar lentes"}
                    ],
                    console: []
                },
                {
                    lines: [
                        "CAJA edad = 12",
                        "",
                        "SI edad >= 10 ENTONCES",
                        "    MOSTRAR \"Puedes ver la película\"",
                        "SINO",
                        "    MOSTRAR \"Aún no puedes verla\""
                    ],
                    explain: {
                        icon: "🎬",
                        title: "Una condición real",
                        text: "Tenemos la edad = 12. Preguntamos: ¿12 es mayor o igual que 10? ¡SÍ! Entonces se ejecuta el primer camino. El camino SINO se salta.",
                        concept: ">= significa \"mayor o igual que\""
                    },
                    visual: [
                        {type:"variable", icon:"📦", text:"CAJA edad = 12"},
                        {type:"condition", icon:"❓", text:"¿edad >= 10? → ¡SÍ!"},
                        {type:"print", icon:"✅", text:'MOSTRAR "Puedes ver la película"'},
                        {type:"end", icon:"⏭️", text:"SINO se salta"}
                    ],
                    console: ["Puedes ver la película"]
                },
                {
                    lines: [
                        "CAJA edad = 7",
                        "",
                        "SI edad >= 10 ENTONCES",
                        "    MOSTRAR \"Puedes ver la película\"",
                        "SINO",
                        "    MOSTRAR \"Aún no puedes verla\""
                    ],
                    explain: {
                        icon: "🤔",
                        title: "Ahora con edad = 7",
                        text: "Esta vez la edad es 7. ¿7 es mayor o igual que 10? ¡NO! Ahora se ejecuta el camino SINO. El programa elige el camino correcto automáticamente.",
                        concept: "La condición decide qué camino tomar"
                    },
                    visual: [
                        {type:"variable", icon:"📦", text:"CAJA edad = 7"},
                        {type:"condition", icon:"❓", text:"¿edad >= 10? → ¡NO!"},
                        {type:"end", icon:"❌", text:'SINO → MOSTRAR "Aún no puedes"'}
                    ],
                    console: ["Aún no puedes verla"]
                },
                {
                    lines: [
                        "CAJA edad = 12",
                        "",
                        "SI edad >= 10 ENTONCES",
                        "    MOSTRAR \"✅ Puedes ver la película\"",
                        "SINO",
                        "    MOSTRAR \"❌ Aún no puedes verla\"",
                        "",
                        "MOSTRAR \"Fin de la verificación\""
                    ],
                    explain: {
                        icon: "🎉",
                        title: "¡Programa completo!",
                        text: "Tenemos la edad = 12, así que se mostrará el mensaje de SÍ. Al final, la última línea se ejecuta SIEMPRE, sin importar el camino elegido.",
                        concept: "Lo que está FUERA del SI/SINO siempre se ejecuta"
                    },
                    visual: [
                        {type:"variable", icon:"📦", text:"CAJA edad = 12"},
                        {type:"condition", icon:"❓", text:"¿edad >= 10? → ¡SÍ!"},
                        {type:"print", icon:"✅", text:'MOSTRAR "Puedes ver la película"'},
                        {type:"start", icon:"➡️", text:'MOSTRAR "Fin de la verificación"'},
                        {type:"end", icon:"▶", text:"¡Ejecutar!"}
                    ],
                    console: ["✅ Puedes ver la película", "", "Fin de la verificación"],
                    showRun: true
                }
            ]
        },

        // ─── LECCIÓN 4: BUCLES (REPETIR) ───
        {
            title: "Bucles",
            badge: "Lección 4",
            filename: "repetir.txt",
            color: "#EC4899",
            completeMsg: "¡Ahora sabes repetir acciones sin escribir lo mismo muchas veces! Eso es un bucle.",
            steps: [
                {
                    lines: [
                        "REPETIR 3 VECES",
                        "    MOSTRAR \"Hola\""
                    ],
                    explain: {
                        icon: "🔁",
                        title: "Repetir sin cansarse",
                        text: "En vez de escribir \"Hola\" tres veces, usamos REPETIR. Solo escribes la instrucción UNA vez y la computadora la repite las veces que digas.",
                        concept: "REPETIR n VECES = hacer algo n veces"
                    },
                    visual: [
                        {type:"start", icon:"🔁", text:"REPETIR 3 VECES"},
                        {type:"loop", icon:"📝", text:'MOSTRAR "Hola"'}
                    ],
                    console: []
                },
                {
                    lines: [
                        "REPETIR 3 VECES",
                        "    MOSTRAR \"Hola\""
                    ],
                    explain: {
                        icon: "📊",
                        title: "¿Qué pasa al ejecutar?",
                        text: "Vuelta 1: muestra \"Hola\". Vuelta 2: muestra \"Hola\". Vuelta 3: muestra \"Hola\". Después de 3 vueltas, el bucle termina. ¡3 saludos con solo 1 línea!",
                        concept: "3 vueltas = 3 \"Hola\" en pantalla"
                    },
                    visual: [
                        {type:"start", icon:"🔁", text:"REPETIR 3 VECES"},
                        {type:"loop", icon:"1️⃣", text:'Vuelta 1: "Hola"'},
                        {type:"loop", icon:"2️⃣", text:'Vuelta 2: "Hola"'},
                        {type:"loop", icon:"3️⃣", text:'Vuelta 3: "Hola"'},
                        {type:"end", icon:"✅", text:"¡Bucle terminado!"}
                    ],
                    console: ["Hola", "Hola", "Hola"]
                },
                {
                    lines: [
                        "REPETIR 5 VECES",
                        "    MOSTRAR \"⭐ Estrella\""
                    ],
                    explain: {
                        icon: "⭐",
                        title: "Cambia el número",
                        text: "Si cambias 3 por 5, ahora se repite 5 veces. Solo toca cambiar un número. ¡Imagina escribir esto 5 veces sin un bucle!",
                        concept: "Cambia el número → cambia las vueltas"
                    },
                    visual: [
                        {type:"start", icon:"🔁", text:"REPETIR 5 VECES"},
                        {type:"loop", icon:"⭐", text:'MOSTRAR "⭐ Estrella"'},
                        {type:"loop", icon:"📊", text:"5 vueltas en total"}
                    ],
                    console: ["⭐ Estrella", "⭐ Estrella", "⭐ Estrella", "⭐ Estrella", "⭐ Estrella"]
                },
                {
                    lines: [
                        "REPETIR 3 VECES",
                        "    MOSTRAR \"🌟 Estrella mágica\"",
                        "",
                        "MOSTRAR \"¡Bucle terminado!\""
                    ],
                    explain: {
                        icon: "🏁",
                        title: "Después del bucle",
                        text: "La última línea está FUERA del bucle (sin sangría). Se ejecuta DESPUÉS de las 3 vueltas. Primero las estrellas, luego el mensaje final.",
                        concept: "Sin sangría = fuera del bucle, se ejecuta al final"
                    },
                    visual: [
                        {type:"start", icon:"🔁", text:"REPETIR 3 VECES"},
                        {type:"loop", icon:"🌟", text:'MOSTRAR "Estrella mágica" ×3'},
                        {type:"print", icon:"🏁", text:'MOSTRAR "¡Bucle terminado!"'},
                        {type:"end", icon:"▶", text:"¡Ejecutar!"}
                    ],
                    console: ["🌟 Estrella mágica", "🌟 Estrella mágica", "🌟 Estrella mágica", "", "¡Bucle terminado!"],
                    showRun: true
                }
            ]
        }
    ];

    // ═══════════════════════════════════════════
    // ESTADO
    // ═══════════════════════════════════════════
    var currentLesson = 0;
    var currentStep = 0;
    var running = false;
    var els = {};

    function init(){
        els = {
            tabs: document.querySelectorAll('.lesson-tab'),
            progressFill: document.getElementById('progressFill'),
            lessonBadge: document.getElementById('lessonBadge'),
            lessonTitle: document.getElementById('lessonTitle'),
            stepCurrent: document.getElementById('stepCurrent'),
            stepTotal: document.getElementById('stepTotal'),
            codeFilename: document.getElementById('codeFilename'),
            codeContent: document.getElementById('codeContent'),
            consoleOutput: document.getElementById('consoleOutput'),
            explainIcon: document.getElementById('explainIcon'),
            explainTitle: document.getElementById('explainTitle'),
            explainText: document.getElementById('explainText'),
            explainConcept: document.getElementById('explainConcept'),
            visualBlocks: document.getElementById('visualBlocks'),
            navDots: document.getElementById('navDots'),
            btnPrev: document.getElementById('btnPrev'),
            btnNext: document.getElementById('btnNext'),
            btnRun: document.getElementById('btnRun'),
            lessonComplete: document.getElementById('lessonComplete'),
            completeText: document.getElementById('completeText'),
            btnNextLesson: document.getElementById('btnNextLesson'),
            btnRestart: document.getElementById('btnRestart'),
            lessonPanel: document.querySelector('.lesson-panel')
        };

        if(!els.codeContent) return;

        els.tabs.forEach(function(tab){
            tab.addEventListener('click', function(){
                selectLesson(parseInt(this.dataset.lesson));
            });
        });

        els.btnPrev.addEventListener('click', prevStep);
        els.btnNext.addEventListener('click', nextStep);
        els.btnRun.addEventListener('click', runCode);
        els.btnNextLesson.addEventListener('click', function(){
            if(currentLesson < lessons.length - 1){
                selectLesson(currentLesson + 1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
        els.btnRestart.addEventListener('click', function(){
            currentStep = 0;
            els.lessonComplete.style.display = 'none';
            els.lessonPanel.style.display = '';
            render();
        });

        render();
    }

    function selectLesson(idx){
        currentLesson = idx;
        currentStep = 0;
        els.lessonComplete.style.display = 'none';
        els.lessonPanel.style.display = '';
        els.tabs.forEach(function(t){ t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
        els.tabs[idx].classList.add('active');
        els.tabs[idx].setAttribute('aria-selected','true');
        render();
    }

    // Colorear palabras clave del código simple
    function colorizeLine(text){
        var html = text;
        // Resaltar palabras clave
        var keywords = [
            {word: 'SI', color: '#FF7B72'},
            {word: 'ENTONCES', color: '#FF7B72'},
            {word: 'SINO', color: '#FF7B72'},
            {word: 'REPETIR', color: '#D2A8FF'},
            {word: 'VECES', color: '#D2A8FF'},
            {word: 'MOSTRAR', color: '#79C0FF'},
            {word: 'CAJA', color: '#FFA657'},
            {word: 'FIN', color: '#FF7B72'},
            {word: '>=', color: '#FF7B72'},
            {word: '<=', color: '#FF7B72'}
        ];

        // Proteger strings entre comillas
        var parts = [];
        var strRegex = /"([^"]*)"/g;
        var lastIndex = 0;
        var match;
        var tempHtml = '';

        // Escapar HTML
        html = html.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

        // Proteger strings
        var strings = [];
        html = html.replace(/"([^"]*)"/g, function(m, p1){
            strings.push(m);
            return '\x00STR' + (strings.length-1) + '\x00';
        });

        // Colorear keywords
        keywords.forEach(function(k){
            var regex = new RegExp('\\b' + k.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'g');
            html = html.replace(regex, '<span style="color:' + k.color + ';font-weight:600">' + k.word + '</span>');
        });

        // Colorear números sueltos
        html = html.replace(/\b(\d+)\b(?![^<]*>)/g, '<span style="color:#79C0FF">$1</span>');

        // Restaurar strings
        html = html.replace(/\x00STR(\d+)\x00/g, function(m, idx){
            return '<span style="color:#A5D6FF">' + strings[parseInt(idx)] + '</span>';
        });

        return html;
    }

    function render(){
        var lesson = lessons[currentLesson];
        var step = lesson.steps[currentStep];
        var total = lesson.steps.length;

        // Header
        els.lessonBadge.textContent = lesson.badge;
        els.lessonBadge.style.color = lesson.color;
        els.lessonBadge.style.background = lesson.color + '1A';
        els.lessonBadge.style.borderColor = lesson.color + '44';
        els.lessonTitle.textContent = lesson.title;
        els.stepCurrent.textContent = currentStep + 1;
        els.stepCurrent.style.color = lesson.color;
        els.stepTotal.textContent = '/ ' + total;
        els.codeFilename.textContent = lesson.filename;

        // Progress
        els.progressFill.style.width = ((currentStep + 1) / total * 100) + '%';

        // Dots
        els.navDots.innerHTML = '';
        for(var i = 0; i < total; i++){
            var dot = document.createElement('button');
            dot.className = 'nav-dot' + (i === currentStep ? ' active' : (i < currentStep ? ' done' : ''));
            dot.setAttribute('aria-label', 'Paso ' + (i+1));
            if(i === currentStep) dot.style.background = lesson.color;
            dot.addEventListener('click', (function(idx){
                return function(){ currentStep = idx; els.lessonComplete.style.display='none'; els.lessonPanel.style.display=''; render(); };
            })(i));
            els.navDots.appendChild(dot);
        }

        // Código
        els.codeContent.innerHTML = '';
        step.lines.forEach(function(line, idx){
            var div = document.createElement('div');
            div.className = 'code-line';
            div.style.animationDelay = (idx * 0.12) + 's';

            // Resaltar la última línea como nueva
            if(idx === step.lines.length - 1 && line.trim() !== ''){
                div.classList.add('highlighted');
                div.style.borderLeftColor = lesson.color;
                div.style.background = lesson.color + '15';
            }

            var numSpan = document.createElement('span');
            numSpan.className = 'code-line-num';
            numSpan.textContent = idx + 1;

            var textSpan = document.createElement('span');
            textSpan.className = 'code-line-text';
            if(line.trim() === ''){
                textSpan.innerHTML = '&nbsp;';
            } else {
                textSpan.innerHTML = colorizeLine(line);
            }

            div.appendChild(numSpan);
            div.appendChild(textSpan);
            els.codeContent.appendChild(div);
        });

        // Explicación
        els.explainIcon.textContent = step.explain.icon;
        els.explainTitle.textContent = step.explain.title;
        els.explainText.textContent = step.explain.text;
        els.explainConcept.textContent = step.explain.concept;

        // Visual blocks
        els.visualBlocks.innerHTML = '';
        step.visual.forEach(function(b, idx){
            var v = document.createElement('div');
            v.className = 'v-block v-block--' + b.type;
            v.style.animationDelay = (idx * 0.1) + 's';
            v.innerHTML = '<span class="v-block-icon">' + b.icon + '</span><span>' + b.text + '</span>';
            els.visualBlocks.appendChild(v);
        });

        // Consola
        els.consoleOutput.innerHTML = '<span class="console-placeholder">La salida aparecerá aquí...</span>';

        // Botones
        els.btnPrev.disabled = currentStep === 0;
        var isLast = currentStep === total - 1;
        els.btnNext.style.display = isLast ? 'none' : '';
        els.btnNext.style.background = 'linear-gradient(135deg, ' + lesson.color + ', ' + lesson.color + 'CC)';
        els.btnRun.style.display = step.showRun ? '' : 'none';

        if(isLast){
            els.lessonComplete.style.display = '';
            els.completeText.textContent = lesson.completeMsg;
            els.btnNextLesson.style.display = currentLesson < lessons.length - 1 ? '' : 'none';
        } else {
            els.lessonComplete.style.display = 'none';
        }
    }

    function nextStep(){
        var lesson = lessons[currentLesson];
        if(currentStep < lesson.steps.length - 1){
            currentStep++;
            render();
        }
    }

    function prevStep(){
        if(currentStep > 0){
            currentStep--;
            els.lessonComplete.style.display = 'none';
            els.lessonPanel.style.display = '';
            render();
        }
    }

    function runCode(){
        if(running) return;
        running = true;
        var lesson = lessons[currentLesson];
        var step = lesson.steps[currentStep];
        var output = step.console || [];

        els.consoleOutput.innerHTML = '';

        if(!output.length){
            var div = document.createElement('div');
            div.className = 'console-line info';
            div.textContent = 'ℹ Aún no hay salida en este paso.';
            els.consoleOutput.appendChild(div);
            running = false;
            return;
        }

        output.forEach(function(line, idx){
            setTimeout(function(){
                var div = document.createElement('div');
                div.className = 'console-line';
                if(line === ''){
                    div.innerHTML = '&nbsp;';
                } else {
                    div.textContent = '➜ ' + line;
                }
                els.consoleOutput.appendChild(div);
                els.consoleOutput.scrollTop = els.consoleOutput.scrollHeight;
                if(idx === output.length - 1) running = false;
            }, idx * 500);
        });
    }
})();
