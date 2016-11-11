      fullpage.initialize('#fullpage', {
        anchors: ['slide-1', 'slide-2', 'slide-3', 'slide-4', 'slide-5', 'slide-6'],
        menu: '#nav-parallax',
        verticalCentered: false,
        easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
        slidesNavigation: true,
        navigation: false,

      });






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



// $(window).resize(function(){
//   var width = $(window).width();
//   if($(window).width() >= 760){

//   }
//   else if($(window).width() < 920){
//     $(document).on("scroll", function(){
//     //sacamos el desplazamiento actual de la página
//     var desplazamientoActual = $(document).scrollTop();
//     //accedemos al control de "ir arriba"
//     //var controlArriba = $("#irarriba");


//        // console.log(desplazamientoActual);

//     });
//     // scroll
//     $(".link-1").click(function() {
//         $("html, body").animate({scrollTop: $(".section-1").offset().top}, 2000);
//     });
//     $(".link-2").click(function() {
//         $("html, body").animate({scrollTop: $(".section-2").offset().top}, 2000);
//     });
//     $(".link-3").click(function() {
//         $("html, body").animate({scrollTop: $(".section-3").offset().top}, 2000);
//     });
//     $(".link-4").click(function() {
//         $("html, body").animate({scrollTop: $(".section-4").offset().top}, 2000);
//     });
//     $(".link-5").click(function() {
//         $("html, body").animate({scrollTop: $(".section-5").offset().top}, 2000);
//     });
//     $(".link-6").click(function() {
//         $("html, body").animate({scrollTop: $(".section-6").offset().top}, 2000);
//     });

//   }

// });

// $(window).resize();

