$(function() {

  $('a.page-scroll').bind('click', function(event) {
      event.preventDefault();

      var sectionCible = $(this).attr('href');
      scrollerVers(sectionCible);
    });

  function scrollerVers(sectionCible) {
    $('html, body').stop().animate({
      scrollTop: $(sectionCible).offset().top
    }, 1500, 'easeInOutExpo');
  }
});
