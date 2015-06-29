

$(document).ready(function() {

  initLiving();
  initApp();
  livingResize();

  $('.header').stickyNavbar();


});


$(window).resize(function() {

  livingResize();
});



var jPM = $.jPanelMenu({
    menu: '.main-menu',
    trigger: '.ham'
});


enquire.register("screen and (min-width: 600px)", {

  match: function(){


    initGalleryHero();




  }


});

enquire.register("screen and (max-width: 599px)", {

  match: function(){


    $('.gallery-hero').data('owlCarousel').destroy();
  }


});

enquire.register("screen and (min-width: 900px)", {

  match: function(){
    jPM.off();
    $('#sticky').stickyNavbar();




  }


});

enquire.register("screen and (max-width: 899px)", {

  match: function(){
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


function livingResize(){
  var altezzaLiving = $('.living-lab-carousel').height();

  $('.living-lab-image').height(altezzaLiving);
  console.log(altezzaLiving)
}
