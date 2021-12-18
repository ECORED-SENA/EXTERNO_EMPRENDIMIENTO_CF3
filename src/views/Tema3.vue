<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Herramientas digitales y emprendimiento
    img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img20.jpg', alt='') 
    .row.justify-content-center.align-items-center.m-t3-top(data-aos="slide-down")
      .col-lg-11.sup
        .color-p-gray.p-4
          p.mb-0 Como lo vimos en la unidad anterior, el emprendimiento y las herramientas digitales son aliados importantes en esta era digital, por ese motivo es importante que todo emprendedor conozca esas herramientas y se las pueda apropiar para fortalecer su idea de negocio. Las herramientas pueden ir desde el uso de redes sociales, la creación de contenido digital básico, análisis de datos, entre otros.          
    
    p(data-aos="slide-down").mt-5.text-center Las herramientas digitales van asociadas con las habilidades digitales que según el marco común de competencia digital están clasificadas en 5 competencias: 

    .bg-img-2.mt-5(data-aos="slide-left") 
      .row.justify-content-center.align-items-stretch
        .col-lg-4.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.p-5
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img22.svg', alt='')
                h5.text-center.mt-3.text-custom Información y alfabetización informacional
              .tarjeta-flip__contenido.p-3
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img22.svg', alt='')              
                h5.mt-3.text-center Información y alfabetización informacional
                p.mb-0.text-center Utiliza herramientas de búsqueda que favorezcan identificar y seleccionar información de interés.


        .col-lg-4.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.p-5
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img23.svg', alt='')
                h5.text-center.mt-3.text-custom Comunicación y colaboración
              .tarjeta-flip__contenido.p-3
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img23.svg', alt='')              
                h5.mt-3.text-center Comunicación y colaboración
                p.mb-0.text-center Comparte información a través de diferentes herramientas digitales, así mismo identifica formatos de comunicación y herramientas colaborativas que favorezcan el trabajo en equipo.

        .col-lg-4.mb-4.mb-sm-0
          .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.p-5
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img24.svg', alt='')
                h5.text-center.mt-3.text-custom Creación de contenidos digitales
              .tarjeta-flip__contenido.p-3
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img24.svg', alt='')              
                h5.mt-3.text-center Creación de contenidos digitales
                p.mb-0.text-center Crea contenido digital en el que un emprendedor joven puede hacer uso de herramientas sencillas para crear un banner o imagen para ser publicada en su página o en redes sociales.

      .row.justify-content-center.align-items-stretch.mt-4
        .col-lg-4.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.p-5
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img25.svg', alt='')
                h5.text-center.mt-3.text-custom Seguridad
              .tarjeta-flip__contenido.p-3
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img25.svg', alt='')              
                h5.mt-3.text-center Seguridad
                p.mb-0.text-center Protege la información, datos personales e identidad digital, de los contenidos digitales. Comprende los riesgos y amenazas en red y conoce las medidas de protección y seguridad.


        .col-lg-4.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.p-5
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img26.svg', alt='')
                h5.text-center.mt-3.text-custom Resolución de problemas
              .tarjeta-flip__contenido.p-3
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img26.svg', alt='')              
                h5.mt-3.text-center Resolución de problemas
                p.mb-0.text-center Identifica necesidades sobre el uso de recursos digitales y toma decisiones sobre la herramienta digital más apropiada para el negocio. Usar las tecnologías de forma creativa.
                    
    separador(data-aos="slide-left")

    .bg-img-3
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 3.1 Bancarización digital        
      .row.justify-content-center.align-items-center.mt-5    
        .col-lg-4(data-aos="slide-down")
          img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img29.png', alt='') 
        .col-lg-8
          p(data-aos="slide-down") ¿Alguna vez has hecho alguna compra por internet?, si nunca lo has hecho es importante que sepas que el mercado electrónico cada día toma más fuerza, porque además te permite hacer compras desde tu teléfono en la comodidad de tu hogar. Para profundizar un poco más sobre ello te invitamos a revisar el video que encuentras a continuación.
          .row.justify-content-center.align-items-center
            .col-lg-11          
              .tarjeta.color-primario.bg-blue-1.p-4.mt-4(data-aos="slide-down")
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0.text-white
                    h5.mb-1 Capítulo 1: Haciendo las compras en línea ahorras tiempo
                    p.text-small.mb-0 Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video. 
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=u2ZSRU21AQE" target="_blank")
                      span.text-custom Ver video 

          p(data-aos="slide-down").mt-4 Hoy en día el mundo digital se ha integrado a muchos procesos cotidianos, uno de ellos, relacionado con temas de bancarización, desde luego ya hace tiempo que se tenían las tarjetas de crédito y débito asociadas a una cuenta bancaria y con una tarjeta física, pero con las aplicaciones móviles se pueden emular muchos de esos procesos.

        .row.justify-content-center.align-items-center.mt-5(data-aos="slide-down")    
          .col-lg-10
            .tarjeta.color-secundario.bg-blue-1.px-5.mt-3
              .row.justify-content-evenly.align-items-center
                .col          
                  .row.justify-content-between.align-items-center.py-3
                    .col.mb-3.mb-sm-0.text-white
                      h5.mb-1 Jornada de Bancarización digital C23 - N3
                      p.text-small.mb-0 Te invitamos a ver un video de una experiencia del ministerio TIC en una población de Colombia frente a la bancarización digital.
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=n2doTJJGGo8" target="_blank")
                        span.text-custom Ver video
                .col-3.col-sm-2.col-lg-3
                  img(src="@/assets/ilustraciones/img28.svg")  

      .row.justify-content-center.align-items-center.mt-5.px-4
        .col-lg-8
          p(data-aos="slide-down") El Gobierno Nacional ha generado ayudas para la población como el ingreso solidario y uno de los requerimientos fue el tener una bancarización digital para poder enviar los pagos, para esta y otras necesidades existen aplicaciones gratuitas que permiten recibir, enviar, pagar y realizar varios procesos bancarios de manera gratuita para el usuario como lo son Nequi, Daviplata entre otros. Para tener mayor claridad sobre ello, te recomendamos ver un breve tutorial sobre como descargar y tener una cuenta de Nequi.
          .row.justify-content-center.align-items-center
            .col-lg-11         
              .tarjeta.color-primario.bg-blue-1.p-4.my-4(data-aos="slide-down")
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0.text-white
                    h5.mb-1 Crea una cuenta Nequi
                    p.text-small.mb-0 Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video. 
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://youtu.be/wZ7mPwDkGhc" target="_blank")
                      span.text-custom Ver video  
        .col-lg-4(data-aos="slide-down")
          img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img31.png', alt='')  

    separador(data-aos="slide-left")

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.2 Monedas electrónicas
    p(data-aos="slide-down").ps-5 Es muy probable que alguna vez hayas escuchado hablar sobre las criptomonedas como Bitcoin o Ethereum, sin embargo, es importante precisar algunos conceptos para poder entender esta tendencia.
    .row.justify-content-center.align-items-start 
      .col-lg-4(data-aos="slide-down")
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img32.png', alt='') 
      .col-lg-8
        p(data-aos="slide-down") Las criptomonedas son monedas digitales descentralizadas que no tienen a los bancos como intermediarios y que utilizan una encriptación o codificación para su creación, de allí el nombre de criptomonedas, que además son almacenadas en una billetera virtual.

        p(data-aos="slide-down") Como se mencionó antes, están asociadas a la tecnología Blockchain, con esta tecnología hay puntos que pueden ser computadores o dispositivos embebidos que sirven como parte de una red que se encarga de minar o procesar una transacción de criptomonedas, por lo cual recibe una comisión. Cada transacción tiene un código y la transacción queda registrada en muchos bloques, para tener seguridad en la transacción. (Ordinas, 2017)

        .cajon.color-acento-botones.p-4.mt-4(data-aos="zoom-in")
          p(data-aos="slide-down").mb-0 Las criptomonedas pueden llegar a ser volátiles, pero hay algunos países donde se han aceptado y han mostrado aumentos y disminución, siendo un tema de debate a nivel mundial, pero de mucha influencia. 

    separador(data-aos="slide-left")

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.3 Herramientas y redes sociales

    .row.justify-content-start.align-items-center 
      .col-lg-10.p-color-1-t3.py-3.px-3
        .row.justify-content-start.align-items-center 
          .col-lg-9.ps-5   
            p(data-aos="slide-down") Las redes sociales no solo son aplicaciones para hacer amigos y compartir nuestra vida, de hecho, hoy en día muchos negocios han usado las redes sociales para dar a conocer sus productos o servicios. Dentro de las redes sociales que más se usa para negocios actualmente están Facebook, que es una de las redes sociales con más usuarios y de las más antiguas, con una dinámica que ha permitido a empresas y pequeños emprendimientos crear sus páginas para darse a conocer, vender y generar impacto. Dispone de grupos y permite subir contenido en imagen, vídeo y el uso de etiquetas. 
    
            .cajon.color-acento-botones.p-4.mt-4(data-aos="zoom-in")
              p(data-aos="slide-down").mb-0 Las criptomonedas pueden llegar a ser volátiles, pero hay algunos países donde se han aceptado y han mostrado aumentos y disminución, siendo un tema de debate a nivel mundial, pero de mucha influencia.

    .row.justify-content-end.align-items-center 
      .col-lg-4.p-0.m-0.d-none.d-lg-block
        img.img-t.t3-m-top(data-aos="zoom-in")(src='@/assets/ilustraciones/img33.jpg', alt='')

    p(data-aos="slide-down").mt-5 Aunque hay más redes sociales, es importante resaltar a Youtube y Tiktok cuyos contenidos de video han permitido la difusión de información acerca de negocios y emprendimientos.

    p(data-aos="slide-down") Así, una de las necesidades de un emprendedor es poder identificar el tipo de público o la necesidad que tiene el usuario y para ello existe una herramienta muy interesante que puede ser de gran utilidad, como es Google Trends. Te invitamos a ver el video explicativo sobre la herramienta:

    .row.justify-content-center.align-items-center.mt-5(data-aos="slide-down")    
      .col-lg-10
        .tarjeta.color-secundario.bg-blue-1.px-5.mt-3
          .row.justify-content-evenly.align-items-center
            .col          
              .row.justify-content-between.align-items-center.py-3
                .col.mb-3.mb-sm-0.text-white
                  h5.mb-1 Herramientas y redes sociales: Google Trends
                  p.text-small.mb-0 Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://youtu.be/dTM3-gNS6VA" target="_blank")
                    span.text-custom Ver video
            .col-3.col-sm-2.col-lg-3
              img(src="@/assets/ilustraciones/img28.svg") 
              
    .row.justify-content-start.align-items-center.mt-5(data-aos="slide-down")    
      .col-lg-4
        h4.t3-title.text-white.ps-4.py-3 Tutoriales de diseño y publicación 

    .row.justify-content-center.align-items-center.mt-5    
      .col-lg-4(data-aos="slide-down")
        img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img34.jpg', alt='') 
      .col-lg-8
        p(data-aos="slide-down") Posterior a saber qué necesidad tienen las personas, el emprendedor digital requiere diseñar piezas publicitarias para sus redes sociales, a continuación, te invitamos a ver un tutorial sobre  la herramienta figma.
        .row.justify-content-center.align-items-center
          .col-lg-11          
            .tarjeta.color-primario.bg-blue-1.p-4.my-4(data-aos="slide-down")
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h5.mb-1 Figma
                  p.text-small.mb-0 Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=p2P3ETt_hcs" target="_blank")
                    span.text-custom Ver video 
        p(data-aos="slide-down") Ahora es momento de que pienses en cómo compartir el material por redes sociales, pero también piensa en que normalmente un emprendedor tiene muchas cosas que decir y, publicar en redes, puede ser complejo, para ello existen herramientas que permiten programar cuándo se realizará una publicación de manera anticipada. En este caso les invitamos a ver un video tutorial de Facebook Bussines para comprender con más claridad cómo se proyecta el contenido desde allí.
        .row.justify-content-center.align-items-center
          .col-lg-11          
            .tarjeta.color-primario.bg-blue-1.p-4.mt-4(data-aos="slide-down")
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h5.mb-1 Negocio de Facebook
                  p.text-small.mb-0 Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://youtu.be/RvgMD_NBJ_E" target="_blank")
                    span.text-custom Ver video 

    p(data-aos="slide-down").mt-5 Finalmente queremos invitarte a ver un video sobre una de las herramientas más comunes que usan las personas para atender clientes, el WhatsApp.
    .bg-img-4.mt-5(data-aos="slide-left")       
      .row.justify-content-center.align-items-center(data-aos="slide-down")    
        .col-lg-10
          .tarjeta.color-secundario.bg-blue-1.px-5.mt-3
            .row.justify-content-evenly.align-items-center
              .col          
                .row.justify-content-between.align-items-center.py-3
                  .col.mb-3.mb-sm-0.text-white
                    h5.mb-1 ¿Cómo puedes vender más en tu tienda con la ayuda de whatsapp?
                    p.text-small.mb-0 Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=sgHg2ynk0pI" target="_blank")
                      span.text-custom Ver video
              .col-3.col-sm-2.col-lg-3
                img(src="@/assets/ilustraciones/img28.svg")
                
      .row.justify-content-center.align-items-stretch(data-aos="slide-down")
        .col-lg-4              
          .row.justify-content-center.align-items-stretch.mt-5(data-aos="slide-down")    
            .col-lg-11.t3-card.p-3
              img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/7.svg', alt='')              
              h5.mt-3.text-center Integración de la tecnología y los negocios                      
        .col-lg-4              
          .row.justify-content-center.align-items-stretch.mt-5(data-aos="slide-down")    
            .col-lg-11.t3-card.p-3
              img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/8.svg', alt='')              
              h5.mt-3.text-center Planificación tecnologica

        .col-lg-4              
          .row.justify-content-center.align-items-stretch.mt-5(data-aos="slide-down")    
            .col-lg-11.t3-card.p-3
              img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/9.svg', alt='')              
              h5.mt-3.text-center Idea de negocio

    separador(data-aos="slide-left")
    .bg-img-3
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 3.4 Modernización de los negocios con tecnología
      .row.justify-content-center.align-items-center 
        .col-lg-4(data-aos="slide-down")
          img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img36.svg', alt='') 
        .col-lg-8
          p(data-aos="slide-down") Cuando hablamos de modernización de los negocios con tecnología debemos pensar en los procesos que se pueden potenciar con el uso de herramientas tecnológicas que  estés dispuesto a apropiar y a usar. Así que si decides emplear una página web o una red social, debes proyectar la actualización de información en la primera, lo que desearía encontrar un cliente potencial; mientras que en la segunda debes tener en cuenta la interacción con los usuarios, la respuesta oportuna y respetuosa a los mismos, así como en la dinamización de la red. El punto de todo esto es entender que las herramientas tecnológicas se han convertido en un aliado de los negocios y que cada vez las nuevas tecnologías se irán adaptando como algo necesario.
          .cajon.color-acento-botones.p-4.mt-4(data-aos="zoom-in")
            p(data-aos="slide-down").mb-0 Un ejemplo de integración de la tecnología con los negocios puede ser la atención al público, muchas veces las personas llegan a una página de redes sociales preguntando por los productos, pero no necesariamente van a comprar, generalmente hacen preguntas parecidas como el precio, el material, la forma de pago, de envío y si se reconoce esa tendencia, se puede usar un chatbot para poder atender esas preguntas básicas y de ser necesario algo más específico, el proceso lo puede llevar un humano. (Santiago, 2017) 
      .row.justify-content-center.align-items-center 
        .col-lg-11
          img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img37.jpg', alt='') 
    .row.justify-content-center.align-items-center.m-t3-top(data-aos="slide-down")
      .col-lg-11.sup
        .color-p-gray.p-4
          p.mb-0 Ahora apreciados emprendedores, es momento de pensar en los procesos que pueden ser potenciados por herramientas tecnológicas, las que están dispuestos a apropiar y a usar. 
    .row.justify-content-center.align-items-center.mt-5(data-aos="slide-down")
      .col-lg-10
        LineaTiempoD.color-primario
          .row.justify-content-center.align-items-center(numero="1" titulo="Planificación tecnológica")
            .col-lg-4
              img.img-t.img-a.my-3.yoyo(src='@/assets/ilustraciones/img38.jpg', alt='') 
            .col-lg-8
              p Cuando se realiza un análisis de lo que se tiene, de lo que se necesita y de los costos que esto representa a nivel de tecnología, se realiza un proceso básico de planificación tecnológica, que para empezar a implementarlo puedes tener en cuenta los siguiente: 
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span a
                  | Analiza qué tendencias existen para emprendimientos o negocios similares al tuyo.
                li 
                  .lista-ol--cuadro__vineta
                    span b
                  | Identifica las necesidades de tu negocio, especialmente aquellos procesos que se tornan repetitivos.
                li 
                  .lista-ol--cuadro__vineta
                    span c
                  | Selecciona las herramientas tecnológicas, teniendo en cuenta el costo de licencias y demás.
                li 
                  .lista-ol--cuadro__vineta
                    span d
                  | Determina si la inversión vale la pena y elabora el plan.
                li 
                  .lista-ol--cuadro__vineta
                    span e
                  | Busca herramientas gratuitas y dejarlas en un formato en el que se identifique claramente la herramienta, su descripción, necesidad que satisface, frecuencia de uso y plataforma.
            .row.justify-content-center.align-items-center
              .col-lg-11
                .cajon.color-acento-botones.p-4.mt-4
                  p.mb-0 Lo anterior se basa en algunas recomendaciones, pero se han adaptado a pequeños emprendimientos (AIU, s. f.) 

                h5.mt-5.text-center Plan básico de ejemplo herramientas digitales gratuitas
                .tabla-a.color-primario.mt-5 
                  table
                    thead
                      tr
                        th Herramienta
                        th Descripción
                        th Necesidad que satisface
                        th Frecuencia de uso
                        th Plataforma

                    tbody
                      tr
                        td.c-gray Facebook Bussines
                        td.c-gray Parte de facrbook cuendo se tiene un fan page. Permite administrar respuestas automáticas y programar publicaciones de facebook e instagram.
                        td.c-gray Responder al cliente de forma automática y publicar de forma programada.
                        td.c-gray Constante
                        td.c-gray PC

                      tr
                        td Capcut
                        td Edición de videos en teléfono.
                        td Editar videos para redes sociales.
                        td Semanal
                        td Móvil

                      tr
                        td.c-gray Google Trends
                        td.c-gray Analizar tendencias de búsqueda.
                        td.c-gray Obtener información para crear post o mejorar productos y servicios.
                        td.c-gray Mensual
                        td.c-gray PC/Móvil

                        
                      tr
                        td WhatsApp Bussines
                        td Versión de WhatsApp para negocios.
                        td Permite crear catálogos en la cuenta de WhatsApp, mensajes automáticos, etiquetar contactos.
                        td Constante
                        td Móvil

                      tr
                        td.c-gray Canva
                        td.c-gray Diseño gráfico básico.
                        td.c-gray Crear post para redes socieles.
                        td.c-gray Semanal
                        td.c-gray PC/Móvil

                        
                      tr
                        td Crello
                        td Diseño gráfico básico.
                        td Crear post para redes socieles.
                        td Semanal
                        td PC/Móvil

                      tr
                        td.c-gray Telegram
                        td.c-gray Mensajería.
                        td.c-gray Permite crear canales para difundir noticias.
                        td.c-gray Constante
                        td.c-gray Móvil

                        
                      tr
                        td Pixibay
                        td Fuente de imágenes y videos gratis.
                        td Suministra imágenes y videos para material en redes.
                        td Semanal
                        td PC/Móvil

                      tr
                        td.c-gray Photoroom
                        td.c-gray Quita el fondo de imágenes.
                        td.c-gray Para diseño de post.
                        td.c-gray Mensual
                        td.c-gray Móvil

                        
                      tr
                        td Complemento de chrome Whatsweb 
                        td Mensajes masivos por WhatsApp.
                        td Para enviar información por WhatsApp a los clientes sin necesidad de agregarlos.
                        td Constante
                        td PC

                      tr
                        td.c-gray Ingramer
                        td.c-gray Identifica Hashtag.
                        td.c-gray Potenciar post de redes sociales.
                        td.c-gray Constante
                        td.c-gray PC/Móvil

                        
                      tr
                        td VnVideo
                        td Edición de videos en teléfono.
                        td Editar videos para redes sociales.
                        td Semanal
                        td Móvil

                      tr
                        td.c-gray Audacity 
                        td.c-gray Creación de audios.
                        td.c-gray Crear y editar audios para comerciales radiales o para entrevistas.
                        td.c-gray Mensual
                        td.c-gray PC


                p.mt-5 Otro de los aspectos importantes es el plan de contenido digital, sin duda, el uso de redes sociales como herramienta de más fácil acceso es una oportunidad para los emprendedores, pero no puede ser el resultado de una improvisación, sino que se debe planear. A continuación, los invitamos a ver un video sobre la planeación de contenidos

                .row.justify-content-center.align-items-center.mt-5    
                  .col-lg-10
                    .tarjeta.color-secundario.bg-blue-1.px-5.mt-3
                      .row.justify-content-evenly.align-items-center
                        .col          
                          .row.justify-content-between.align-items-center.py-3
                            .col.mb-3.mb-sm-0.text-white
                              h5.mb-1 ¿Cómo puedes vender más en tu tienda con la ayuda de whatsapp?revolución industrial en Colombia 4.0
                              p.text-small.mb-0 Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.
                            .col-sm-auto
                              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=p7ZwZhSjqTM" target="_blank")
                                span.text-custom Ver video
                        .col-3.col-sm-2.col-lg-3
                          img(src="@/assets/ilustraciones/img28.svg")

          .row.justify-content-center.align-items-center(numero="2" titulo="Idea de negocio")
            .row.justify-content-start.align-items-center
              .col-lg-4.py-2
                h4.text-center.t3-title-blue ¿Y qué es una idea de negocio? 
            .row.justify-content-center.align-items-center
              .col-lg-4
                img.img-t.img-a.my-3.yoyo(src='@/assets/ilustraciones/img39.png', alt='') 
              .col-lg-8
                p Si buscas en tu mente es posible que tengan varias ideas para un emprendimiento o que previo a pasar por aquí, ya tengas tanto una idea como un emprendimiento, lo importante en este momento es entender que toda idea debe estar en constante posibilidad de mejoramiento y por ello como emprendedor debes aprender todo el tiempo.
                  .row.justify-content-center.align-items-start.mt-4
                    .col-auto
                      img.img-t.img-a(src='@/assets/ilustraciones/img40.svg', alt='') 

                    .col-10
                      p.c-blue.p-3 Empecemos por analizar un problema o una necesidad de tu entorno, ten en cuenta que todo emprendimiento debe resolver un problema o satisfacer una necesidad, si al analizar no encuentras ese problema vuelve a intentarlo, porque es importante entender el problema al cual te vas a enfrentar. ¿Hay un tema ambiental a abordar?, ¿Es una necesidad de servicio?, ¿Hay alguna ausencia de conocimiento?, posterior a determinar el problema trata de identificar la causa principal.

              .row.justify-content-center.align-items-start.mt-4
                .col-auto
                  img.img-t.img-a(src='@/assets/ilustraciones/img41.svg', alt='') 
                .col-10
                  p.c-blue.p-3 La invitación a continuación es a vivir un momento creativo, un momento para generar ideas, por ello te invitamos a que tomes una hoja de papel y pongas un cronómetro con un tiempo de 10 minutos, ahora escribe todas las ideas que se te ocurran, no importa que sean descabelladas es momento de dejar volar  la imaginación y dejar fluir la creatividad. 

              .row.justify-content-center.align-items-start.mt-4
                .col-auto
                  img.img-t.img-a(src='@/assets/ilustraciones/img42.svg', alt='') 
                .col-10
                  p.c-blue.p-3 Toma una pausa… Ahora determina qué tan viables son esas ideas, cuales se pueden implementar, cuales se complementan y con esto organiza una idea integrada. En este momento, prioriza las ideas tomando en cuenta lo que tienes, lo que debes invertir, lo que más satisface la necesidad. En este punto, es importante que analices herramientas como Google Trends para determinar qué es lo quiere el mercado. 

              .row.justify-content-center.align-items-start.mt-4
                .col-auto
                  img.img-t.img-a(src='@/assets/ilustraciones/img43.svg', alt='') 
                .col-10
                  p.c-blue.p-3 Luego, haz pequeñas pruebas con la solución planteada, si puedes realiza un prototipo o dibujo. Esto te ayudará a entender mejor lo que tienes, además es bueno que puedas explicarlo a otra persona para que te pueda dar opiniones al respecto. También, analiza los sectores económicos y las posibles fuentes de financiación que puedas encontrar. (Pantéves Bautista, 2013)

              h4.my-4.text-center Ahora sí, sin más, puedes decir que tienes estructurada tu idea de negocio. 
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
