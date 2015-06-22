;(function (){
  
  'use strict';

  var appUsers = new app.Collections.Users();

  app.Views.Register = Backbone.View.extend({

    className: 'register',

    events: {

      'submit #userRegister' : 'userRegister' 

    },

    template: hbs.register,

    initialize: function(options) {
      var args = options || {};

      this.collection = args.collection;

      this.render();

      $('.col-sm-10').html(this.el);
    },

    render: function() {

      this.$el.html(this.template);

    },

    userRegister: function(e) {

      e.preventDefault();

      // cache current 'this', grab form variables

      var that = this,
          form = $(event.target),
          fn = form.find('#fullName').val(),
          username = form.find('#username').val(),
          email = form.find('#userEmail').val(),
          password = form.find('#userPassword').val();

      // new user object with attributes = to form values

      var newUser = {
        email: email,
        password: password,
        username: username,
        full_name: fn
      };

      // create new instance of user model, with u passed in

      var userInstance = new app.Models.User(newUser);

      appUsers.add(userInstance);

      console.log(appUsers);

      $.post(app.rootURL + '/users/signup', userInstance.toJSON()).success( function (data) {

        Cookies.set('access_token', data.access_token);
        Cookies.set('username', data.username);

        console.log(userInstance);

      });

    }

  });


}());