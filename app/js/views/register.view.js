;(function (){
  
  'use strict';

  app.Views.Register = Backbone.View.extend({

    className: 'register',

    events: {

      'submit #userRegister' : 'userRegister' 

    },

    template: hbs.main,

    initialize: function (options) {
      var args = options || {};

      this.collection = args.collection;

      this.render();
      $('.container').html(this.el);
    },

    render: function () {
      this.$el.html(this.template({ user: this.collection.toJSON() }));
    },

    userRegister: function(e) {
      e.preventDefault();

      // Grab our form + form values



    }

  });

}());