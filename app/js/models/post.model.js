;(function (){

  'use strict';

  app.Models.Post = Backbone.Model.extend({

    idAttribute: '',

    defaults: {
      imgURL: '',
      owner: '',
      answer: '',
      guesses: '',

    }

  });

}());
