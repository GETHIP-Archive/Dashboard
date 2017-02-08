import { Meteor } from 'meteor/meteor';
import { student, survey, response, administrator } from '/lib/collections.js';

Meteor.startup(() => {
  // code to run on server at startup
  student.remove({});
  survey.remove({});
  student.insert({"grade": 2, "name": "Timmy", "studentId": "oYxje296j82vuHLAp", "assignedSurveys": ["oihnawe","aoidsh"], "completedSurveys": ["2i2n33j","oihadsbn","n23n2oedi"]});
  survey.insert({"title": "Safety Questions", "surveyId": "2i2n33j", "surveyLength": 5});
  survey.insert({"title": "Food Questions", "surveyId": "n23n2oedi", "surveyLength": 2});
  survey.insert({"title": "College Readiness Questions", "surveyId": "oihadsbn", "surveyLength": 3});
  survey.insert({"title": "Time Management", "surveyId": "oihnawe", "surveyLength": 9});
  survey.insert({"title": "Mental Health", "surveyId": "aoidsh", "surveyLength": 8});
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
  		name: student.name,
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
