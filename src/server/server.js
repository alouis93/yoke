Meteor.publish('yokes', function() {
  return Yokes.find({});
}, {
  is_auto: true
});
Meteor.publish('graph', function() {
  return Graph.find({});
}, {
  is_auto: true
});

Meteor.methods({
  /**
   * Server method to remove a relationship from the Graph collection
   * @param {String} userId - Unique string userId of user in current context
   * @param {String} followsId - Unique string userId of follower
   */
  'removeBranch': function(userId, followsId) {
    Graph.remove({
      'user': userId,
      'follows': followsId
    });
  }
});