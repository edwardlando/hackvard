if (Meteor.isClient) {

    Session.set('getIn', false);
    Meteor.subscribe('people');


}

Template.hello.getIn = function() {
    if (Session.get('getIn') === true) {
        return false;
    } else {
        return true;
    }
};


Template.hello.admission = function(){
  var admi = Session.get('admi') || Math.random();
  if ( admi >= 0.5 ){
    return true;
  }else{
    return false;
  }

};

Template.hello.created = function() {

    var appId = window.location.host.indexOf('localhost') !== -1 ? '773658339367563' : '773635002703230';
    console.log(appId);
    window.fbAsyncInit = function() {
        FB.init({
            appId: appId,
            xfbml: true,
            version: 'v2.1'
        });
    };

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
};


Template.hello.events({
    'submit #register-form': function(e, t) {
        console.log('ici');
        e.preventDefault();
        var email = t.find('#account-email').value,
            name = t.find('#account-name').value,
            occupation = t.find('#account-occupation').value;

        if (name === '' || email === '' || occupation === '') {
            alert('Please fill all the fields ');

        } else {

            console.log('x');

            People.insert({
                name: name,
                email: email,
                occupation: occupation,
                createdAt: new Date(),
            });

            var form = document.getElementById("register-form");
            form.reset();


            Session.set('getIn', true);

        }



    },
    'click div.facebook': function() {
        FB.ui({
                method: 'share',
                href: 'http://www.hackvard.com',


            },
            function(response) {
                if (response && !response.error_code) {
                    // alert('Posting completed.');
                } else {
                    // alert('Error while posting.');
                }
            }
        );
    },
    'click button.tryagain': function(){
      console.log('cliked');
      Session.set('admi', 1);

    }

// thankYou animated fadeInDown

});