$(function() {
  var $carrousel = carrousel($('.section-references .projets'));

  binderLesClics();
  binderLesFleches();

  function binderLesClics() {
    $('#fleche_droite').on('click', $carrousel.defilerVersLaDroite);
    $('#fleche_gauche').on('click', $carrousel.defilerVersLaGauche);
  }

  function binderLesFleches() {
    var codesDesFleches = { gauche: 37, droite: 39 };
    $(document).keydown(function(e) {
      switch (e.which) {
        case codesDesFleches.gauche:
          $carrousel.defilerVersLaGauche();
          e.preventDefault();
          break;
        case codesDesFleches.droite:
          $carrousel.defilerVersLaDroite();
          e.preventDefault();
          break;
      }
    });
  }
});

var carrousel = function($carrousel) {
  var afficher = function(p) {
    projet(projets.courant()).masquer();
    projet(p).afficher();
  };

  var animer = function() {
    $carrousel.removeClass('animation_finie');
    setTimeout(function () {
      $carrousel.addClass('animation_finie');
    }, 50);
  };

  return {
    defilerVersLaDroite: function() {
      $carrousel.removeClass('defilement_inverse');
      afficher(projets.suivant());
      animer();
    },
    defilerVersLaGauche: function() {
      $carrousel.addClass('defilement_inverse');
      afficher(projets.precedent());
      animer();
    }
  }
};

var projets =  {
    tous: function () {
      return $('.section-references .projets .projet');
    },
    courant: function() {
      return $('.section-references .projets .projet_affiche');
    },
    suivant: function() {
      return this.courant().next().length > 0 ? this.courant().next() : this.tous().first();
    },
    precedent: function() {
      return this.courant().prev().length > 0 ? this.courant().prev() : this.tous().last()
    }
  };

var projet = function($projet) {
  return {
    masquer: function() { $projet.removeClass('projet_affiche') },
    afficher: function() { $projet.addClass('projet_affiche')}
  }
};


