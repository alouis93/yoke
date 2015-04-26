// A Yoke has user, message
// A Graph has user, follows
Yokes = new Mongo.Collection('yokes');
Graph = new Meteor.Collection('graph');

EasySearch.createSearchIndex('users', {
  'field': ['username', 'profile.name'],
  'collection': Meteor.users,
  'use': 'mongo-db'
});

if (Meteor.isServer) {
  Graph._ensureIndex({
    user: 1,
    follows: 1
  }, {
    unique: 1
  });
}