fullpage.initialize('#fullpage', {
  anchors: ['slide-1', 'slide-2', 'slide-3', 'slide-4', 'slide-5', 'slide-6'],
  menu: '#nav-parallax',
  verticalCentered: false,
  easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
  //slidesNavigation: true,
  navigation: false,
  'afterLoad': function(anchorLink, index){
    if(index == 4){
      $('.BTN').css("display","none");
    }
    else if (index == 2){
      $('.BTN').css("display","none");
      //$('#BI, #DA, #CE').addClass('.cerrar');
    }
  },


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
