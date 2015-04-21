// A Yoke has user, message
// A Graph has user, follows
Yokes = new Mongo.Collection('yokes');
Graph = new Meteor.Collection('graph');

EasySearch.createSearchIndex('users', {
  'field': ['username'],
  'collection': Meteor.users,
  'use': 'mongo-db'
});