window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0); 
})

/*MENU BURGER*/
function toggleMenu(){
  const menuToggle = document.querySelector('.menu-btn');
  const navigation = document.querySelector('.navigation')
  menuToggle.classList.toggle('active')
  navigation.classList.toggle('active')
}

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen){
      menuBtn.classList.add('open');
      menuOpen = true;
  } else{
      menuBtn.classList.remove('open');
      menuOpen = false;
  }
});

/* PROGRESS*/

let options = {
    startAngle: -15,
    size: 150,
    value: 0.85,
    fill: {gradient: ["#FAD126", "#FF564E"]}
}
var topOfWindow = $(window).scrollTop();
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
});
$(".html .bar").circleProgress({
    value: 0.84,
});
$(".css .bar").circleProgress({
    value: 0.78,
});
$(".bootstrap .bar").circleProgress({
    value: 0.76,
});
$(".js .bar").circleProgress({
    value: 0.43,
});

/*SLIDER*/

var swiper = new Swiper(".mySwiper", {
    speed:2000,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: -200,
      depth: 300,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: 
    {
      delay: 5000,
    },
    mousewheel: 
    {
      invert: true,
    },
    loop: true,
  });

  /* SCROLL*/

  const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});
