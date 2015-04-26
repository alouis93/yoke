/**
 * @file
 * Event handlers controlling inSearch flag and navigation panel template helpers.
 */


Template.navigation.events({
  // Setting the inSearch flag to false when the search view is inactive
  'input #search, focus #search, click #search-form .input-field': function(event, template) {
    var inSearchBool = (template.find("#search").value.length) ? true : false;
    Session.set("inSearch", inSearchBool);
  },
  'submit #search-form': function(event) {
    return false;
  },
  'click .mdi-navigation-close': function() {
    Session.set("inSearch", false);
  }
});

Template.navigation.helpers({
  /**
   * Returns the number of users current user follow's
   * @locus Client
   * @method Template.navigation.__helpers[' followingCount']
   */
  'followingCount': function() {
    return Graph.find({
      user: Meteor.userId()
    }).count();
  },
  /**
   * Returns the number of users following current user
   * @locus Client
   * @method Template.navigation.__helpers[' followersCount']
   */
  'followersCount': function() {
    return Graph.find({
      follows: Meteor.userId()
    }).count();
  }
});