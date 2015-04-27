/**
 * @file
 * Contains navigation panel and unfollow/follow actions
 */

Template.base.events({
  // Dynamic modal view injecting
  'click .auth-modal-trig': function(event, template) {
    var name = template.$(event.target).data('modal-template');
    Session.set('activeModal', name);
    $('#authModal').openModal();
  },
  'click .side-nav li a': function() {
    Session.set("inSearch", false);
  },
  // Side bar log out action
  'click .sign-out': function(event, template) {
    Meteor.logout(function(error) {
      if (error) {
        toastr.error(error.reason);
      }
    });
  }
});

Template.home.events({
  // Follow user action
  'click .follow': function(event, template) {
    var username = $(event.target).parent().data('username');
    var userId = $(event.target).parent().data('user-id');
    toastr.clear();
    Graph.insert({
      user: Meteor.userId(),
      follows: userId
    })
    toastr.success("Following " + username);
    $(event.target).parent()
      .removeClass("follow")
      .addClass("unfollow");
    return false;
  },
  //Unfollow user action
  'click .unfollow': function(event, template) {
    var username = $(event.target).parent().data('username');
    var userId = $(event.target).parent().data('user-id');
    toastr.clear();
    Meteor.call("removeBranch", Meteor.userId(), userId, function(error) {
      if (error) {
        toastr.error(error.reason);
      }
    });
    toastr.success("Unfollowed " + username);
    $(event.target).parent()
      .removeClass("unfollow")
      .addClass("follow");
    return false;
  }
})