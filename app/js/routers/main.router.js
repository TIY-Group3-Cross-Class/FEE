;(function (){
  
  'use strict';

  app.Routers.MainRouter = Backbone.Router.extend({

      initialize: function(options) {
        // this.collection = options.collection;
      },

      routes: {
        '' : 'userLogin',
        'register' : 'userRegister',
        'dashboard' : 'userDash',
        'post/:id' : 'gamePage',
        'about' : 'aboutPage'
      },

      userRegister: function () {
        new app.Views.Register({
          collection: this.collection
        })
      },

      userDash: function() {
        new app.Views.Dashboard ({
          collection: this.collection
        })
      }

  });

}());