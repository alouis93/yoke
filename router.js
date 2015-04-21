/**
 * @file
 * Contains client side template+view config.
 */
/* globals Router */

//Route config below
Router.configure({
  layoutTemplate: 'base'
});
var OnBeforeActions = {
  loginRequired: function() {
    if (!Meteor.userId()) {
      this.render('hello');
    } else {
      this.next();
    }
  }
};
Router.onBeforeAction(OnBeforeActions.loginRequired, {
  except: ['index']
});

Router.route('/', function() {
  var user = Meteor.user();
  var yokes = Yokes.find({
    user: Meteor.userId()
  }, {
    sort: {
      createdAt: -1
    }
  });
  this.render('home', {
    data: {
      userContext: user && user._id,
      username: user && user.profile.name,
      yokes: yokes,
    }
  });
}, {
  name: 'home'
});


// Routes below
Router.route('/index', function() {
  this.render('hello');
}, {
  name: 'index'
});