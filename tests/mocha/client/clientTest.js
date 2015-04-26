if (!(typeof MochaWeb === 'undefined')) {
  MochaWeb.testOnly(function() {

    // Invoke from root url
    function createAcct(namePass) {
      $(".auth-modal-trig[data-modal-template=signupForm]").trigger('click');
      $("#signup-username").val(namePass);
      $("#signup-password").val(namePass);
      $("#signup-name").val(namePass)
      $("#signup-form").submit();
    }

    function badSignup(namePass) {
      $(".auth-modal-trig[data-modal-template=signupForm]").trigger('click');
      $("#signup-username").val(namePass);
      $("#signup-password").val(namePass);
      $("#signup-form button").trigger('click');
    }

    describe("sample test", function() {
      it("should respect equality", function() {
        chai.assert.equal(5, 5);
      });
    });

    describe("inSearch initialization check", function() {
      it("should be false on initialization", function() {
        chai.assert.equal(Session.get("inSearch"), false);
      });
    });

    describe("Sign up test - field check", function() {
      Meteor.flush();
      var userPass = 'signup-test-i';
      before(function() {
        badSignup(userPass);
      });
      it("shouldn't have an account with that name", function() {
        chai.assert.equal(Meteor.users.findOne({
          username: userPass
        }), undefined);
      });
    });

    describe("Duplicate users records", function() {
      Meteor.flush();
      var userPass = 'signup-test-ii';
      before(function() {
        createAcct(userPass);
        createAcct(userPass);
      });
      it("shouldn't have an multiple accounts with that name", function() {
        chai.assert.equal(Meteor.users.find({
          username: userPass
        }).count(), 1);
      });
    });


  });
}