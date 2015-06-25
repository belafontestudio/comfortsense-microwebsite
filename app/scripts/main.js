

$(document).ready(function() {

  initLiving();
  initApp();







});

// Set options
var options = {
    offset: 700,
    classes: {
        clone:   'banner--clone',
        stick:   'banner--stick',
        unstick: 'banner--unstick'
    }
};

// Initialise with options
//var banner = new Headhesive('.ham', options);

// Headhesive destroy
// banner.destroy();




var jPM = $.jPanelMenu({
    menu: '.main-menu',
    trigger: '.ham'
});


enquire.register("screen and (min-width: 600px)", {

  match: function(){
    jPM.off();
  },
  unmatch: function(){
    jPM.on();
  }


});






function initGalleryHero(){
  $(".gallery-hero").addClass('.owl-carousel');
  $(".gallery-hero").owlCarousel({

    singleItem : true,
    itemsScaleUp : false

  });
}

function initLiving(){

  $(".living-lab-carousel").owlCarousel({

    singleItem : true,
    itemsScaleUp : false

  });
}

function initApp(){

  $(".app-carousel").owlCarousel({

    singleItem : true,
    itemsScaleUp : false

  });
}
