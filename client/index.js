Meteor.subscribe('yokes');
Meteor.subscribe('graph');
Meteor.subscribe('users');

Session.setDefault("inSearch", false);

Template.navigation.rendered = function() {
  $(".button-collapse").sideNav();
};
Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
});
Template.registerHelper('loggedIn', function() {
  return (Meteor.user()) ? true : false;
});



Template.hello.events({
  // 'click .follow': function(event) {
  //   //window.check = this._id;
  //   Graph.insert({
  //     'user': Meteor.userId(),
  //     'follows': this.userContext
  //   });
  // },
  // 'click. .unfollow': function(event) {
  //   Meteor.call('removeBranch', Meteor.userId, this.userContext, function(error, result) {
  //     // Error handling here!
  //   });
  // }
});