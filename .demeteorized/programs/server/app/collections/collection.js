(function(){People = new Meteor.Collection("people");


People.allow({
insert: function(userId, doc) {
// only allow posting if you are logged in
return !! doc; },
remove: function(doc) {
// only allow posting if you are logged in
return !! doc; },
update: function(doc) {
// only allow posting if you are logged in
return !! doc; }
});



})();
