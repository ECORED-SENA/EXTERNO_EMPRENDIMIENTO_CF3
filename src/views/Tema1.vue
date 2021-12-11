<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Tecnología
    .bg-img-t1
      .row.justify-content-center.align-items-center         
        .col-lg-5(data-aos="fade-right")
          img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img1.png', alt='')        
        .col-lg-7(data-aos="fade-left")
          .cajon.color-acento-botones.p-4
            p(data-aos="slide-down").mb-0 La tecnología la podemos definir como el trabajo y desarrollo de un ingenio humano para satisfacer una necesidad (Ministerio de Educación de Colombia, 2008), lo que implica que cuando hablamos de tecnología, no solamente lo estemos haciendo de un computador, un teléfono móvil, una aplicación o un desarrollo con inteligencia artificial, también podríamos referirnos a objetos que nos ayuda a generar una solución a una necesidad específica, en lo que podríamos pensar en cosas simples como un lápiz, un cuaderno o un borrador, y no necesariamente digitales.  

      separador(data-aos="slide-left")
      .px-5
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
          h2 1.1 Campos de acción de la tecnología  
        .row.justify-content-center.align-items-center 
          .col-lg-7 
            p(data-aos="slide-down") ¿Si te digo tres palabras en este momento y luego te pido que menciones tres escenarios donde veas estas tres palabras aplicadas, lo podrías hacer rápidamente?, hagamos la prueba:
            
            .row.justify-content-center.align-items-center 
              .col-lg-11        
                .list.mt-4(data-aos="slide-down")
                  .list__item
                      .list__item__bulletNumber
                          span 1
                  .list__txt 
                      p.mb-0 agropecuarias y pesqueras
                .list.mt-3(data-aos="slide-down")
                  .list__item
                      .list__item__bulletNumber
                          span 2
                  .list__txt 
                      p.mb-0 de la manufactura
                .list.mt-3(data-aos="slide-down")
                  .list__item
                      .list__item__bulletNumber
                          span 3
                  .list__txt 
                      p.mb-0 de la construcción
                .list.mt-3(data-aos="slide-down")
                  .list__item
                      .list__item__bulletNumber
                          span 4
                  .list__txt 
                      p.mb-0 de la Información y la comunicación
                .list.mt-3(data-aos="slide-down")
                  .list__item
                      .list__item__bulletNumber
                          span 5
                  .list__txt 
                      p.mb-0 de la salud, servicios y recreación

          .col-lg-5(data-aos="fade-right")
            img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img2.png', alt='')        

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/ilustraciones/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="slide-down") Así pues, vemos que la tecnología contiene los aparatos tangibles diseñados o creados por el ser humano, e intangibles como las corporaciones o los diferentes programas de un computador, así mismo involucra a las personas, la infraestructura y los procesos requeridos para diseñar, operar, fabricar y reparar los artefactos. (MEN, 2008). Veamos algunos ejemplos de los diversos campos de acción de la tecnología. 
        

    TabsA.color-acento-botones.mt-5(data-aos="slide-left")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Entrenamiento de personas")
        .row.justify-content-center.align-items-center 
          .col-lg-7      
            p La tecnología se ha aplicado en entrenamiento de personas por medio de simuladores para que puedan realizar procesos más rápidos y exactos, por ejemplo en la medicina con dispositivos de realidad virtual y aumentada los cirujanos pueden realizar procesos y determinar los pasos más efectivos para algunas cirugías, o el empleo de desarrollos específicos que permiten agilizar la comprensión de procesos y conceptos de forma inmersiva como lo permite la realidad virtual. 
          .col-lg-5
            img.img-t.img-a.my-3.yoyo(data-aos="zoom-in")(src='@/assets/ilustraciones/img4.png', alt='')    

      .tarjeta.color-acento-botones--borde.p-4(titulo="Educación")
        .row.justify-content-center.align-items-center 
          .col-lg-5
            img.img-t.img-a.my-3.yoyo(data-aos="zoom-in")(src='@/assets/ilustraciones/img5.png', alt='')         
          .col-lg-7      
            p En el campo de la educación ha sido fundamental, desde procesos tan necesarios como una videoconferencia por medio de plataformas, documentos colaborativos para que los estudiantes trabajen en equipo, muros virtuales para compartir experiencias o imágenes, herramientas TIC de gamificación para motivar, bases de datos para consultar información, y por supuesto en entornos presenciales la tecnología sigue siendo útil para proyectar una pantalla o incluso para emplear elementos de medición según la especialidad. 

      .tarjeta.color-acento-botones--borde.p-4(titulo="Eventos deportivos")
        .row.justify-content-center.align-items-center 
          .col-lg-7      
            p En los eventos deportivos el uso de la tecnología es muy importante, para poder realizar transmisiones en directo, llevar los marcadores y toda la puesta en escena que requieren estos eventos.
            p Todo esto nos permite dimensionar campos tan diversos que puede tener la tecnología que indudablemente en algún momento impactarán nuestros emprendimientos, para así lograr entender que debemos crecer como emprendedores y empezar a analizar y dimensionar cómo esta podría aportar valor a nuestra idea.  

          .col-lg-5
            img.img-t.img-a.my-3.yoyo(data-aos="zoom-in")(src='@/assets/ilustraciones/img6.png', alt='')  



</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
