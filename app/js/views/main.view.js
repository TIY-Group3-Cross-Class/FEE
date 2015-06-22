;(function (){
  
  'use strict';

  var appUsers = new app.Collections.Users();

  app.Views.Login = Backbone.View.extend({

    className: 'login',

    events: {

      'submit #userLogin' : 'userLogin' 

    },

    template: hbs.login,

    initialize: function(options) {
      var args = options || {};

      this.collection = args.collection;

      this.render();

      $('.col-sm-10').html(this.el);
    },

    render: function() {

      this.$el.html(this.template);

    },

    userLogin: function(e) {

      e.preventDefault();

      // cache current 'this', grab form variables

      var that = this,
          form = $(event.target),
          username = form.find('#username').val(),
          email = form.find('#userEmail').val(),
          password = form.find('#userPassword').val();

      var userLogin = {
        email: email,
        password: password,
        username: username
      };

      $.post(app.rootURL + '/users/login', userLogin.toJSON()).success( function (data) {

        Cookies.set('access_token', data.access_token);
        Cookies.set('username', data.username);

        console.log(userLogin);

      });

    }

  });


}());