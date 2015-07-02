

$(document).ready(function() {

  initLiving();
  initApp();
  livingResize();
  //iPadFIx();

  $('img').dense();

  $('html').removeClass('jPanelMenu')


  $('#sticky').stickyNavbar({
    activeClass: "active",          // Class to be added to highlight nav elements
    sectionSelector: "scrollto",    // Class of the section that is interconnected with nav links
    animDuration: 250,              // Duration of jQuery animation

    animateCSS: true,               // AnimateCSS effect on/off
    animateCSSRepeat: false,        // Repeat animation everytime user scrolls
    cssAnimation: "fadeInDown",     // AnimateCSS class that will be added to selector

    jqueryAnim: "show",        // jQuery animation type: fadeIn, show or slideDown

    mobile: true,                  // If false nav will not stick under 480px width of window

    stickyModeClass: "sticky",      // Class that will be applied to 'this' in sticky mode
    unstickyModeClass: "unsticky"   // Class that will be applied to 'this' in non-sticky mode
  });







});



$(window).resize(function() {

  livingResize();
    $('html').removeClass('jPanelMenu')
//  document.location.reload(true);


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

    if($('.gallery-hero').data('owlCarousel')){

      $('.gallery-hero').data('owlCarousel').destroy()
    }
  //  $('.gallery-hero').data('owlCarousel').destroy();


  // var isiPad = navigator.userAgent.match(/iPad/i) != null;
  //
  //   if(isiPad){
  //   jPM.off();
  // }
  }


});

enquire.register("screen and (min-width: 900px)", {

  match: function(){
    jPM.off();





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
  setTimeout(function() {



    var altezzaLiving = $('.living-lab-carousel').height();

    $('.living-lab-image').height(altezzaLiving-1);
    console.log(altezzaLiving);

  }, 1000);
}
