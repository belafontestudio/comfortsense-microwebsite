

$(document).ready(function() {

  initLiving();
  initApp();
  livingResize();


  $('#sticky').stickyNavbar();






});



$(window).resize(function() {

  livingResize();
  document.location.reload(true);


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


  var isiPad = navigator.userAgent.match(/iPad/i) != null;

    if(isiPad){
    jPM.off();
  }
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
  var altezzaLiving = $('.living-lab-carousel').height();

  $('.living-lab-image').height(altezzaLiving);
  console.log(altezzaLiving)
}
