(function scrollReveal() {
  window.sr = ScrollReveal();
  sr.reveal("header", {
    duration: 2000,
    reset: true
  });
  sr.reveal("img", {
    duration: 800,
    reset: true
  });
  sr.reveal("p", {
    duration: 1500,
    reset: true
  });
  sr.reveal("h2", {
    duration: 1500,
    origin: "bottom",
    distance: "30px",
    reset: true
  });
  // sr.reveal("a", {
  //   duration: 1500,
  //   origin: "left",
  //   distance: "30px"
  //   // reset: true
  // });
})();

$(document).ready(function() {
  //button Search animation
  const input = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");
  const expand = () => {
    searchBtn.classList.toggle("close");
    input.classList.toggle("square");
  };
  searchBtn.addEventListener("click", expand);

  //menu hamburguer
  $(".navi").click(function() {
    $(".menu, .navi").toggleClass("active");
  });

  $(".slicksliders").slick({
    // prevArrow: false,
    // nextArrow: false,
    // dots: true,
    // infinite: true,
    // speed: 1000,
    // fade: true,
    // infinite: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000
  });
  $(".fads-slider").slick({
    prevArrow: false,
    nextArrow: false,
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  });
  $(".fads-play-slider").slick({
    prevArrow: false,
    nextArrow: false,
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  });
});
