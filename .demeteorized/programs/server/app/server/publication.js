(function(){// Meteor.publish('people', function() { return People.find();
// });


Meteor.publish('People', function(){ return Posts.find({}, {fields: {
email: false }});
});

})();
