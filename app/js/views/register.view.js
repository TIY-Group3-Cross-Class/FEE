;(function (){
  
  'use strict';

  app.Views.Register = Backbone.View.extend({

    className: 'register',

    events: {

      'submit #userRegister' : 'userRegister' 

    },

    template: hbs.main,

    initialize: function(options) {
      var args = options || {};

      this.collection = args.collection;

      this.render();
      $('.container').html(this.el);
    },

    render: function() {
      this.$el.html(this.template({ user: this.collection.toJSON() }));
    },

    userRegister: function(e) {
      e.preventDefault();

      var that = this,
          form = $(event.target),
          fn = form.find('#fullName').val(),
          username = form.find('#username').val(),
          email = form.find('#userEmail').val(),
          password = form.find('#userPassword').val();

      var u = new app.Models.User({
        email: email,
        password: password,
        username: username,
        full_name: fn
      })

      this.collection.add(u).save().success(function () {
       
       that.render();
      
      });

    }

  });

}());