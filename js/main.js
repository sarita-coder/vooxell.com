<<<<<<< HEAD
      fullpage.initialize('#fullpage', {
        anchors: ['slide-1', 'slide-2', 'slide-3', 'slide-4', 'slide-5', 'slide-6'],
        menu: '#nav-parallax',
        verticalCentered: false,
        easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
        //slidesNavigation: true,
        navigation: false,


      });
=======

jQuery(document).ready(function() {
    jQuery.fn.fullpage({
        anchors: ['slide-1', 'slide-2', 'slide-3', 'slide-4', 'slide-5', 'slide-6', 'slide-7', 'slide-8'],
        menu: '#nav-parallax',
        verticalCentered: true,
        resize : true,
        scrollingSpeed: 700,
        easing: 'easeInQuart',

        navigation: false,
        navigationPosition: false,
        loopBottom: false,
        loopTop: false,
        autoScrolling: true,
        css3: false,
        paddingTop: 10,
        paddingBottom: 0,

        //events
         afterLoad: function(anchorLink, index){

            if(anchorLink=='slide-2'){
                jQuery('#section1').find('.sobreNosotros').delay(200).animate({
                    left:'0%'
                },1000,'easeOutExpo');  
            }
            if(anchorLink=='slide-4'){
                jQuery('#section4 .col').delay(500).animate({
                    left:'0%'
                },1500,'easeOutExpo',function(){
                     jQuery('#section4 h2').fadeTo(4000,1);
                })
               
            }

        },
      
       
    });

    Materialize.updateTextFields();


});

(function(){
      var words = [
          " "+'Inteligencia de Negocios'+ " ",
          'Desarrollo Ágil',
          'Consultoría Experta'
          ], i = 0;
      setInterval(function(){
          $('#changingword').fadeOut(function(){
              $(this).html(words[i=(i+1)%words.length]).fadeIn();
          });
      }, 4000);
        
  })();

function maquina(contenedor,texto,intervalo){
   // Calculamos la longitud del texto
   longitud = texto.length; 
   // Obtenemos referencia del div donde se va a alojar el texto.
   cnt = document.getElementById(contenedor);
   var i=0;
   // Creamos el timer
   timer = setInterval(function(){
      // Vamos añadiendo letra por letra y la _ al final.
      cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + "|";
      // Si hemos llegado al final del texto..
      if(i >= longitud){
         // Salimos del Timer y quitamos la barra baja (_)
         clearInterval(timer);
         
         cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
         return true;
      } else {
         // En caso contrario.. seguimos
         i++;
      }},intervalo);
};
var texto = "vooxell";
// 100 es el intervalo de minisegundos en el que se escribirá cada letra.
maquina("intro",texto,200);







>>>>>>> ba0174dde9436a50f4c8d54dce958786cf90bd4f






<<<<<<< HEAD
  $('#menu-des').on('click',function(){
    $('#main-nav').toggleClass('mostrar')
    $('#menu-des').toggleClass('mover')
  })
  
$(document).ready(function() {


  Materialize.updateTextFields();

    $('.BI').click(function(){
        $('#BI').fadeIn(1000);
    })
    $('.DA').click(function(){
      $('#DA').fadeIn(1000);
    })
    $('.CE').click(function(){
      $('#CE').fadeIn(1000);
    })
    $('.btn_cerrar').click(function(){
      $('#BI').fadeOut(1000);
    })
    $('.btn_cerrar').click(function(){
      $('#DA').fadeOut(1000);
    })
    $('.btn_cerrar').click(function(){
      $('#CE').fadeOut('xfast');
    })

});
=======




    /*** Formularios ***/
    $('#contac-frm1').click(function(){
        $('#form1').fadeIn(1000);
    })
    $('#contac-frm2').click(function(){
        $('#form2').fadeIn(1000);
    })
    $('.btn-cerrar').click(function(){
        $('#form1').fadeOut(1000);
    })
    $('.btn-cerrar').click(function(){
        $('#form2').fadeOut(1000);
    })

    $('#Container').mixItUp();

    /** header **/
    $('.slide-parnet').slider({
        indicators:false,
        interval:1000
    });

    $('.carousel').carousel({
       padding:40,
       dist:-10,
       indicators:false,
       shift:5,
    });

    $('.modal-trigger').leanModal({
        opacity: 0.1,
    });

    $('#menu-des').on('click',function(){
        $('#main-nav').toggleClass('mostrar')
        $('#menu-des').toggleClass('mover')
    })


    $('.btn-perfil-referen').click(function(){
        $('.contenedor-inicial').show(3000);
        $('.contenedor-inicial').show("slow");
        $('.mix').hide("fast");
    })
    $('.btn-perfil').click(function(){

        $('.contenedor-inicial').hide("fast");
    })
































var logo=false;
var menu=false;
var scroll;

    $(window).scroll(function() {
        scroll = $(window).scrollTop();
        if(scroll> 200){
            if(!logo){
            $(".VOOXELL").css({"margin-top":"2rem","width":"10rem","height":"4rem"})
            $(".logo-text").css({"display":"none"})
            $(".logo-vooxel").css({"padding-top":"0rem","margin":"auto 90%"})
                logo=true;
            }
        }
        else {
            if(logo){
            $(".VOOXELL").css({"margin-top":"30%","width":"30rem","height":"10rem"})
            $(".logo-text").css({"display":"block"})
            $(".logo-vooxel").css({"padding-top":"10rem","margin":"auto"})
               logo=false;
            }
        }

    });
    // $(window).scroll(function() {
    //     scroll = $(window).scrollTop();
    //     if(scroll> 800){
    //         if(!menu){
    //         $(".hover-bajar").css({"color":"#C1C1C1"})
    //         $(".hover-subir").css({"color":"#C1C1C1"})
    //         $(".active span").css({"color":"black!important"})
    //         $("#nav-parallax").css({"border-right":"0.01em solid rgba(216, 214, 214, 0.17)"})
    //         $(".menu-bar").css({"border":"0.01em solid rgba(179, 170, 170, 0.91)"})
    //         $(".bar").css({"background":"rgba(179, 170, 170, 0.91)"})
    //             menu=true;
    //         }
    //     }

    //     else {
    //         if(menu){
    //         $(".active span").css({"color":"white"})
    //         $(".hover-bajar").css({"color":"white"})
    //         $(".hover-subir").css({"color":"white"})
    //         $(".hover-text").css({"color":"white"})
    //         $("#nav-parallax").css({"border-right":"0.01em solid white"})
    //         $(".menu-bar").css({"border":"0.01em solid white"})
    //            menu=false;
    //         }
    //     }
    // });
>>>>>>> ba0174dde9436a50f4c8d54dce958786cf90bd4f
