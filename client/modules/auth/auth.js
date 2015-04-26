/**
 * @file
 * Event handlers for the authentication modules
 */
Template.signupForm.events({
  // Sign up form submission, error handling
  "submit #signup-form": function(event, template) {
    event.preventDefault();
    Accounts.createUser({
      username: $("#signup-username").val(),
      password: $("#signup-password").val(),
      profile: {
        name: $("#signup-name").val()
      }
    }, function(error) {
      if (error) {
        toastr.error(error.reason);
      } else {
        $('#authModal').closeModal();
        Router.go('home');
      }
    });
    return false;
  }
});

Template.loginForm.events({
  // Log in form submission, error handling
  "submit #login-form": function(event, template) {
    event.preventDefault();
    Meteor.loginWithPassword(
      $("#login-username").val(),
      $("#login-password").val(),
      function(error) {
        if (error) {
          toastr.error(error.reason);
        } else {
          $('#authModal').closeModal();
          Router.go('home');
        }
      }
    );
    return false;
  }
});
Template.modal.helpers({
  // Active Modal getter
  activeModal: function() {
    return Session.get('activeModal');
  }
});