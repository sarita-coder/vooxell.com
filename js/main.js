fullpage.initialize('#fullpage', {
  anchors: ['slide-1', 'slide-2', 'slide-3', 'slide-4', 'slide-5', 'slide-6'],
  menu: '#nav-parallax',
  verticalCentered: false,
  easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
  //slidesNavigation: true,
  navigation: false,
  'afterLoad': function(anchorLink, index){
    if(index == 4 || index == 6){
      $('.BTN').css("display","none");
      $('#menu-des').css("border-color","#27fc0d");
      $('.uno, .dos, .tres').css("background","#27fc0d");

    }
    else if (index == 5 || index == 1){
      $('.BTN').css("display","none");
      $('#menu-des').css("border-color","white");
      $('.uno, .dos, .tres').css("background","white");
    }
    else if (index == 3 || index == 2){
      $('#menu-des').css("border-color","black");
      $('.uno, .dos, .tres').css("background","black");

    }
  },


});

$('#menu-des').on('click',function(){
  $('#main-nav').toggleClass('mostrar')
  $('#menu-des').toggleClass('mover')
})

$(document).ready(function() {

  Materialize.updateTextFields();
  
    $('#btn-contact').click(function(){
      $('.contacto-responsive').fadeIn(1000);
    }) 

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
