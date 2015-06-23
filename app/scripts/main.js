

$(document).ready(function() {

  initLiving();
  initApp();

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
