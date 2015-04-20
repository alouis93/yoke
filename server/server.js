// server/server.js
Meteor.publish('yokes', function() {
  return Yokes.find({});
});
Meteor.publish('graph', function() {
  return Graph.find({});
});



// });.publish('graph', function() {
//   return Graph.find({});
// }).publish('users', function() {
//   return Meteor.users.find({});
// })


Meteor.startup(function() {
  // code to run on server at startup

});


Meteor.methods({
  'getYokes': function(userId) {
    // Grab from Yokes
    Yokes.find({
      'user': userId
    }).fetch();
  },
  'removeBranch': function(userId, followsId) {
    Yokes.remove({
      'user': userId,
      'follows': followsId
    });
  }
});