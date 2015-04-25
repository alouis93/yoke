  Template.base.events({
    'click .auth-modal-trig': function(event, template) {
      var name = template.$(event.target).data('modal-template');
      Session.set('activeModal', name);
      $('#authModal').openModal();
    },
    'click .sign-out': function(event, template) {
      Meteor.logout(function(error) {
        if (error) {
          toastr.error(error.reason);
        }
      });
    }
  });

  Template.home.events({
    // truncate to 19 characters.
    'click .follow': function(event, template) {
      var username = $(event.target).parent().data('username');
      var userId = $(event.target).parent().data('user-id');
      toastr.clear();
      Graph.insert({
        user: Meteor.userId(),
        follows: userId
      })
      toastr["success"]("Following " + username);
      $(".follow-state")
        .removeClass("follow")
        .addClass("unfollow");
      return false;
    },
    'click .unfollow': function(event, template) {
      var username = $(event.target).parent().data('username');
      var userId = $(event.target).parent().data('user-id');
      toastr.clear();
      Meteor.call("removeBranch", Meteor.userId(), userId, function(error) {
        if (error) {
          toastr.error(error.reason);
        }
      });
      toastr["success"]("Unfollowed " + username);
      $(".follow-state")
        .removeClass("unfollow")
        .addClass("follow");
      return false;
    }
  })

  Template.modal.helpers({
    activeModal: function() {
      return Session.get('activeModal');
    }
  });