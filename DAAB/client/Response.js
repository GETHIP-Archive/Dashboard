import { Template } from 'meteor/templating';
import { survey } from "/lib/collections.js";
import { response } from "/lib/response.js";
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
				list.push(value)
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
				list.push(value);
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
				list.push(value);
			}
		});
		return list
	}
});

Template.surveys.events({
	'click #submit'(event){
			var currentSurvey = survey.findOne({surveyId: FlowRouter.getParam("surveyId")});
			var freeResponse = [];
			var yesNo = [];
			var multipleChoice = [];
			var finalResponse = {};
			finalResponse.answer = {}
			currentSurvey.question.forEach(function(value, index){
				if(value.type == "freeResponse"){
					freeResponse.push(value);
				}
				if(value.type == "yesNo"){
					yesNo.push(value)
				}
				if(value.type == "multipleChoice"){
					multipleChoice.push(value)
				}
			});

			freeResponse.forEach(function(value, index){
				finalResponse["answer"][value.id] = document.getElementById(value.id).value;
			});

			yesNo.forEach(function(value, index){
				if(document.getElementById(value.id+"_y").checked == true){
					finalResponse["answer"][value.id] = "yes"
				}
				if(document.getElementById(value.id+"_n").checked == true){
					finalResponse["answer"][value.id] = "no"
				}
			});
			multipleChoice.forEach(function(value, index){
				for(i=0;i<value.answers.length;i++){
					if(document.getElementById(value.id+"_"+i).checked == true){
						finalResponse["answer"][value.id] = document.getElementById(value.id+"_"+i).value;
					}
				}
			});
			finalResponse.surveyId = FlowRouter.getParam("surveyId");
			finalResponse.studentId = Meteor.userId();
			finalResponse.date = new Date().toString();
			console.log(finalResponse)
	}
})
