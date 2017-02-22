$(function() {

  binderLeScrolling();
  binderLeChangementDeNavbar();

  function binderLeScrolling() {

    $('a.page-scroll').bind('click', function (event) {
      event.preventDefault();

      var sectionCible = $(this).attr('href');
      scrollerVers(sectionCible);
    });

    function scrollerVers(sectionCible) {
      $('html, body').stop().animate({
        scrollTop: $(sectionCible).offset().top
      }, 1500, 'easeInOutExpo');
    }
  }

  function binderLeChangementDeNavbar() {
    var navbar = $('.navbar');

    $(document).scroll(function () {
      if (nomDeLaSectionActive() === '#intro')
        passerNavbarEnIntro();
      else
        passerNavbarEnAutre();
    });

    function nomDeLaSectionActive() {
      return $('ul.nav li.active a').attr('href');
    }

    function passerNavbarEnIntro() {
      navbar.removeClass('navbar-autre');
      navbar.addClass('navbar-intro');
    }

    function passerNavbarEnAutre() {
      navbar.removeClass('navbar-intro');
      navbar.addClass('navbar-autre');
    }
  }
});
