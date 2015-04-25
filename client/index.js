Meteor.subscribe('yokes');
Meteor.subscribe('graph');
Meteor.subscribe('users');

Session.setDefault("inSearch", false);


Template.home.rendered = function() {
  Session.set("inSearch", false);
}
Template.navigation.rendered = function() {
  $(".button-collapse").sideNav();
};

Template.search.events({
  'click .collection-item': function(event) {
    Session.set("inSearch", false);
  }
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
});

Template.registerHelper('loggedIn', function() {
  return (Meteor.user()) ? true : false;
});

// Returns the number of people you follow.
Template.registerHelper('followingCount', function() {
  return Graph.find({
    user: Meteor.userId()
  }).count();
});

Template.registerHelper('inSearch', function() {
  return Session.get("inSearch")
});

Template.registerHelper('isFollowing', function(followingId) {
  return (Graph.find({
    user: Meteor.userId(),
    follows: followingId
  }).count()) ? true : false;
});

// Returns the # of people following you.
Template.registerHelper('followersCount', function() {
  return Graph.find({
    follows: Meteor.userId()
  }).count();
});

Handlebars.registerHelper('validCollection', function(c) {
  return (c.length > 0) ? true : false;
});