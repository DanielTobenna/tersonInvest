
jQuery(document).ready(function ($) {

  /**
   * Burger Menu Toggle
   */
  $('.cakelements-burger-menu-toggle-container > .toggle-button').click(function (e) {
    e.preventDefault()
    $(this).children('i').toggleClass('eicon-close')
    $(this).children('i').toggleClass('eicon-menu-bar')
    $(this).parent().siblings('.cakelements-burger-menu__container').toggle();
    // Take menu toogle left offset
    var left = $('.cakelements-burger-menu-toggle-container').offset().left;
    // Place left as minus to make container place at start
    $('.cakelements-burger-menu__container').css('left', '-' + left + 'px');
  })

  // Burger Submenu
  $('.cakelements-burger-menu > .menu-item-has-children').click(function (e) {
    $(this).toggleClass("menu-opened");
    $(this).find('> .sub-menu').toggle();
  })

  // Burger Submenu inside Submenu
  $('.cakelements-burger-menu > .menu-item-has-children > .sub-menu > .menu-item-has-children').click(function (e) {
    $(this).toggleClass("menu-opened");
    $(this).find('> .sub-menu').toggle();
  })

  /**
   * Product Feature
   */

  var currentProductNo = 1;

  $('.products .product').hover(function () {
    var itemNo = $(this).attr('data-product');

    if (currentProductNo != itemNo) {
      $(this).parents('.cakelements-product-feature').find('.product-image-container .product-image').hide();
      $(this).parents('.cakelements-product-feature').find('.product-image-container .product-image.product-image-' + itemNo).show();
      currentProductNo = itemNo
    }

  })

  /**
   * Preloader
   */

  setTimeout(function () {
    $('#preloader').fadeOut(500, function () { $(this).remove(); $(this).parents(".elementor-column-wrap").hide() });
  }, 500)

  $(".elementor-element[data-column-link-to]").each(function(){var e=$(this).data("column-link-to");if("undefined"!==e.url){var t=$('<a class="column-link-to"></a>');t.attr("href",e.url),e.is_external&&t.attr("target","_blank"),e.nofollow&&t.attr("rel","nofollow"),$(this).find(".elementor-column-wrap").append(t)}})

  $(".elementor-widget-bdt-member[data-member-link-to]").each(function(){var e=$(this).data("member-link-to");if("undefined"!==e.url){var t=$('<a class="member-link-to"></a>');t.attr("href",e.url),e.is_external&&t.attr("target","_blank"),e.nofollow&&t.attr("rel","nofollow"),$(this).find(".bdt-member-name").wrapAll(t)}})

});


