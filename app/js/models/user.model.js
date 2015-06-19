;(function (){
  
  'use strict';

  app.Models.User = Backbone.Model.extend({

    idAttribute: /*Mongo DB ID*/ '_id',

    defaults: {

      email: '',
      password: '',
      username: '',
      full_name: ''
    }

  });

}());