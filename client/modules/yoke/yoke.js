/**
 * @file
 * Template helpers for the singular Yoke module.
 */


Template.yoke.helpers({
  /**
   * Check if yoke belongs to current user by comparing the yoke's owner's
   * user id to the current user's user id.
   * @locus Client
   * @method Template.yoke.__helpers[' ownYoke']
   * @param {String} e - Unique user id.
   */
  'ownYoke': function(e) {
    return (e == Meteor.userId()) ? true : false;
  },
  /**
   * Gets user's username given a unique user id
   * @locus Client
   * @method Template.yoke.__helpers[' grabUsername']
   * @param {String} e - Unique user id.
   */
  'grabUsername': function(e) {
    return Meteor.users.findOne({
      _id: e
    }).username;
  }
});