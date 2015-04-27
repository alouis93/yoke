/**
 * @file
 * Contains client and server Collection and search indexing
 * initializations
 */

/**
 * Collection to store the Yokes (analogous to tweets)
 * @param {String} user - Unique string userId of Yoke author
 * @param {String} msg - Yoke message
 * @param {Date} createdAt - Date object marking client side time the yoke was written at.
 */
Yokes = new Mongo.Collection('yokes');
/**
 * Collection to store the User relationships
 * @param {String} user - Unique string userId of user in current context
 * @param {String} follows - Unique string userId of follower
 */
Graph = new Meteor.Collection('graph');

EasySearch.createSearchIndex('users', {
  'field': ['username', 'profile.name'],
  'collection': Meteor.users,
  'use': 'mongo-db'
});

if (Meteor.isServer) {
  /**
   * Enforcing that the key of the 'schema' of the
   * Graph collection is (user, follows)
   */
  Graph._ensureIndex({
    user: 1,
    follows: 1
  }, {
    unique: 1
  });
}