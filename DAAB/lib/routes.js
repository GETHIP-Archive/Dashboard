import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: "sHome",
  action: function() {
    BlazeLayout.render("content", {content: "studentView"});
  }
});

FlowRouter.route('/students/:accountId', {
  name: "Students",
  action: function() {
    if(admin.includes(Meteor.userId())){
      BlazeLayout.render("content", {content: "iVotes"});
    }else{
       BlazeLayout.render("content", {content: "denied"})
    }
  }
});

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

FlowRouter.route("/response", {
  name: "response",
  action: function() {
    BlazeLayout.render("content", {content: "freeResponse"})
  }
})
