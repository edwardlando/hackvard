if (Meteor.isClient) {

Meteor.subscribe('people');


};


  Template.hello.events({
     'submit #register-form' : function(e, t) {
      e.preventDefault();
      var email = t.find('#account-email').value
        , name = t.find('#account-name').value;

        People.insert({name:name, email:email});


    var form = document.getElementById("register-form");
    form.reset();



     }



  });
