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
      'input #search, focus #search, click #search-form .input-field': function(event, template) {
        var inSearch = (template.find("#search").value.length) ? true : false;
        Session.set("inSearch", inSearch);
      },
      'submit #search-form': function(event) {
        return false;
      },
      'click .mdi-navigation-close': function() {
        Session.set("inSearch", false);
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