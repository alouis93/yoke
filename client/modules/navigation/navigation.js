Template.navigation.events({
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

// Returns the number of people you follow.
Template.navigation.helpers({
  'followingCount': function() {
    return Graph.find({
      user: Meteor.userId()
    }).count();
  },
  // Returns the # of people following you.
  'followersCount': function() {
    return Graph.find({
      follows: Meteor.userId()
    }).count();
  }
});