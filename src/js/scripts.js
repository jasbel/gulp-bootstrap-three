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
  sr.reveal("a", {
    duration: 1500,
    origin: "top",
    distance: "30px",
    reset: true
  });
})();

$(document).ready(function() {
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
    autoplaySpeed: 3000
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
    autoplaySpeed: 3000
  });
});
