import { Template } from 'meteor/templating';
import { survey } from "/lib/collections.js";
import { student } from "/lib/collections.js";

import "./comments.html"

Template.comments.events({
  'click #submit'(event){
    alert('submit')
  }
});
