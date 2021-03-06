import $ from 'jquery';

import 'bootstrap/js/affix';
import 'bootstrap/js/scrollspy';
import './analytics.js';

var accordion = require('aria-accordion');

$(function() {

  // Mobile main nav toggle

  $('#js-mobile-nav-toggle').click( function () {
    $(this).find('span').toggle();
    $(this).find('img').toggleClass('display-none');
    $('header nav').toggleClass('flex');
  });

  // Language picker

  function languagePicker(trigger, dropdown) {
    trigger.on('click keypress', function (event) {
      event.preventDefault();
      var eventType = event.type;
      if (eventType == 'click' || (eventType == 'keypress' && event.which == 13)) {
        $(this).parent().toggleClass('focused');
        dropdown.toggle();

        $(this).attr('aria-expanded', function (i, attr) {
            return attr == 'true' ? 'false' : 'true'
        });
      }
    });
  }

  languagePicker($('#i18n-desktop-toggle > a'), $('#i18n-desktop-dropdown'));
  languagePicker($('#i18n-mobile-toggle > a'), $('#i18n-mobile-dropdown'));

  // Dropdown menu

  $('.dropdown').focusin(function () {
    $(this).addClass('focused');
  }).focusout(function(){
    $(this).removeClass('focused');
  });

  $(document).on('click touch', function(event) {
    var $target = $(event.target);
    var $dropdownSm = $('.dropdown-sm');
    if (!$target.hasClass('dropdown-text')
      && !$target.hasClass('dropdown-sm')) {
      $dropdownSm.removeClass('focused').blur();
    } else {
      $dropdownSm.toggleClass('focused');
    }
  });

  // Affix

  if ($('#pb-nav--side').length ) {
    $('#pb-nav--side').affix({
      offset: {
        top: $('#pb-nav--side').offset().top
      }
    });

    $(window).resize(function() {
      $('#pb-nav--side').affix('checkPosition').width($('#pb-nav--side-cntnr').width());
    });

    $('#pb-nav--side').on('affixed.bs.affix', function() {
      $('#pb-nav--side').width($('#pb-nav--side-cntnr').width());
    });

  }

  // Smooth scroll

  $('a[href^="#"]').on('click', function(event) {

    if (this.hash !== '') {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        $(hash).attr('tabindex', -1).on('blur focusout', function() {
          $(this).removeAttr('tabindex');
        }).focus();

        if (history.pushState) {
          history.pushState(null, null, hash);
        } else {
          window.location.hash = hash;
        }
      });
    }
  });


  // Required element to turn into an accordion
  var elm = document.querySelector('.js-accordion');
  if (elm) {
    new accordion.Accordion(elm, {}, { reflectStatic: true });
  }
});
