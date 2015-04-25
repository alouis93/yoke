Template.signupForm.events({
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
        Router.go('home');
        $('#authModal').closeModal();
      }
    });
    return false;
  }
});

Template.loginForm.events({
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