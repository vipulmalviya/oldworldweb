const serviceBtn = document.querySelector('.serviceBtn');
const serviceToggle = document.querySelector('.serviceToggle');
const a = document.querySelectorAll('.a');
serviceBtn.addEventListener('click', () => {
  serviceToggle.classList.toggle('open');
})

const sidebar = document.querySelector(".sidebar");
const menubtn = document.querySelector(".menuBtn");
const closebtn = document.querySelector(".closebtn");
menubtn.addEventListener("click", () => {
  document.body.style.overflow = sidebar.classList.add("active") ? "auto" : "hidden";
})
closebtn.addEventListener("click", () => {
  document.body.style.overflow = sidebar.classList.remove("active") ? "hidden" : "auto";
})

a.forEach(dets => {
  dets.addEventListener("click", () => {
    document.body.style.overflow = sidebar.classList.toggle("active") ? 'hidden' : 'scroll';
  });
});




$(document).ready(function () {
    $("#CprevBtn").on("click", function () {
        $(".owl-carousel2").trigger("prev.owl.carousel");
    });

    $("#CnextBtn").on("click", function () {
        $(".owl-carousel2").trigger("next.owl.carousel");
    });
});
// Initialize the new banner slider
$(" .owl-carousel2").owlCarousel({
    items: 1,
    nav:false,
    dots:false,
});





  
  $('.owl-carousel3').owlCarousel({
    responsiveClass: true,
    margin: 10,
    items: 3,
    // autoplay: true,
    // autoplayTimeout: 4000,
    // autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      768: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      },
    }
  })



  document.addEventListener("DOMContentLoaded", function() {
    const caseSlides = document.querySelectorAll(".caseSlide");
  
    caseSlides.forEach((caseSlide) => {
      const video = caseSlide.querySelector(".vid");
  
      caseSlide.addEventListener("mouseenter", () => {
        if (typeof video.play === 'function') {
          video.muted = false;
          video.play();
          video.currentTime = 0;
          video.style.opacity = 1;
        }
      });
  
      caseSlide.addEventListener("mouseleave", () => {
        if (typeof video.pause === 'function') {
          video.muted = true;
          video.pause();
          video.style.opacity = 0;
        }
      });
    });
  });
  






// Document.addEventListener("DOMContentLoaded", () => {
    const modes = document.querySelector("#modes");
    let isDarkmod = false;
  
    if (modes) {
      modes.addEventListener("click", () => {
        isDarkmod = !isDarkmod;
        if (isDarkmod) {
          document.body.classList.add("dark-theme");
        } else {
          document.body.classList.remove("dark-theme");
        }
      });
    }
//   });
  
  document.addEventListener("DOMContentLoaded", () => {
    const modes2 = document.querySelector("#modes2");
    let isDarkmod = false;
  
    if (modes2) {
      modes2.addEventListener("click", () => {
        isDarkmod = !isDarkmod;
        if (isDarkmod) {
          document.body.classList.add("dark-theme");
        } else {
          document.body.classList.remove("dark-theme")
        }
      });
    }
  });
  
 
  
  document.addEventListener('DOMContentLoaded', () => {
    const dayNightToggle = document.querySelector('.daynight');
    const dayImage = document.querySelector('#day');
    const nightImage = document.querySelector('#night');
    let isDay = true;
  
    dayNightToggle.addEventListener('click', () => {
      if (isDay) {
        dayImage.style.transform = 'translateY(-100%)';
        nightImage.style.transform = 'translateY(-50%)';
      } else {
        dayImage.style.transform = 'translateY(50%)';
        nightImage.style.transform = 'translateY(100%)';
      }
  
      isDay = !isDay;
    });
  
    dayNightToggle.addEventListener('mouseenter', () => {
      if (isDay) {
        dayImage.style.transform = 'translateY(-100%)';
        nightImage.style.transform = 'translateY(-50%)';
      } else {
        dayImage.style.transform = 'translateY(50%)';
        nightImage.style.transform = 'translateY(100%)';
      }
    });
  
    dayNightToggle.addEventListener('mouseleave', () => {
      if (isDay) {
        dayImage.style.transform = 'translateY(50%)';
        nightImage.style.transform = 'translateY(100%)';
      } else {
        dayImage.style.transform = 'translateY(-100%)';
        nightImage.style.transform = 'translateY(-50%)';
      }
    });
  });