

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

  // End particle .js



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


//

var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
tl.to('#wheel', 1, { scale: 0.85, rotation: 17.5, ease: 'none' },0) // Power1.easeIn
.to('#wheel', 1, { scale: 0.7, rotation: 35, opacity: 0, boxShadow: 0, ease: 'none' },1)
.to('#wheel-group', 0, { backgroundColor: 'none', boxShadow:0, ease: 'none' },1)
.to('#x',1, {scale: 6, transformOrigin:"40px 42px", ease: 'none'  }, 0 )
.to('#x',1, {scale: 9, transformOrigin:"40px 42px", backgroundColor: 'rgba(235,0,40,0)', x: 340, ease: Power1.easeOut }, 1 )
.to('#about-head', 1, {opacity: 1, width: 520,  ease: 'none' },1 )
.to('.about-text', 1, {opacity: 1, width: 720, ease: 'none' },1 )


new ScrollMagic.Scene({
  duration: 1400, // the scene should last for a scroll distance of 100px
  trigerElement: '#wheel-group',
  //offset: 100 // start this scene after scrolling for 50px
})
  .setPin('#hero-wrap') // pins the element for the the scene's duration
  .setTween(tl)  

  .addTo(controller); // assign the scene to the controller

// Timer Scene//
new ScrollMagic.Scene({
  triggerElement: "#timer",
  triggerHook: 0.8, // show, when scrolled 20% into view
  duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
  offset: 50 // move trigger to center of element
})
.setClassToggle(".timer-wrap", "visible") // add class to reveal
//.addIndicators() // add indicators (requires plug
.addTo(controller);
var cardReveal = document.getElementsByClassName("cardContainer");
for (var i=0; i < cardReveal.length; i++) { // create a scene for each element
  new ScrollMagic.Scene({
            triggerElement: cardReveal[i], // y value not modified, so we can use element as trigger as well
            offset: i*80,												 // start a little later
            triggerHook: 0.9,
          })
          .setClassToggle(cardReveal[i], "visible") // add class toggle
          .addTo(controller);
}
var text1_theme = document.querySelector("#text1-theme");
new ScrollMagic.Scene({
  triggerElement: text1_theme, // y value not modified, so we can use element as trigger as well
  offset: 170,												 // start a little later
  triggerHook: 0.9,
})
.setClassToggle(text1_theme, "visible") // add class toggle
.addIndicators() // add indicators (requires plug
.addTo(controller);

var text2_theme = document.querySelector("#text2-theme");
new ScrollMagic.Scene({
  triggerElement: text2_theme, // y value not modified, so we can use element as trigger as well
  offset: 170,												 // start a little later
  triggerHook: 0.9,
})
.setClassToggle(text2_theme, "visible") // add class toggle
.addIndicators() // add indicators (requires plug
.addTo(controller);


  /// Timer ///
  function updateTimer() {
    future  = Date.parse("September 28, 2023 9:30:00");
    now     = new Date();
    diff    = future - now;
  
    days  = Math.floor( diff / (1000*60*60*24) );
    hours = Math.floor( diff / (1000*60*60) );
    mins  = Math.floor( diff / (1000*60) );
    secs  = Math.floor( diff / 1000 );
  
    d = days;
    h = hours - days  * 24;
    m = mins  - hours * 60;
    s = secs  - mins  * 60;
  
    document.getElementById("timer")
      .innerHTML =
        '<div>' + d + '<span>days</span></div>' +
        '<div>' + h + '<span>hours</span></div>' +
        '<div>' + m + '<span>minutes</span></div>' +
        '<div>' + s + '<span>seconds</span></div>' ;
  }
  setInterval('updateTimer()', 1000 );
  


  const timerDiv = document.getElementById('timer');
  const section = document.querySelector('.date-sec');
  
  section.addEventListener('mousemove', (e) => {
    const xPos = (e.clientX / section.offsetWidth - 0.5) * 60; // Adjust the multiplier as needed
    const yPos = (e.clientY / section.offsetHeight - 0.5) * 60; // Adjust the multiplier as needed
    timerDiv.style.transform = `translate(${xPos}px, ${yPos}px) scale(2.5)`;
  });
  

  const trailer = document.getElementById("trailer");

  const animateTrailer =(e, interacting)=> {
    const x = e.clientX - trailer.offsetWidth / 2,
          y = e.clientY - trailer.offsetHeight / 2;
    
    
    const keyframes = {
      transform :`translate(${x}px , ${y}px) scale(${interacting ? 8 : 1})`
    }
      trailer.animate(keyframes ,{
      duration:500,
        fill: "forwards"
     });
  }
  
  window.onmousemove = e =>{
    const interactable = e.target.closest(".interactables");
    interacting = interactable !== null;
    
    animateTrailer(e, interactable);
  }