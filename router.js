/**
 * @file
 * Contains client side template+view config.
 */
/* globals Router */

//Route config below
Router.configure({
  layoutTemplate: 'base'
});

var requireLogin = function() {
  if (!Meteor.user()) {
    this.render('hello');
  } else {
    this.next();
  }
}
Router.onBeforeAction(requireLogin, {
  except: ['hello']
});
Router.route('/', function() {
  Router.go('/users/' + Meteor.userId());
});
// Routes below
Router.route('/users/:user_id', function() {
  // console.log(this.params.user_id);
  this.render('home', {
    data: {
      userContext: this.params.user_id,
      username: Meteor.users.findOne({
        _id: this.params.user_id
      }).username,
      yokes: Yokes.find({
        user: this.params.user_id
      }, {
        sort: {
          createdAt: -1
        }
      }),
      pageOwner: (Meteor.userId() == this.params.user_id) ? true : false
    }
  });
});