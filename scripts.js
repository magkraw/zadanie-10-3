$(function(){
  var IMAGE_WIDTH = 400;
  var INTERVAL = 3000;
  var DURATION = 500;

  var carouselList = $("#carousel ul");

  function moveFirstSlide() {
    var firstItem = carouselList.find('li:first');
    var lastItem = carouselList.find('li:last');

    lastItem.after(firstItem);
    carouselList.css({ marginLeft: 0 });
  }

  function moveLastSlide() {
    carouselList.css({ 'marginLeft': -IMAGE_WIDTH });
    var firstItem = carouselList.find('li:first');
    var lastItem = carouselList.find('li:last');

    firstItem.before(lastItem);
  }

  function changeSlide() {
    carouselList.animate({ 'marginLeft': -IMAGE_WIDTH }, DURATION, moveFirstSlide);
  }

  function changeSlideBack() {
    moveLastSlide();
    carouselList.animate({ 'marginLeft': 0 }, DURATION);
  }

  setInterval(changeSlide, INTERVAL);

  $('#left').click(changeSlideBack);
  $('#right').click(changeSlide);

  $(window).keyup(function(e) {
    if (e.keyCode === 37) changeSlideBack();
    if (e.keyCode === 39) changeSlide();
  });
});
