Template.yoke.helpers({
  'ownYoke': function(e) {
    return (e == Meteor.userId()) ? true : false;
  },
  'grabUsername': function(e) {
    return Meteor.users.findOne({
      _id: e
    }).username;
  }
});