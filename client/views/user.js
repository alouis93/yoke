    Template.omnibar.events({
      'submit .omnibar-form': function(event) {
        event.preventDefault();
        var yokeMsg = $("#yoke-text").val();
        $("#yoke-text").val('');
        Yokes.insert({
          'user': Meteor.userId(),
          'msg': yokeMsg,
          'createdAt': new Date()
        });
        // alert("hang");
        return false;
      }
    });