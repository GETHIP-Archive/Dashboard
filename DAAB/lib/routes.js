import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: "About",
  action: function() {
    BlazeLayout.render("content", {content: "about"});
  }
});

FlowRouter.route('/response/:surveyId', {
  name: "Response",
  action: function() {
      BlazeLayout.render("content", {content: "surveys"});
  }
});

/*
if(admin.includes(Meteor.userId())){
  BlazeLayout.render("content", {content: "freeResponse"});
}else{
   BlazeLayout.render("content", {content: "denied"})
}
*/

FlowRouter.route('/login', {
  name: "login",
  action: function() {
    BlazeLayout.render("content", {content: "login"});
  }
});

FlowRouter.route('/home', {
  name: "homepage",
  action: function() {
    BlazeLayout.render("content", {content: "homepage"});
  }
});

FlowRouter.route('/createSurvey', {
  name: "homepage",
  action: function() {
    BlazeLayout.render("content", {content: "createSurvey"});
  }
});

FlowRouter.route('/comments', {
  name: "General Comments",
  action: function(){
    BlazeLayout.render("content", {content: "comments"})
  }
});

FlowRouter.route('/dashboard', {
  name: "Administrative Dashboard",
  action: function(){
    BlazeLayout.render("content", {content: "dashboard"})
  }
});
