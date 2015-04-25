// Template.userlist.users = function(mode) {
//   var pkg = new Array();
//   if (mode == 'following') {
//
//     return pkg;
//   } else if (mode == 'followers') {
//     Graph.find({
//       follows: Meteor.userId()
//     }).fetch().forEach(function(e) {
//       pkg.push(Meteor.users.findOne({
//         _id: e._id
//       }));
//     });
//   }
// }