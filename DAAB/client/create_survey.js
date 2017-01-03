Template.create_survey.events({
  'submit .newP'(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.studentName.value;
  }
});
