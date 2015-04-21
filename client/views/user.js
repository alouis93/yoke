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
        return false;
      }
    });
    Template.navigation.events({
      'input input#search': function(event, template) {
        var inSearch = (template.find("#search").value.length) ? true : false;
        Session.set("inSearch", inSearch);
      }
    });

    Template.home.helpers({
      pageOwner: function(event) {
        return (Meteor.userId() == this.userContext) ? true : false;
      },
      inSearch: function(event) {
        return Session.get("inSearch");
      }
    });

    Template.hello.helpers({
      isFollowing: function(event) {
        return (Graph.find({
          user: Meteor.userId(),
          follows: this.userContext
        }).fetch.length) ? true : false;
      }
    });