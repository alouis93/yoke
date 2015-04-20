Meteor.subscribe('yokes');
Meteor.subscribe('graph');
Meteor.subscribe('users');

Session.setDefault('counter', 0);

Template.base.rendered = function() {
  $('.modal-trigger').leanModal();
  $(".button-collapse").sideNav();
};
Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
});
Template.registerHelper('loggedIn', function() {
  return (Meteor.user()) ? true : false;
});

Template.hello.helpers({
  isFollowing: function(event) {
    return (Graph.find({
      user: Meteor.userId(),
      follows: this.userContext
    }).fetch.length) ? true : false;
  }
});

Template.hello.events({
  'click .follow': function(event) {
    //window.check = this._id;
    Graph.insert({
      'user': Meteor.userId(),
      'follows': this.userContext
    });
  },
  'click. .unfollow': function(event) {
    Meteor.call('removeBranch', Meteor.userId, this.userContext, function(error, result) {
      // Error handling here!
    });
  }
});