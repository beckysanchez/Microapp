const DB = {
  categories: [
    { id: 'bacterias', label: 'Bacterias', abbr: 'BA', sub: 'Mycobacterium tuberculosis', disabled: false },
    { id: 'hongos', label: 'Hongos', abbr: 'HO', sub: 'Malassezia furfur', disabled: true },
    { id: 'parasitos', label: 'Parásitos', abbr: 'PA', sub: 'Trichomonas vaginalis', disabled: false }
  ],
  pathogens: {
    trichomonas: {
      id: 'trichomonas',
      category: 'parasitos',
      name: 'Trichomonas vaginalis',
      abbr: 'Tv',
      morfIntro: 'Protozoario unicelular flagelado, forma piriforme ("forma de pera"). Presenta únicamente trofozoíto — NO tiene quistes.',
      structures: [
        { name: 'Núcleo', desc: 'Contiene 6 cromosomas.' },
        { name: 'Flagelos', desc: '4 anteriores y 1 posterior; permiten movimientos rápidos de traslación y rotación.' },
        { name: 'Membrana ondulante', desc: 'Asociada al quinto flagelo; participa en el movimiento activo.' },
        { name: 'Axostilo', desc: 'Estructura longitudinal análoga a una columna vertebral; proporciona rigidez anatómica.' }
      ],
      formaInfectiva: 'Trofozoíto: forma activa, se alimenta, crece y se reproduce. Generalmente es la forma que causa los síntomas.',
      virulencia: ['Adhesinas', 'Cisteína-proteinasas', 'LPG (lipofosfoglicano)', 'CDF (Factor citotóxico)', 'Captación de hierro', 'Evasión inmune'],
      epidemiologia: 'ITS de transmisión sexual. Afecta principalmente a mujeres de 15 a 50 años.',
      comoLlega: 'Paciente femenina que acude por leucorrea espumosa, fétida + prurito + disuria. A la exploración física encuentras eritema vaginal y cuello uterino con lesiones puntiformes en cervix un aspecto como "cuello en fresa."',
      muestraPedida: 'Examen microscópico de flujo vaginal/uretral.',
      queVeriamos: 'Trofozoítos flagelados, móviles. Sin presencia de quistes.',
      vignette: 'Mujer de 34 años consulta por flujo vaginal espumoso, fétido y amarillo-verdoso, con disuria y prurito vulvar. Refiere relaciones sexuales sin preservativo con una nueva pareja hace 2 semanas. A la exploración: eritema vaginal y cuello uterino con lesiones puntiformes.',
      q1Question: '¿Qué muestra solicitarías para confirmar el diagnóstico?',
      q1Options: ['Sangre venosa', 'Exudado vaginal', 'Orina de 24 horas', 'Heces fecales'],
      q1Correct: 1,
      q1FeedbackCorrect: '¡Correcto! El exudado vaginal permite la observación microscópica de trofozoítos vivos.',
      q1FeedbackIncorrect: 'Incorrecto. La muestra primaria para tricomoniasis sintomática es el exudado vaginal.',
      reveal: 'Reporte: En el exudado vaginal en fresco se identifican protozoarios móviles flagelados.',
      q2Question: '¿Cuál es el agente etiológico y cómo se llama la enfermedad?',
      q2Options: [
        'Trichomonas vaginalis — Tricomoniasis',
        'Chlamydia trachomatis — Cervicitis por clamidia',
        'Neisseria gonorrhoeae — Cervicitis gonocócica',
        'Treponema pallidum — Sífilis'
      ],
      q2Correct: 0,
      q2FeedbackCorrect: '¡Correcto! Trichomonas vaginalis es el parásito causante de la tricomoniasis.',
      q2FeedbackIncorrect: 'Incorrecto. La clínica y la presencia de flagelados móviles corresponden a T. vaginalis.',
      labMuestra: 'Exudado vaginal',
      labTecnica: 'Examen en fresco',
      labCaption: 'Visualización microscópica de trofozoítos flagelados mostrando movimiento enérgico.'
    },
    mtb: {
      id: 'mtb',
      category: 'bacterias',
      name: 'Mycobacterium tuberculosis',
      abbr: 'Mt',
      morfIntro: 'Bacilo ácido-alcohol resistente (BAAR) aerobio estricto. Tinción de Ziehl-Neelsen positiva, aerobio estricto, Forma cordones serpiginosos (factor cordón).',
      structures: [
        { name: 'Morfología', desc: 'Bacilo delgado, ligeramente curvado o recto.' },
        { name: 'Factor cordón', desc: 'Lipoarabinomanano (LAM/ManLAM), ácidos micólicos, sulfátidos, sistema de secreción ESX-1, ESAT-6, CFP-10 y proteínas PE/PPE.' },
        { name: 'Ácidos micólicos', desc: 'Ácidos grasos de cadena larga que forman una pared celular e hidrofóbica. Permite retener la carbolfucsina aún despues de la decoloración con alcohol, dando la característica de BAAR en la tincion de Ziehl-Neelsen.' },
        { name: 'Patogenia intracelular', desc: 'Impide fusión de fagosoma con lisosomas enhibiendo EEA1.' }
      ],
      formaInfectiva: 'Transmisión aérea mediante aerosoles/gotitas respiratorias de núcleos de Wells.',
      virulencia: ['Factor cordón (trehalosa dimicolato)', 'LAM / ManLAM', 'Ácidos micólicos', 'Sulfátidos', 'Sistema ESX-1 (ESAT-6, CFP-10)'],
      epidemiologia: 'Transmisión aérea entre humanos. Mayor incidencia en inmunocomprometidos o zonas endémicas.',
      comoLlega: 'Paciente que acude por tos persistente, expectoración ± hemoptisis, sudoración nocturna, perdida de peso y astenia.',
      muestraPedida: 'Esputo (preferentemente para prueba molecular y cultivo).',
      queVeriamos: 'Bacilos ácido-alcohol resistentes (BAAR) mediante tincion de Ziehl-Neelsen.',
      vignette: 'Hombre de 42 años acude por tos productiva de 4 semanas, fiebre vespertina, sudoración nocturna y pérdida de peso. Refiere un episodio reciente de hemoptisis.',
      q1Question: '¿Qué muestra solicitarías para confirmar el diagnóstico sospechado?',
      q1Options: ['Sangre venosa', 'Esputo', 'Orina de 24 horas', 'Heces fecales'],
      q1Correct: 1,
      q1FeedbackCorrect: '¡Correcto! El esputo para baciloscopía (Ziehl-Neelsen) o GeneXpert es el estudio estándar de inicio.',
      q1FeedbackIncorrect: 'Incorrecto. Para la sintomatología respiratoria tuberculosa, la muestra es el esputo.',
      reveal: 'Reporte: En el estudio que le solicitaste te reportan bacilos ácido alcohol resistentes.',
      q2Question: '¿Cuál es el agente etiológico y el cuadro clínico?',
      q2Options: [
        'Mycobacterium tuberculosis — Tuberculosis pulmonar',
        'Streptococcus pneumoniae — Neumonía típica',
        'Nocardia spp. — Nocardiosis pulmonar',
        'Mycobacterium avium — Síndrome de Lady Windermere'
      ],
      q2Correct: 0,
      q2FeedbackCorrect: '¡Correcto! Mycobacterium tuberculosis es el bacilo responsable de la tuberculosis pulmonar clásica.',
      q2FeedbackIncorrect: 'Incorrecto. La clínica de larga evolución y los BAAR corresponden a M. tuberculosis.',
      labMuestra: 'Esputo',
      labTecnica: 'Tinción de Ziehl-Neelsen',
      labCaption: 'Frotis teñido donde se observan bacilos finos color fucsia intenso (BAAR+) contrastados con azul de metileno.'
    },
    malassezia: {
      id: 'malassezia',
      category: 'hongos',
      name: 'Malassezia furfur',
      abbr: 'Mf',
      morfIntro: 'Hongo dimórfico, lipofílico y saprófito de la piel humana. En fase patógena forma blastoconidios y filamentos cortos.',
      structures: [
        { name: 'Morfología', desc: 'Agrupaciones de levaduras redondeadas junto a hifas cortas y sinuosas ("espagueti con albóndigas").' },
        { name: 'Requerimiento lipídico', desc: 'Dependencia de lípidos para su desarrollo metabólico y adherencia folicular.' },
        { name: 'Interferencia pigmentaria', desc: 'Produce ácido azelaico que inhibe la tirosinasa, alterando la melanogénesis epidérmica.' }
      ],
      formaInfectiva: 'Transición de levadura comensal a forma micelial patógena favorecida por calor, humedad y sebo.',
      virulencia: ['Lipasas y fosfolipasas', 'Producción de ácido azelaico', 'Malasezina (apoptosis de melanocitos)', 'Pigmentos indólicos'],
      epidemiologia: 'Distribución cosmopolita, altamente prevalente en climas tropicales y adultos jóvenes.',
      comoLlega: 'Paciente de 20 años con máculas descamativas hipo o hiperpigmentadas en tórax, cuello y espalda, con fluorescencia amarillenta a la Luz de Wood.',
      muestraPedida: 'Raspado / escamas de las lesiones epidérmicas.',
      queVeriamos: 'Cúmulos de blastoconidios y filamentos cortos con KOH al 10%.',
      vignette: 'Joven de 21 años consulta tras vacaciones en la playa por manchas hipocrómicas con descamación fina en pecho y espalda, no pruriginosas.',
      q1Question: '¿Qué muestra o técnica diagnóstica solicitarías?',
      q1Options: ['Sangre venosa', 'Escamas de piel (KOH)', 'Biopsia muscular', 'Frotis faríngeo'],
      q1Correct: 1,
      q1FeedbackCorrect: '¡Correcto! El raspado de escamas con cinta adhesiva y examen directo con KOH al 10% confirma el diagnóstico.',
      q1FeedbackIncorrect: 'Incorrecto. Para lesiones superficiales descamativas se analizan las escamas epidérmicas con KOH.',
      reveal: 'Reporte microscópico: Se observan cúmulos de levaduras gemantes e hifas cortas típicas en "espagueti con albóndigas".',
      q2Question: '¿Cuál es el agente etiológico y cómo se llama la patología?',
      q2Options: [
        'Malassezia furfur — Pitiriasis versicolor',
        'Trichophyton rubrum — Tiña corporal',
        'Candida albicans — Candidiasis cutánea',
        'Fonsecaea pedrosoi — Cromoblastomicosis'
      ],
      q2Correct: 0,
      q2FeedbackCorrect: '¡Correcto! Malassezia furfur produce la pitiriasis (o tiña) versicolor.',
      q2FeedbackIncorrect: 'Incorrecto. El patrón en espagueti con albóndigas es patognomónico de M. furfur.',
      labMuestra: 'Escamas de piel',
      labTecnica: 'Examen directo con KOH 10%',
      labCaption: 'Patrón diagnóstico característico de cúmulos de levaduras con filamentos cortos septados.'
    }
  }
};

// 
// GESTOR DE ESTADO
// 
const State = {
  stack: ['cover'],
  categoryId: null,
  pathogenId: null,
  expandedStructure: null,
  q1Selected: null,
  q2Selected: null,

  push(screen) {
    this.stack.push(screen);
    render();
  },

  pop() {
    if (this.stack.length > 1) {
      this.stack.pop();
      render();
    }
  },

  currentScreen() {
    return this.stack[this.stack.length - 1];
  },

  resetQuiz() {
    this.q1Selected = null;
    this.q2Selected = null;
  }
};

// 
// RENDER
// 
function render() {
  const container = document.getElementById('app-container');
  const screen = State.currentScreen();
  const pathogen = State.pathogenId ? DB.pathogens[State.pathogenId] : null;

  switch (screen) {
    case 'cover':
      container.innerHTML = `
        <div class="cover-screen">
          <div class="cover-badge">M</div>
          <h1 class="cover-title">Microbiology</h1>
          <div class="cover-subtitle">Laboratory Practice</div>
          <p class="cover-desc">Práctica interactiva de identificación bacteriológica, micológica y parasitaria.</p>
          <button class="action-btn gold" onclick="State.push('menu')">Comenzar Práctica</button>
        </div>
      `;
      break;

    case 'menu':
      container.innerHTML = `
        <header class="nav-header light-bg">
          <button class="btn-back light" onclick="State.pop()">‹</button>
          <h2 class="nav-title">Microbiología</h2>
        </header>
        <div class="screen-content">
          ${DB.categories.map(c => `
            <button class="menu-btn" ${c.disabled ? 'disabled' : ''} onclick="State.categoryId='${c.id}'; State.push('submenu');">
              <div class="badge-circle">${c.abbr}</div>
              <div class="menu-btn-content">
                <div class="menu-btn-title">${c.label}</div>
                <div class="menu-btn-sub">${c.sub}</div>
              </div>
              <div class="menu-btn-arrow">›</div>
            </button>
          `).join('')}
        </div>
      `;
      break;

    case 'submenu':
      const cat = DB.categories.find(c => c.id === State.categoryId);
      const pathogensInCat = Object.values(DB.pathogens).filter(p => p.category === State.categoryId);
      container.innerHTML = `
        <header class="nav-header">
          <button class="btn-back" onclick="State.pop()">‹</button>
          <h2 class="nav-title">${cat.label}</h2>
        </header>
        <div class="screen-content">
          ${pathogensInCat.map(p => `
            <button class="menu-btn" onclick="State.pathogenId='${p.id}'; State.resetQuiz(); State.push('hub');">
              <div class="badge-circle gold">${p.abbr}</div>
              <div class="menu-btn-content">
                <div class="menu-btn-title italic">${p.name}</div>
              </div>
              <div class="menu-btn-arrow">›</div>
            </button>
          `).join('')}
        </div>
      `;
      break;

    case 'hub':
      container.innerHTML = `
        <header class="nav-header">
          <button class="btn-back" onclick="State.pop()">‹</button>
          <h2 class="nav-title italic">${pathogen.name}</h2>
        </header>
        <div class="screen-content">
          <button class="menu-btn" onclick="State.push('morfologia')">
            <div class="badge-square">Mo</div>
            <div class="menu-btn-content text-semibold">Morfología</div>
            <div class="menu-btn-arrow">›</div>
          </button>
          <button class="menu-btn" onclick="State.push('virulencia')">
            <div class="badge-square">FV</div>
            <div class="menu-btn-content text-semibold">Factores de Virulencia</div>
            <div class="menu-btn-arrow">›</div>
          </button>
          <button class="menu-btn" onclick="State.push('clinica')">
            <div class="badge-square">RC</div>
            <div class="menu-btn-content text-semibold">Resumen Clínico</div>
            <div class="menu-btn-arrow">›</div>
          </button>
          <button class="menu-btn" onclick="State.resetQuiz(); State.push('caso1');">
            <div class="badge-square gold">CC</div>
            <div class="menu-btn-content text-semibold">Caso Clínico (Quiz)</div>
            <div class="menu-btn-arrow">›</div>
          </button>
          <button class="menu-btn" onclick="State.push('laboratorio')">
            <div class="badge-square">RL</div>
            <div class="menu-btn-content text-semibold">Reporte de Laboratorio</div>
            <div class="menu-btn-arrow">›</div>
          </button>
        </div>
      `;
      break;

    case 'morfologia':
      container.innerHTML = `
        <header class="nav-header">
          <button class="btn-back" onclick="State.pop()">‹</button>
          <div>
            <h2 class="nav-title">Morfología</h2>
            <div class="nav-subtitle italic">${pathogen.name}</div>
          </div>
        </header>
        <div class="screen-content">
          <div class="img-placeholder">
            <span>[Ilustración de la estructura celular]</span>
          </div>
          <div class="card">
            ${pathogen.morfIntro}
          </div>
          <div class="flex-col gap-sm">
            ${pathogen.structures.map((s, i) => `
              <div class="accordion-item">
                <button class="accordion-trigger" onclick="State.expandedStructure = (State.expandedStructure === ${i} ? null : ${i}); render();">
                  <span>${s.name}</span>
                  <span>${State.expandedStructure === i ? '▴' : '▾'}</span>
                </button>
                ${State.expandedStructure === i ? `
                  <div class="accordion-body">${s.desc}</div>
                ` : ''}
              </div>
            `).join('')}
          </div>
          <div class="card-highlight">
            <strong class="text-primary">Forma Infectiva / Característica:</strong> ${pathogen.formaInfectiva}
          </div>
        </div>
      `;
      break;

    case 'virulencia':
      container.innerHTML = `
        <header class="nav-header">
          <button class="btn-back" onclick="State.pop()">‹</button>
          <div>
            <h2 class="nav-title">Factores de Virulencia</h2>
            <div class="nav-subtitle italic">${pathogen.name}</div>
          </div>
        </header>
        <div class="screen-content">
          ${pathogen.virulencia.map(v => `
            <div class="virulence-item">
              <div class="bullet-dot"></div>
              <div>${v}</div>
            </div>
          `).join('')}
        </div>
      `;
      break;

    case 'clinica':
      container.innerHTML = `
        <header class="nav-header">
          <button class="btn-back" onclick="State.pop()">‹</button>
          <div>
            <h2 class="nav-title">Resumen Clínico</h2>
            <div class="nav-subtitle italic">${pathogen.name}</div>
          </div>
        </header>
        <div class="screen-content">
          <!-- Tarjeta 1: Epidemiología -->
          <div class="card">
            <span class="pill-tag">Epidemiología</span>
            <p>${pathogen.epidemiologia}</p>
          </div>

          <!-- Tarjeta 2: Presentación Clínica (Ahora solo con ¿Cómo llega?) -->
          <div class="card">
            <span class="pill-tag">Presentación Clínica</span>
            <div class="section-label">¿Cómo llega al consultorio?</div>
            <p>${pathogen.comoLlega}</p>
          </div>

          <!-- Tarjeta 3: Diagnóstico (Ahora incluye la muestra y lo que veríamos) -->
          <div class="card">
            <span class="pill-tag">Diagnóstico</span>
            <div class="section-label">¿Qué muestra pedirías?</div>
            <p class="mb-md">${pathogen.muestraPedida}</p>
            
            <div class="section-label">¿Qué veríamos?</div>
            <p>${pathogen.queVeriamos}</p>
          </div>
        </div>
      `;
      break;

    case 'caso1':
      const answered1 = State.q1Selected !== null;
      const isCorrect1 = answered1 && State.q1Selected === pathogen.q1Correct;
      container.innerHTML = `
        <header class="nav-header gold-bg">
          <button class="btn-back" onclick="State.pop()">‹</button>
          <h2 class="nav-title">Caso Clínico (Paso 1)</h2>
        </header>
        <div class="screen-content">
          <div class="card">
            <strong>Viñeta clínica:</strong><br/>
            ${pathogen.vignette}
          </div>
          <div class="question-title">
            ${pathogen.q1Question}
          </div>
          <div>
            ${pathogen.q1Options.map((opt, i) => {
        let cls = '';
        let icon = '';
        if (answered1) {
          if (i === pathogen.q1Correct) { cls = 'correct'; icon = '✓'; }
          else if (i === State.q1Selected) { cls = 'wrong'; icon = '✕'; }
        }
        return `
                <button class="option-btn ${cls}" onclick="if(!${answered1}){ State.q1Selected =${i}; render(); }">
                  <span>${opt}</span>
                  <span>${icon}</span>
                </button>
              `;
      }).join('')}
          </div>
          ${answered1 ? `
            <div class="card-feedback ${isCorrect1 ? 'correct' : 'wrong'}">
              ${isCorrect1 ? pathogen.q1FeedbackCorrect : pathogen.q1FeedbackIncorrect}
            </div>
            <button class="action-btn" onclick="State.push('caso2')">Continuar al Diagnóstico</button>
          ` : ''}
        </div>
      `;
      break;

    case 'caso2':
      const answered2 = State.q2Selected !== null;
      const isCorrect2 = answered2 && State.q2Selected === pathogen.q2Correct;
      container.innerHTML = `
        <header class="nav-header gold-bg">
          <button class="btn-back" onclick="State.pop()">‹</button>
          <h2 class="nav-title">Caso Clínico (Paso 2)</h2>
        </header>
        <div class="screen-content">
          <div class="card-highlight italic">
            ${pathogen.reveal}
          </div>
          <div class="question-title">
            ${pathogen.q2Question}
          </div>
          <div>
            ${pathogen.q2Options.map((opt, i) => {
        let cls = '';
        let icon = '';
        if (answered2) {
          if (i === pathogen.q2Correct) { cls = 'correct'; icon = '✓'; }
          else if (i === State.q2Selected) { cls = 'wrong'; icon = '✕'; }
        }
        return `
                <button class="option-btn ${cls}" onclick="if(!${answered2}){ State.q2Selected =${i}; render(); }">
                  <span>${opt}</span>
                  <span>${icon}</span>
                </button>
              `;
      }).join('')}
          </div>
          ${answered2 ? `
            <div class="card-feedback ${isCorrect2 ? 'correct' : 'wrong'}">
              ${isCorrect2 ? pathogen.q2FeedbackCorrect : pathogen.q2FeedbackIncorrect}
            </div>
            <button class="action-btn" onclick="State.push('laboratorio')">Ver Reporte de Laboratorio</button>
          ` : ''}
        </div>
      `;
      break;

    case 'laboratorio':
      container.innerHTML = `
        <header class="nav-header">
          <button class="btn-back" onclick="State.pop()">‹</button>
          <div>
            <h2 class="nav-title">Reporte de Laboratorio</h2>
            <div class="nav-subtitle italic">${pathogen.name}</div>
          </div>
        </header>
        <div class="screen-content">
          <div class="img-placeholder micro">
            <span>[Microscopio / Tinción]</span>
            <span class="img-placeholder-hint">(Míralo tú mismo)</span>
          </div>
          <div class="lab-grid">
            <div class="card lab-stat">
              <div class="lab-stat-label">Muestra</div>
              <div class="lab-stat-value">${pathogen.labMuestra}</div>
            </div>
            <div class="card lab-stat">
              <div class="lab-stat-label">Técnica</div>
              <div class="lab-stat-value">${pathogen.labTecnica}</div>
            </div>
          </div>
          <div class="card-highlight">
            ${pathogen.labCaption}
          </div>
          <button class="action-btn" onclick="State.stack = ['cover', 'menu']; render();">Volver al Menú Principal</button>
        </div>
      `;
      break;
  }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  render();
});