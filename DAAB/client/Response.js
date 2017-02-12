import { Template } from 'meteor/templating';
import { survey } from "/lib/collections.js";
import { student } from "/lib/collections.js";
import { FlowRouter } from 'meteor/kadira:flow-router';

import "./Response.html"

Template.surveys.helpers({
	freeR: function(){
		var currentSurvey = survey.findOne({surveyId: FlowRouter.getParam("surveyId")});
		console.log(currentSurvey)
		var list = []
		var i = 0;
		currentSurvey.question.forEach(function(value, index){
			if(value.type == "freeResponse"){
				value.id = i;
				list.push(value)
				i++;
			}
		});
		return list
	},
	yesN: function(){
		var currentSurvey = survey.findOne({surveyId: FlowRouter.getParam("surveyId")});
		var list = [];
		var i = 0;
		currentSurvey.question.forEach(function(value, index){
			if(value.type == "yesNo"){
				value.id = i;
				list.push(value);
				i++;
			}
		});
		return list
	},
	multipleC: function(){
		var currentSurvey = survey.findOne({surveyId: FlowRouter.getParam("surveyId")});
		var list = [];
		var i = 0;
		currentSurvey.question.forEach(function(value, index){
			if(value.type == "multipleChoice"){
				value.id = i;
				list.push(value);
				i++;
			}
		});
		console.log(list)
		return list
	}
});

Template.surveys.events({
	'click #submit'(event){

	}
})
