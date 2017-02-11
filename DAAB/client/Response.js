import { Template } from 'meteor/templating';
import { survey } from "/lib/collections.js";
import { student } from "/lib/collections.js";

import "./Response.html"

Template.surveys.helpers({
	freeR: function(){
		return [1]
	},
	yesN: function(){
		return [1]
	},
	multipleC: function(){
		return [1]
	}
});
