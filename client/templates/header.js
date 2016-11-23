import './header.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

Template.header.events({
  'click .js-contact'(e) {
    e.preventDefault();

    $("html, body").animate({ scrollTop: $(document).height() }, 200);
  }
})
