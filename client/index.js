/**
 * @file
 * Contains top level client JS and global template
 * helpers
 */

Meteor.subscribe('yokes');
Meteor.subscribe('graph');

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
/**
 * Formats Date object into a readable format.
 * @param {Date} date - Date object to be trans.
 */
Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
});
/** Returns true if current user is logged in*/
Template.registerHelper('loggedIn', function() {
  return (Meteor.user()) ? true : false;
});

/* Reactive state variable tied to page events
 * to toggle the search module
 */
Template.registerHelper('inSearch', function() {
  return Session.get("inSearch")
});
/**
 * Formats Date object into a readable format
 * @param {String} followingId - Unique string id
 */
Template.registerHelper('isFollowing', function(followingId) {
  return (Graph.find({
    user: Meteor.userId(),
    follows: followingId
  }).count()) ? true : false;
});
/**
 * Ensures you have a valid collection returned
 * @param {Array} c - Collection query result
 */
Template.registerHelper('validCollection', function(c) {
  return (c.length > 0) ? true : false;
});