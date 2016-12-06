import { Meteor } from 'meteor/meteor';
import { student, survey, response, administrator } from '/lib/collections.js';

Meteor.startup(() => {
  // code to run on server at startup

});

//TODO: Authentication
Meteor.methods({
  'survey.create' (survey) {
	survey.insert({
		surveyId: Random.id(),
		administratorId: survey.administratorId,
		assigned: survey.students,
		length: survey.length,
		question: survey.question
	});
  },
  'student.create' (student) {
  	student.insert({
  		grade: student.grade,
  		name: student.name
  		accountId: Meteor.user()
  	});
  },
  'student.update' (student) {
  	student.update({accountId: Meteor.user()}, {$set: {
  		
  	}})
  },
  'response.create' (response) {
  	response.insert({
  		studentId: response.studentId,
  		surveyId: response.surveyId,
  		date: new Date().toString(),
  		answer: response.answer
  	})
  },
  'administrator.create' (administrator) {
  	administrator.insert({
  		administratorId: administrator.administratorId,
  		name: administrator.name,
  		surveys: administrator.surveys
  	});
  },
  'administrator.update' (administrator) {

  }
})
