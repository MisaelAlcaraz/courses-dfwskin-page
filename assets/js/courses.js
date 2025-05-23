 const courses = [
    {
        id: 1,
        title: "Extensiones de Pestañas",
        description:"La licencia en Pestañas, es una carrera para los amantes de las pestañas, te permitirá desarrollar habilidades en diferentes técnicas luciendo principalmente la mirada de una persona",
        followers: Math.floor(Math.random() * 100),
        hears: Math.floor(Math.random() * 100),
        hours: '2 1/2 y 5 Meses',
        img: {
            lic: "assets/images/courses/LICENCIA-PESTAÑAS.png",
            cur: "assets/images/courses/CURSO-LIFTING-Y-TINTE-DE-PESTAÑAS.png"
        },
        skills:[
            'Colocación de pestañas postizas.',
            'Levantamiento de pestañas.',
            'Aconsejar sobre tamaños y cantidad de pestañas acorde al tipo de ojos.',
            'Control higiénico de dicha actividad.',
            'Utilizar la técnica adecuada para su colocación.'
        ],
        programs: [
            'Conocimiento de todo el material a utilizar',
            'Enfermedades y afecciones de la piel',
            'Control de infecciones',
            'Estudio de las diferentes formas del rostro',
            'Diseños según tu forma de ojo  y rostro',
            'Normas y reglamentaciones del estado y además te incluimos dos certificaciones adicionales',
            'Pestañas de Volumen',
            '<span style="font-weight: bold;color: #d5b95a;">Bonus</span> Clase de Lifting & Tinte de pestañas'
        ],
        jobs: [
            'Spas.',
            'Hoteles.',
            'Clínicas de Belleza.',
            'Concursos de Belleza',
            'Dentro de empresas de la industria cosmética.',
            'Asesor de imagen en su propia consultoría privada.'
        ]
    },
    {
        id:  2,
        title: "Cosmetología",
        description: "La cosmetología es una carrera muy amplia en el área de la belleza, abarca temas como la colorimetría, corte y cuidado del cabello, además incluye el cuidado y salud de las uñas, productos y técnicas para el embellecimiento.",
        followers: Math.floor(Math.random() * 100),
        hears: Math.floor(Math.random() * 100),
        hours: "7 1/2 Meses y 15 Meses",
        img: {
            lic: "assets/images/courses/LICENCIA-COSMETOLOGÍA.png",
            cur: "assets/images/courses/CURSO-EXT.-PEST-técnica-CLASICA.png"
        },
        programs: [
            'Anatomía y estructura de la piel y el cabello.',
            'Enfermedades de la piel, cuero cabelludo y uñas.',
            'Análisis del cuero cabelludo y Control de infecciones.',
            'Química y productos para el cuidado del cabello.',
            'Procedimientos faciales básicos. Depilación de bello corporal y facial.',
            'Maquillaje básico profesional.',
            'Manicura.',
            'Pedicure.',
            'Alisado de cabello.',
            'Ondulación permanente.',
            'Extensiones de cabello.'
        ],
        skills:[
            'Tratamientos de color.',
            'Corte de cabello de Dama y Caballero',
            'Depilación con cera',
            'Tratamiento de ondulación',
            'Manicura y Pedicura',
            'Maquillaje',
            'Tratamiento de Alisado',
            'Peinados',
            'Tratamiento Faciales'
        ],
        jobs: [
            'Spas.',
            'Hoteles.',
            'Clínicas de Belleza.',
            'Concursos de Belleza',
            'Dentro de empresas de la industria cosmética.',
            'Asesor de imagen en su propia consultoría privada.',
            'Encargado de pasarelas y publicidad en el sector de modas.'
        ]
    },
    {
        id: 3,
        title: "Esteticista",
        description:"Esteticista es la enseñanza  faciales, corporales, cosméticos para manos y pies e incluso tratamientos especializados como es el caso de las terapias de rejuvenecimiento de piel.",
        followers: Math.floor(Math.random() * 100),
        hears: Math.floor(Math.random() * 100),
        hours: '6 y 12 Meses',
        img: {
            lic: "assets/images/courses/LICENCIA-ESTETICISTA.png",
            cur: "assets/images/courses/CURSO-DERMAPEN.png"
        },
        skills:[
            'Limpieza de la piel.',
            'Hidratación.',
            'Masajes.',
            'Aplicación cosmética.',
            'Depilación.',
            'Armonización facial.'
        ],
        programs: [
            'Anatomía y estructura de la piel. ',
            'Enfermedades de la piel.',
            'Análisis de la piel. ',
            'Control de infecciones. ',
            'Química & Productos para el cuidado de la piel. ',
            'Procedimientos faciales.',
            'Masajes faciales.',
            'Aparatología facial.',
            'Depilación de vello corporal & facial.',
            'Maquillaje básico profesional.',
            'Tratamientos avanzados (Peeling químicos, Derma-pen, Plasma -Pen).'
        ],
        jobs: [
            'Salones de belleza.',
            'Hoteles.',
            'Spas.',
            'Gimnasios.',
            'Incluso desde casa.'
        ]
    },
    {
        id: 4,
        title: "Manicurista",
        description: "Aprenderás al el cuidado, embellecimiento de las manos y en especial, el cuidado y pintura de las uñas sin contar con muchas otras ocupaciones propias del área.",
        followers: Math.floor(Math.random() * 100),
        hears: Math.floor(Math.random() * 100),
        hours: "5 y 10 Meses",
        img: {
            lic: "assets/images/courses/LICENCIA-MANICURISTA.png",
            cur: "assets/images/courses/CURSO-EXT.-PEST.-técnica-VOLUMEN.png"
        },
        skills: [
            'La aplicación de extensiones de uñas o de reparaciones.',
            'La aplicación de técnicas artísticas en la uñas.',
            'Recorte, perfilar y pulir las uñas.',
            'Acondicionar la piel alrededor de las uñas con aceites y cremas.',
            'Dar masajes en manos, pies o brazos para mejorar la circulación.',
            'Tratamientos adaptados para el fortalecimiento de las uñas.',
            'Tratamientos para que los clientes dejen de morderse las uñas.'
        ],
        programs: [
           'Reglas y normas de TDLR',
           'Control de infecciones ',
           'Anatomía y fisiología de la piel',
           'Trastornos y enfermedades de la piel ',
           'Química de los productos para el cuidado de las uñas ',
           'Procedimiento de manicura',
           'Procedimiento de pedicura',
           'Masajes de manos',
           'Realce de uñas de gel',
           'Realce de uñas acrílicas'
        ],
        jobs: [
            'Salones de belleza.',
            'Hoteles.',
            'Spas.',
            'Incluso desde casa.'
        ]
    },
    {
        id: 5,
        title: "CURSO EXTENSIONES DE PESTAÑAS",
        description: "Las extensiones de pestañas es una de las tendencias en belleza más buscada de la última década y tienen la función de aumentar la cantidad de pestañas para intensificar la mirada y agrandar los ojos. Con este curso serás capaz de manejar de manera profesional la técnica de extensiones de pestañas y poder construir un negocio.",
        followers: Math.floor(Math.random() * 100),
        hears: Math.floor(Math.random() * 100),
        hours: '2 Dias',
        img: {
            lic: "assets/images/courses/CURSO-EXT.-PEST-TECNICA-CLASICA.png",
            cur: "assets/images/courses/CURSO-EXT.-PEST-TECNICA-CLASICA.png"
        },
        skills: [
            'Colocación de pestañas postizas.',
            'Levantamiento de pestañas. ',
            'Aconsejar sobre tamaños y cantidad de pestañas acorde al tipo de ojos.',
            'Control higiénico de dicha actividad.',
            'Utilizar la técnica adecuada para su colocación.'
        ],
        programs: [
            'Control de infecciones',
            'Higiene y Seguridad durante el proceso ',
            'Enfermedades del ojo ',
            'Etapas de crecimiento de las pestañas ',
            'Conocimiento de todo el material a utilizar ',
            'Elección y elaboración de diseño, según el tipo de rostro',
            'Practica en maniquí y con modelo.',
            'Proceso paso a paso de todo el servicio de aplicación ',
            'Tips profesionales.'
        ],
        jobs: [
            'Emprendimiento en tu propio negocio.',
            'Spas.',
            'Hoteles.',
            'Clínicas de Belleza.',
            'Concursos de Belleza',
            'Dentro de empresas de la industria cosmética.',
            'Asesor de imagen en su propia consultoría privada.'
        ],
        exp: 'No se requiere que los estudiantes tengan ninguna experiencia antes de esta clase.',
        bonus: [
            'Técnica Individual 1 X 1',
            '<span style="font-weight: bold;color: #d5b95a;">Bonus</span> Clase de Lifting & Tinte de pestañas',
            '3 meses de Asesoramiento.',
            'Certificado de Estudios'
        ]
    },
    {
        id: 6,
        title: "CURSO APARATOLOGÍA FACIAL",
        description: "La aparatología son el conjunto de técnicas que se utilizan mediante aparatos eléctricos en el campo de la medicina estética. Son técnicas muy cómodas y efectivas, que se pueden aplicar tanto en el rostro como en el cuerpo. Aprende dominar el uso de los diferentes dispositivos para el cuidado de la piel, rejuvenecimiento facial y más.",
        followers: Math.floor(Math.random() * 100),
        hears: Math.floor(Math.random() * 100),
        hours: '2 Dias',
        img: {
            lic: "assets/images/courses/CURSO-APARATOLOGÍA-FACIAL.png",
            cur: "assets/images/courses/CURSO-APARATOLOGÍA-FACIAL.png"
        },
        skills: [
            'Vapor',
            'Lampara de wood',
            'Galvánica ',
            'Cepillo rotatorio',
            'Microdermoabrasión ',
            'Succión ',
            'Máquina Rociadora',
            'Martillo frío ',
            'Alta frecuencia ',
            'Hidra facial  ',
            'Espátula iónica ',
            'Ultrasonido',
            'Microcorriente',
            'Mascara LED',
            'Radio frecuencia'
        ],
        programs: [
            'Control de infecciones higiene y seguridad ',
            'Protocolos de uso de cada dispositivo',
            'Pautas de los tratamientos que podemos realizar ',
            'Contraindicaciones ',
            'Tratamiento y demostración del uso de la aparatología ',
            'Práctica en modelo'
        ],
        jobs: [
            'Emprendimiento en tu propio negocio.',
            'Spas.',
            'Hoteles.',
            'Clínicas de Belleza.',
            'Dentro de empresas de la industria cosmética.',
        ],
        exp: 'No se requiere que los estudiantes tengan ninguna experiencia antes de esta clase.',
        bonus: [
            '3 meses de Asesoramiento.',
            'Certificado de Estudios',
            'Incluye Kit de Faciales Profesional'
        ]
    },
    {
        id: 7,
        title: "CURSO PLASMAPEN",
        description: "Es un sistema novedoso, seguro y efectivo para tratar de forma no quirúrgica el exceso de piel, arrugas, manchas y signos de envejecimiento de la piel.",
        followers: Math.floor(Math.random() * 100),
        hears: Math.floor(Math.random() * 100),
        hours: '1 Dia',
        img: {
            lic: "assets/images/courses/CURSO-PLASMAPEN.png",
            cur: "assets/images/courses/CURSO-PLASMAPEN.png"
        },
        skills: [
            'Verrugas y lunares',
            'Manchas',
            'Tatuajes o delineado',
            'Líneas de expresión ',
            'Cicatrices'
        ],
        programs: [
            'Higiene y seguridad durante el procedimiento',
            'Protocolos de uso correcto del dispositivo',
            'Contraindicación',
            'Cuidados antes y después del tratamiento'
        ],
        jobs: [
            'Emprendimiento en tu propio negocio.',
            'Spas.',
            'Hoteles.',
            'Clínicas de Belleza.',
            'Dentro de empresas de la industria cosmética.',
        ],
        exp: 'No se requiere que los estudiantes tengan ninguna experiencia antes de esta clase.',
        bonus: [
            '3 meses de Asesoramiento.',
            'Certificado de Estudios',
            'Incluye Kit Profesional'
        ]
    },
    {
        id: 8,
        title: "CURSO DERMAPEN",
        description: "Dermapen es una de las últimas tendencias dentro de la estética facial y es que se trata de un tipo de lápiz que borra imperfecciones y que nos ayuda a lucir un rostro mucho más homogéneo y terso.",
        followers: Math.floor(Math.random() * 100),
        hears: Math.floor(Math.random() * 100),
        hours: '1 Dia',
        img: {
            lic: "assets/images/courses/CURSO-DERMAPEN.png",
            cur: "assets/images/courses/CURSO-DERMAPEN.png"
        },
        skills: [
            'Aprenderás a reducir las arrugas de la piel (en este post te damos tips para eliminar arrugas en la frente).',
            'Eliminar las marcas de expresión.',
            'Reducir la presencia de manchas del sol.',
            'Eliminar las marcas y cicatrices de acné.',
            'Eliminar las cicatrices que puedas tener en la dermis.',
            'Tratar otras imperfecciones propias del paso del tiempo y de la edad.'
        ],
        programs: [
            'Control de infecciones higiene y seguridad durante el procedimiento',
            'Protocolos de uso del dispositivo (Tipos de aguja y diámetro de profundidad)',
            'Beneficios y contraindicaciones del dispositivo ',
            'Conocimiento de los productos y sus beneficios ',
            'Antes y después del cuidado del paciente.',
            ' Tratamiento y demostración paso a paso de la técnica.',
            'Practica en maniquí y en Modelo'
        ],
        jobs: [
            'Emprendimiento en tu propio negocio.',
            'Spas.',
            'Hoteles.',
            'Clínicas de Belleza.',
            'Dentro de empresas de la industria cosmética.',
            'Asesor de imagen en su propia consultoría privada.'
        ],
        exp: 'No se requiere que los estudiantes tengan ninguna experiencia antes de esta clase.',
        bonus: [
            '3 meses de Asesoramiento.',
            'Certificado de Estudios',
            'Incluye Kit Profesional'
        ]
    },
    {
        id: 9,
        title: "CURSO LIFTING DE PESTAÑAS",
        description: "El Lifting de Pestañas es un tratamiento que alarga y crea una ligera curva hacia arriba de manera natural y duradera, consiguiendo mayor longitud y espesor. Para aquellas que tengan las pestañas medias o largas, rectas o sin forma, y deseen conseguir un resultado natural, ¡es la opción perfecta! ",
        followers: Math.floor(Math.random() * 100),
        hears: Math.floor(Math.random() * 100),
        hours: '1 Dia',
        img: {
            lic: "assets/images/courses/CURSO-LIFTING-Y-TINTE-DE-PESTAÑAS.png",
            cur: "assets/images/courses/CURSO-LIFTING-Y-TINTE-DE-PESTAÑAS.png"
        },
        skills: [
            'Lifting de pestañas',
            'Tinte',
            'Keratina'
        ],
        programs: [
            ''
        ],
        jobs: [
            'Emprendimiento en tu propio negocio.',
            'Spas.',
            'Hoteles.',
            'Clínicas de Belleza.',
            'Dentro de empresas de la industria cosmética.',
        ],
        exp: 'No se requiere que los estudiantes tengan ninguna experiencia antes de esta clase.',
        bonus: [
            '3 meses de Asesoramiento.',
            'Certificado de Estudios',
            '<span style="font-weight: bold;color: #d5b95a;">Bonus</span> Tinte de pestañas',
            'Incluye Kit Profesional',
        ]
    },
    {
        id: 10,
        title: "CURSO MICROBLADING",
        description: "El microblading es una técnica de maquillaje permanente para cejas que se realiza utilizando pequeñas agujas para rellenar con color las áreas deseadas.",
        followers: Math.floor(Math.random() * 100),
        hears: Math.floor(Math.random() * 100),
        hours: '3 Dias',
        img: {
            lic: "assets/images/courses/CURSO-MICROBLADING.jpg",
            cur: "assets/images/courses/CURSO-MICROBLADING.jpg"
        },
        skills: [
            'Diagnósticos de procedimientos',
            'Identificar tipos de piel',
            'Elección de pigmento ideal',
            'Identificar Fototipos de piel'
        ],
        programs: [
           'Estructura ósea del rostro',
           'Identificación de Músculos donde se posiciona nuestra ceja',
           'Anatomía de la piel y como trabajar sus diferentes tipos',
           'Anatomía de la ceja y su estructura ',
           'Teoría de Microblading ',
           'Colorimetría, Neutralización y Corrección para trabajos previos',
           'Practica en látex para dirección de trazos ',
           'Diseño de cejas con Compás Áureo',
           'Control de infecciones',
           'Practica en Modelo real. (4 modelos)'
        ],
        jobs: [
            'Emprendimiento en tu propio negocio.',
            'Spas.',
            'Hoteles.',
            'Clínicas de Belleza.',
            'Dentro de empresas de la industria cosmética.',
        ],
        exp: 'No se requiere que los estudiantes tengan ninguna experiencia antes de esta clase.',
        bonus: [
            'Técnica de Microblading',
            'Certificado de Estudios',
            '6 meses de Asesoramiento Online',
            '1 clase Presencial por cada mes durante el periodo de Asesoramiento',
            'Kit de práctica profesional para 30 Servicios',
            'Plantillas de prácticas'
        ]
    },
    {
        id: 11,
        title: "Barbería",
        description:"La Barbería es el arte y la técnica de cortar, arreglar y cuidar el cabello y la barba, combinando estilo, higiene y tendencias modernas. Va dirigida principalmente a hombres que buscan un servicio profesional para su imagen personal. También está enfocada a quienes desean desarrollarse como barberos profesionales, ya sea para trabajar en barberías establecidas o abrir su propio negocio.",
        followers: Math.floor(Math.random() * 100),
        hears: Math.floor(Math.random() * 100),
        hours: '1,000 horas',
        img: {
            lic: "assets/images/courses/LICENCIA-BAERBERIA.jpg",
            cur: "assets/images/courses/CURSO-BAERBERIA.jpg"
        },
        programs:{
            p1: {
                title: 'Cortes básicos:',
                programs:[
                'High Taper',
                'High Fade',
                'Mid Fade',
                'Mid Taper',
                'Low Taper',
                'Low Fade'
                ]
            },
            p2: {
                title: 'Cortes avanzados y estilos personalizados',
                programs:[
                    'Comb Over',
                    'Pompadour',
                    'Slick Back',
                    'Burst Taper Skin',
                    'Burst Fade Regular Skin'
                ]
            }
        },
        skills: [
            'Afeitado con navaja del cuero cabelludo',
            'Afeitado con navaja en barba',
            'Tintes de cabello',
            'Ondulados permanentes'
        ],
        jobs: [
            'Barberías tradicionales o modernas',
            'Salones de belleza unisex',
            'Barbería móvil',
            'Redes sociales y contenido digital',
            'Educador o instructor',
            'Distribución de productos',
            'Propietario de Barberías'
        ]
    },
]

const coursesTemplate = localStorage.getItem('coursesTemplate');
const time = localStorage.getItem('time');

if(!coursesTemplate){
    localStorage.setItem('coursesTemplate', JSON.stringify(courses))
}
if(time){
    const now = new Date().getTime();
    if((now - +time) / (1000 * 3600 * 24) > 1){
        localStorage.setItem('coursesTemplate', JSON.stringify(courses))
    }
}else{
    localStorage.setItem('time', new Date().getTime())
}