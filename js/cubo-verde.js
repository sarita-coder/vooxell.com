/* Particulas config content (json): */
$(document).ready(function(){
  var ancho=$(window).width();
  if(ancho > 770){
    particlesJS('particles',
    {
       "particles": {
        "number": {
          "value": 100,
          "density": {
            "enable": false,
            "value_area": 1200
          }
        },
        "color": {
          "value": "#27fc0d"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#27fc0d"
          },
          "polygon": {
            "nb_sides": 3
          },
          "image": {
            "src": "img/vooxel/cubo_vooxell.png",
            "width": 100,
            "height": 100
          }
        },
          "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.3,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 14.617389821424212,
            "size_min": 24.362316369040354,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 280,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 0.5,
          "direction": "top",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 400,
            "rotateY": 100
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": false
        },
        "modes": {
          "grab": {
            "distance": 300,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 303.7898019343676,
            "size": 3,
            "duration": 1,
            "opacity": 0.9,
            "speed": 1
          },
          "repulse": {
            "distance": 200,
            "duration": 0.5
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": false
    }
    );
  }
  else if( ancho<770) {
    particlesJS('particles',
  
    {
       "particles": {
        "number": {
          "value": 45,
          "density": {
            "enable": false,
            "value_area": 1200
          }
        },
        "color": {
          "value": "#27fc0d"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#27fc0d"
          },
          "polygon": {
            "nb_sides": 3
          },
          "image": {
            "src": "img/vooxel/cubo_vooxell.png",
            "width": 100,
            "height": 100
          }
        },
          "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.3,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 14.617389821424212,
            "size_min": 24.362316369040354,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 280,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 0.3,
          "direction": "top",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 400,
            "rotateY": 100
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": false
        },
        "modes": {
          "grab": {
            "distance": 300,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 303.7898019343676,
            "size": 3,
            "duration": 1,
            "opacity": 0.9,
            "speed": 1
          },
          "repulse": {
            "distance": 200,
            "duration": 0.5
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": false
    }
    );

  }
})

