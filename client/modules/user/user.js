    Template.omnibar.events({
      'submit .omnibar-form': function(event) {
        var yokeMsg = $("#yoke-text").val();
        $("#yoke-text").val('');
        Yokes.insert({
          'user': Meteor.userId(),
          'msg': yokeMsg,
          'createdAt': new Date()
        });
        return false;
      }
    });

    Template.home.helpers({
      followsUser: function(event) {
        return Graph.find({
          user: Meteor.userId(),
          follows: this.userContext
        }).count() ? true : false;
      }
    });