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
    var logoClair = $('.navbar .navbar-brand .logo_clair');
    var logoFonce = $('.navbar .navbar-brand .logo_fonce');

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
      logoClair.removeClass('masque');
      logoFonce.addClass('masque');
    }

    function passerNavbarEnAutre() {
      navbar.removeClass('navbar-intro');
      navbar.addClass('navbar-autre');
      logoClair.addClass('masque');
      logoFonce.removeClass('masque');
    }
  }
});
