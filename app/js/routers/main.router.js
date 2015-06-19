;(function (){
  
  'use strict';

  app.Routers.MainRouter = Backbone.Router.extend({

      initialize: function(options) {
        this.collection = options.collection;
      },

      routes: {
        '' : 'userLogin',
        'register' : 'userRegister',
        'dashboard' : 'userDash',
        'post/:id' : 'gamePage',
        'about' : 'aboutPage'
      }

  });

}());