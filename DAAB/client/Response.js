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
		currentSurvey.question.forEach(function(value, index){
			if(value.type == "freeResponse"){
				list.push(value)
			}
		});
		return list
	},
	yesN: function(){
		var currentSurvey = survey.findOne({surveyId: FlowRouter.getParam("surveyId")});
		var list = []
		currentSurvey.question.forEach(function(value, index){
			if(value.type == "yesNo"){
				list.push(value)
			}
		});
		return list
	},
	multipleC: function(){
		var currentSurvey = survey.findOne({surveyId: FlowRouter.getParam("surveyId")});
		console.log(currentSurvey)
		var list = []
		currentSurvey.question.forEach(function(value, index){
			if(value.type == "multipleChoice"){
				list.push(value)
			}
		});
		return list
	}
});
