Meteor.subscribe('yokes');
Meteor.subscribe('graph');

/* Top-level JS and client init code */
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

/* Global template helpers */
Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
});

Template.registerHelper('loggedIn', function() {
  return (Meteor.user()) ? true : false;
});

/* Reactive state variable tied to page events
 * to toggle the search module
 */
Template.registerHelper('inSearch', function() {
  return Session.get("inSearch")
});

Template.registerHelper('isFollowing', function(followingId) {
  return (Graph.find({
    user: Meteor.userId(),
    follows: followingId
  }).count()) ? true : false;
});
/* Ensures you have a valid collections cursor returned
 * Used in search module
 */
Template.registerHelper('validCollection', function(c) {
  return (c.length > 0) ? true : false;
});