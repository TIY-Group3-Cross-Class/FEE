;(function (){
  
  'use strict';

  app.Models.User = Backbone.Model.extend({

    idAttribute: 'id',

    defaults: {

      email: '',
      password: '',
      username: '',
      full_name: ''
    }

  });

}());