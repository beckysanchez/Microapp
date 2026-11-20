// ==========================================
// BASE DE DATOS DE MICROORGANISMOS
// ==========================================
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
      modelPath: '../Modelos/pelota.glb',
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
      modelPath: '../Modelos/pelota.glb',
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
      modelPath: 'Modelos/malassezia.glb',
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

// ==========================================
// UTILIDADES DE SESIÓN (Para pasar datos entre HTMLs)
// ==========================================
function getCurrentPathogen() {
  const id = localStorage.getItem('selectedPathogen') || 'mtb';
  return DB.pathogens[id];
}

function getCurrentCategory() {
  const id = localStorage.getItem('selectedCategory') || 'bacterias';
  return DB.categories.find(c => c.id === id);
}
