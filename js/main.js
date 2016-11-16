        fullpage.initialize('#fullpage', {
        anchors: ['slide-1', 'slide-2', 'slide-3', 'slide-4', 'slide-5', 'slide-6'],
        menu: '#nav-parallax',
        verticalCentered: false,
        easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
        //slidesNavigation: true,
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
>>>>>>> master
