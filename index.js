particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ff0000"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.8,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 160,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  $(document).ready(function() {
  
    $(document).on("scroll", onScroll);
  
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off('scroll');

        $(this).blur();
        $('.navbar-right li').removeClass('active');
        $(this).parent('li').addClass('active');

        $('html, body').stop().animate({
            'scrollTop': $(this.hash).offset().top
        }, 500, 'swing', function () {
            window.location.hash = this.hash;
            $(document).on('scroll', onScroll);
        });
    });
  
});

function onScroll(ev){
    var scrollPosition = $(document).scrollTop();
    $('.navbar-right a').each(function () {
        var navbarLink = $(this),
            sectionElement = $(navbarLink.attr("href"));
        if (sectionElement.position().top <= scrollPosition && sectionElement.position().top + sectionElement.height() > scrollPosition) {
            $('.navbar-right li').removeClass("active");
            navbarLink.parent('li').addClass("active");
        }
    });
}

//nav on top
$(window).scroll(function() {
    var nav = $('#navbarMain');
    var top = 100;
    if ($(window).scrollTop() >= top) {
        nav.addClass('navbar-bg');
    } else {
        nav.removeClass('navbar-bg');
        
    }
});