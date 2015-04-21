  Template.base.events({
    'click .auth-modal-trig': function(event, template) {
      var name = template.$(event.target).data('modal-template');
      Session.set('activeModal', name);
      $('#authModal').openModal();
    },
    'click .sign-out': function(event, template) {
      Meteor.logout(function(error) {
        if (error) {
          // Display the logout error to the user however you want
        } else {
          // Router.go('/');
        }
      });
    }
  });

  Template.modal.helpers({
    activeModal: function() {
      return Session.get('activeModal');
    }
  });