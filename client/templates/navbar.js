import './navbar.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';

Template.navbar.onCreated(() => {
});

Template.navbar.onRendered(() => {
  $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      $("#nav-ul").children().each((index, item) => {
        $(item).removeClass("active")
      })

      $("#nav-ul").children().last().addClass("active");
    }
    else if ($(window).scrollTop() + $(window).height() >= $(document).height() - 30 && $(window).scrollTop() + $(window).height() <= $(document).height() - 10) {
      $("#nav-ul").children().last().removeClass("active");
      $("#nav-ul").children().each((index, item) => {
        if (index == 2) {
          $(item).addClass("active")
        }
      })
    }
  });

  $('.js-produccion').magnificPopup({
    type: 'iframe'
  });
});

Template.navbar.events({
  'click .js-contact'(e) {
    e.preventDefault();

    $("html, body").animate({ scrollTop: $(document).height() }, 0);
  }
});
