$(document).ready(function() {
  
  // Category Nav
  $('.js-category-link').on('click', function(e) {
    e.preventDefault(e);
    $(this).toggleClass('active');
    $('.js-category').toggleClass('active');
    $('.js-overlay').toggleClass('active');
    $('.subcategory').removeClass('active');
  })
  $('.js-close-subcategory').on('click', function(e) {
    $('.subcategory').removeClass('active');
  })

  $('.category__link').on('click', function(e) {
    $(this).siblings('.subcategory').addClass('active');
  })
  
  // Sidepanel
  $('.js-open-sidepanel').on('click', function(e) {
    e.preventDefault(e);
    $('.js-sidepanel').addClass('active');
    $('.js-overlay').addClass('active');
  })
  $('.js-close-sidepanel').on('click', function(e) {
    e.preventDefault(e);
    $('.js-sidepanel').removeClass('active');
    $('.js-overlay').removeClass('active');
  })


})