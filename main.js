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
    $("#prevBtn").on("click", function () {
    $(".carousel-one").trigger("prev.owl.carousel");
  });
  
  $("#nextBtn").on("click", function () {
    $(".carousel-one").trigger("next.owl.carousel");
  });
});

$('.carousel-one').owlCarousel({
  responsiveClass: true,
  margin: 10,
  items: 4,
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


$(document).ready(function () {
  $("#cprevBtn").on("click", function () {
    $(".owl-carousel").trigger("prev.owl.carousel");
  });

  $("#cnextBtn").on("click", function () {
    $(".owl-carousel").trigger("next.owl.carousel");
  });
});

$('.owl-carousel').owlCarousel({
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

// thems color image change 
document.addEventListener("DOMContentLoaded", () => {
  const modes = document.querySelector("#modes");
  const img1 = document.querySelector(".img1");
  const img2 = document.querySelector(".img2");
  const img3 = document.querySelector(".abimg");
  const img4 = document.querySelector(".sentm");

  let isDarkmod = false;

  if (modes) {
    modes.addEventListener("click", () => {
      isDarkmod = !isDarkmod;
      if (isDarkmod) {
        document.body.classList.add("dark-theme");
        var newImageSrc = "assets/Hero-img.png";
        var newImageSrc2 = "assets/Hero-img.png";
        var newImageSrc3 = "assets/aboutus=img.png";
        var newImageSrc4 = "assets/Sent Message-cuate 1.svg";
        img1.src = newImageSrc;
        img2.src = newImageSrc2;
        img3.src = newImageSrc3;
        img4.src = newImageSrc4;
      } else {
        document.body.classList.remove("dark-theme");
        var newImageSrc = "assets/Group 2.svg";
        var newImageSrc2 = "assets/Group 3.svg";
        var newImageSrc3 = "assets/Application programming interface-pana.png";
        var newImageSrc4 = "assets/sentm.svg";
        img1.src = newImageSrc;
        img2.src = newImageSrc2;
        img3.src = newImageSrc3;
        img4.src = newImageSrc4;
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const modes2 = document.querySelector("#modes2");
  const img1 = document.querySelector(".img1");
  const img2 = document.querySelector(".img2");
  const img3 = document.querySelector(".abimg");
  const img4 = document.querySelector(".sentm");
  let isDarkmod = false;

  if (modes2) {
    modes2.addEventListener("click", () => {
      isDarkmod = !isDarkmod;
      if (isDarkmod) {
        document.body.classList.add("dark-theme");
        var newImageSrc = "assets/Hero-img.png";
        var newImageSrc2 = "assets/Hero-img.png";
        var newImageSrc3 = "assets/aboutus=img.png";
        var newImageSrc4 = "assets/Sent Message-cuate 1.svg";

        img1.src = newImageSrc;
        img2.src = newImageSrc2;
        img3.src = newImageSrc3;
        img4.src = newImageSrc4;


      } else {
        document.body.classList.remove("dark-theme");
        var newImageSrc = "assets/Group 2.svg";
        var newImageSrc2 = "assets/Group 3.svg";
        var newImageSrc3 = "assets/Application programming interface-pana.png";
        var newImageSrc4 = "assets/sentm.svg";
        img1.src = newImageSrc;
        img2.src = newImageSrc2;
        img3.src = newImageSrc3;
        img4.src = newImageSrc4;

      }
    });
  }
});


// popup windown 
document.addEventListener('DOMContentLoaded', () => {
  const demo = document.querySelector(".demo");
  const playb = document.querySelector(".playb");
  const video = document.querySelector(".vids");

  playb.addEventListener("click", (event) => {
    event.preventDefault();
    demo.classList.toggle("on");
    video.muted = false;
    video.autoplay = true;
    video.currentTime = 0;
  });

  demo.addEventListener("click", (event) => {
    event.preventDefault();
    demo.classList.toggle("on");
    video.muted = true;
    video.autoplay = false;
  });
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






document.addEventListener('DOMContentLoaded', () => {
  const dayNightToggle = document.querySelector('.daynight2');
  const dayImage = document.querySelector('#day2');
  const nightImage = document.querySelector('#night2');
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



// for our cases videos
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




// caseWorks scripting

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

const centerCards = document.querySelectorAll('.center_card');

centerCards.forEach(centerCard => {
    let currentRotation = 0; 

    centerCard.addEventListener("mouseenter", () => {
        currentRotation += 180; 
        anime({
            targets: centerCard,
            rotateY: currentRotation + 'deg'
        });
    });

    centerCard.addEventListener("mouseleave", () => {
        currentRotation += 180;
        anime({
            targets: centerCard,
            rotateY: currentRotation + 'deg'
        });
    });
});




// aboutus page scripting
let all = document.querySelector(".All");
let UI_UX_Design = document.querySelector(".UI_UX_Design");
let Ecommerceall = document.querySelector(".E-commerce");
let Security = document.querySelector(".Security");

let allcards = document.querySelector(".allcards");
let ui_ux = document.querySelector(".ui_ux");
let Ecommerce = document.querySelector(".Ecommerce");
let securitycards = document.querySelector(".securitycards");

all.addEventListener('click', () => {
    // Set z-index for the clicked card container to 1
    allcards.style.zIndex = 1;

    // Reset z-index for other card containers to 0
    ui_ux.style.zIndex = 0;
    Ecommerce.style.zIndex = 0;
    securitycards.style.zIndex = 0;
});

UI_UX_Design.addEventListener('click', () => {
    // Set z-index for the clicked card container to 1
    ui_ux.style.zIndex = 1;

    // Reset z-index for other card containers to 0
    allcards.style.zIndex = 0;
    Ecommerce.style.zIndex = 0;
    securitycards.style.zIndex = 0;
});

Ecommerceall.addEventListener('click', () => {
    // Set z-index for the clicked card container to 1
    Ecommerce.style.zIndex = 1;

    // Reset z-index for other card containers to 0
    allcards.style.zIndex = 0;
    ui_ux.style.zIndex = 0;
    securitycards.style.zIndex = 0;
});

Security.addEventListener('click', () => {
    // Set z-index for the clicked card container to 1
    securitycards.style.zIndex = 1;

    // Reset z-index for other card containers to 0
    allcards.style.zIndex = 0;
    ui_ux.style.zIndex = 0;
    Ecommerce.style.zIndex = 0;
});
