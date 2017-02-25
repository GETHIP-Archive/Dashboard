import { Meteor } from 'meteor/meteor';
import { student, survey, response, administrator } from '/lib/collections.js';

Meteor.startup(() => {
  // code to run on server at startup
  student.remove({});
  survey.remove({});
  student.insert({"grade": 2, "name": "Timmy", "studentId": "oYxje296j82vuHLAp", "assignedSurveys": ["oihnawe","aoidsh"], "completedSurveys": ["2i2n33j","oihadsbn","n23n2oedi"]});
  var mentalHealth = [{
    type: "yesNo",
    prompt: "Do you suffer from Depression?",
    id: "r2EbAg3REfivCZgtM"
  },
  {
    type: "multipleChoice",
    prompt: "How have you felt this past week?",
    answers: ["Tired", "Entergitc", "Calm", "Angry", "Aggressive"],
    id: "pTDymBukr5dzFmJ8m"
  },
  {
    type: "freeResponse",
    prompt: "Tell us about the time you were last sad",
    id: "pw2J2eeZ7Xg2rNk2F"
  }]
  survey.insert({"title": "Safety Questions", "surveyId": "2i2n33j", "surveyLength": 5});
  survey.insert({"title": "Food Questions", "surveyId": "n23n2oedi", "surveyLength": 2});
  survey.insert({"title": "College Readiness Questions", "surveyId": "oihadsbn", "surveyLength": 3});
  survey.insert({"title": "Time Management", "surveyId": "oihnawe", "surveyLength": 9});
  survey.insert({"title": "Mental Health", "surveyId": "aoidsh", "surveyLength": 8, "question": mentalHealth});

});

//TODO: Authentication
Meteor.methods({

})
