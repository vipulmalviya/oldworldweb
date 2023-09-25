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
  items: 4,
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
  const night = document.querySelector(".u");

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
        var newImageSrc5 = "assets/Frame 24.svg";
        img1.src = newImageSrc;
        img2.src = newImageSrc2;
        img3.src = newImageSrc3;
        img4.src = newImageSrc4;
        night.src = newImageSrc5
      } else {
        document.body.classList.remove("dark-theme");
        var newImageSrc = "assets/Group 2.svg";
        var newImageSrc2 = "assets/Group 3.svg";
        var newImageSrc3 = "assets/Application programming interface-pana.png";
        var newImageSrc4 = "assets/sentm.svg";
        var newImageSrc5 = "assets/Frame 23.svg";
        img1.src = newImageSrc;
        img2.src = newImageSrc2;
        img3.src = newImageSrc3;
        img4.src = newImageSrc4;
        night.src = newImageSrc5
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
  const night = document.querySelector(".u");
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
        var newImageSrc5 = "assets/Frame 24.svg";
        img1.src = newImageSrc;
        img2.src = newImageSrc2;
        img3.src = newImageSrc3;
        img4.src = newImageSrc4;
        night.src = newImageSrc5

      } else {
        document.body.classList.remove("dark-theme");
        var newImageSrc = "assets/Group 2.svg";
        var newImageSrc2 = "assets/Group 3.svg";
        var newImageSrc3 = "assets/Application programming interface-pana.png";
        var newImageSrc4 = "assets/sentm.svg";
        var newImageSrc5 = "assets/Frame 23.svg";
        img1.src = newImageSrc;
        img2.src = newImageSrc2;
        img3.src = newImageSrc3;
        img4.src = newImageSrc4;
        night.src = newImageSrc5
      }
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const modes3 = document.querySelector("#modes3");
  const night = document.querySelector(".u");
  let isDarkmod = false;

  if (modes3) {
    modes3.addEventListener("click", () => {
      isDarkmod = !isDarkmod;
      if (isDarkmod) {
        document.body.classList.add("dark-theme");
        var newImageSrc5 = "assets/Frame 24.svg";
        night.src = newImageSrc5
      } else {
        document.body.classList.remove("dark-theme");
        var newImageSrc5 = "assets/Frame 23.svg";
        night.src = newImageSrc5
      }
    });
  }
});



// popup windown 


const demo = document.querySelector(".demo");
const playb = document.querySelector(".playb");
const video = document.querySelector(".vids");

playb.addEventListener("click", (event) => {
  event.preventDefault();
  demo.classList.toggle("on")
  video.muted = false;
  video.autoplay= true;
  video.currentTime = 0;
});

demo.addEventListener("click", (event) => {
  event.preventDefault();
  demo.classList.toggle("on")
  video.muted = true;
  video.autoplay = false;
});


