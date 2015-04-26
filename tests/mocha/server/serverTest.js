if (!(typeof MochaWeb === 'undefined')) {
  MochaWeb.testOnly(function() {
    //Seeding users below
    Meteor.startup(function() {
      Meteor.flush();
      if (Meteor.users.find().count() === 0) {
        var names = ["Ada Lovelace",
          "Grace Hopper",
          "Marie Curie",
          "Carl Friedrich Gauss",
          "Nikola Tesla",
          "Claude Shannon"
        ];
        for (var i = 0; i < names.length; i++) {
          Meteor.users.insert(profile: {
            name: names[i]
          }, username: names[i].split(" ").slice(-1)[0]);
        }
      }
    });

    describe("Server initialization", function() {
      it("should have a Meteor version defined", function() {
        chai.assert(Meteor.release);
      });
    });

    describe("Testing seeded collection", function() {
      it("should be the length of the seed array", function() {
        chai.assert(Meteor.users.find().count(), names.length);
      });
    });

    describe("Graph schema key is enforced", function() {
      Meteor.flush();
      var _id = Math.floor(Math.random() * 100);
      before(function() {
        for (var i = 0; i < 3; i++) {
          if (i == 2) {
            Graph.insert({
              user: 0,
              follows: _id
            });
          } else {
            Graph.insert({
              user: i,
              follows: _id
            });
          }
        }
      });
      it("should have only two records with _id as follows", function() {
        chai.assert.equal(Graph.find({
          follows: _id
        }).count(), 2);
      });
    });


  });
}