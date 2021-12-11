export default {
  global: {
    componenteFormativo: 'Herramientas para el emprendedor 4.0',
    descripcionCurso:
      'Apreciado aprendiz, esta unidad te permitirá entender la importancia de la tecnología en los emprendimientos, además de desarrollar algunas habilidades de uso y planeación de herramientas digitales.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Tecnología',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Campos de acción de la tecnología',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Revolución industrial 4.0 (concepto y evolución)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Influencia 4.0 en la cotidianidad',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tecnologías asociadas',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas digitales y emprendimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Bancarización digital',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Monedas electrónicas',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Herramientas y redes sociales',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Modernización de los negocios con tecnología',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'AIU. (s. f.). Planeación tecnológica. Recuperado 25 de agosto de 2021, de ',
      link: 'https://www.aiu.edu/resources/adt/Lecci%C3%B3n%202%20AV.pdf',
    },
    {
      referencia:
        'DHL. (2018). DHL INAUGURA UNA CAPACITACIÓN DE INMERSIÓN EN REALIDAD VIRTUAL PARA LOS EMPLEADOS EN CHILE. ',
      link:
        'https://www.dhl.com/cl-es/home/prensa/archivo-de-prensa/2018/dhl-inaugura-una-capacitacion-de-inmersion-en-realidad-virtual-para-los-empleados-en-chile.html',
    },
    {
      referencia:
        'INTEF. (2017). Marco común de competencia digital docente. aprende intef. ',
      link:
        'https://aprende.intef.es/sites/default/files/2018-05/2017_1020_Marco-Com%C3%BAn-de-Competencia-Digital-Docente.pdf',
    },
    {
      referencia:
        'Ministerio de educación de Colombia. (2008). Ser competente en tecnología: ¡una necesidad para el desarrollo. Mineducación.',
      link:
        'https://www.mineducacion.gov.co/1621/articles40033_archivo_pdf_Orientaciones_grales_educacion_tecnologia.pdf',
    },
    {
      referencia:
        'Ollero Baturone, A. (2001). Robótica: Manipuladores y Robots Móviles. Google Books. ',
      link:
        'https://books.google.es/books?hl=es&lr=&id=TtMfuy6FNCcC&oi=fnd&pg=PR17&dq=robots&ots=33JTD-A89N&sig=ugA-U1MBSg-0IzmrXs87dLV0Oto#v=onepage&q=robots&f=false',
    },
    {
      referencia:
        'Ordinas, M. (2017). Las criptomonedas: ¿Oportunidad o burbuja? Bancamarch. ',
      link:
        'https://www.bancamarch.es/recursos/doc/bancamarch/20170109/2017/informe-mensual-de-estrategia-octubre-2017.pdf',
    },
    {
      referencia:
        'Pantéves Bautista, Y. (2013). Define tu idea de negocio. Cámara de comercio de Bogotá. ',
      link:
        'https://bibliotecadigital.ccb.org.co/bitstream/handle/11520/9029/1000001194.pdf?sequence=1',
    },
    {
      referencia:
        'Santiago, L. A. D. (2017). Los modelos de negocios y las tecnologías de la información y comunicación. Dialnet, 8. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=7262239',
    },
    {
      referencia:
        'Vanguardia. (2012, 10 abril). Facebook compra Instagram por mil millones de dólares. La Vanguardia. ',
      link:
        'https://www.lavanguardia.com/tecnologia/20120409/54283800284/facebook-compra-instagram.html',
    },
  ],
  glosario: [
    {
      termino: 'Realidad virtual',
      significado:
        'Tecnología que permite al usuario sumergirse en un entorno virtual para vivir una experiencia',
    },
    {
      termino: 'Bitcoin',
      significado:
        'Criptomoneda que surgió aproximadamente en el año 2009 y que tiene transacciones aplicando blockchain',
    },
    {
      termino: 'Nequi',
      significado:
        'Aplicación móvil asociada a la bancarización digital que permite realizar procesos como pagos, recibir dineros etc ',
    },
    {
      termino: 'Sensores',
      significado:
        'Dispositivos que permiten tomar medidas físicas o químicas y transformarlas en señales eléctricas para ser analizadas por un procesador',
    },
  ],
  complementario: [
    {
      texto:
        'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      texto:
        'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
      tipo: 'Artículo científico',
      link: 'https://www.google.com/',
    },
    {
      texto: 'Economía de Rosquilla. (s.f.).',
      tipo: 'Página web',
      descarga: ['/downloads/prueba.pdf', '/downloads/prueba.pdf'],
    },
    {
      texto: '2 minutos para entender el desarrollo sostenible – Spanish',
      tipo: 'Video',
      link: ['https://www.google.com/', 'https://www.google.com/'],
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
