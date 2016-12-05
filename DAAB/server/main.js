import { Meteor } from 'meteor/meteor';
import { student, survey, response, administrator } from '/lib/collections.js';

Meteor.startup(() => {
  // code to run on server at startup
  student.insert({
    grade: "Tom",
    name: "Roger"
  });
});

Meteor.methods({
  'survey.create' (survey) {
      survey.insert({
        surveyId: Random.id(),
        administratorId: survey.administratorId,
        assigned: survey.students,
        length: survey.length,
        question: survey.question
      })
  }
})
