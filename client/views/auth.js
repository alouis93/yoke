// client/client.js

//Sign up shit
Template.signupForm.events({
  "submit #signup-form": function(event, template) {
    event.preventDefault();
    Accounts.createUser({
      username: $("#signup-username").val(),
      password: $("#signup-password").val(),
      profile: {
        name: $("#signup-name").val()
          // Other required field values can go here
      }
    }, function(error) {
      if (error) {
        // Display the user creation error to the user however you want
      } else {
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
      template.find("#login-username").value,
      template.find("#login-password").value,
      function(error) {
        if (error) {
          // Display the login error to the user however you want
        } else {
          $('#authModal').closeModal();
        }
      }
    );
    return false;
  }
});

Template.logoutForm.events({
  "submit #logout-form": function(event, template) {
    event.preventDefault();
    Meteor.logout(function(error) {
      if (error) {
        // Display the logout error to the user however you want
      } else {
        $('#authModal').closeModal();
        // return Router.go('/index');
      }
    });
  }
});