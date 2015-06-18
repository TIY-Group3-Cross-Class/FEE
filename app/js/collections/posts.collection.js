;(function (){
  
  'use strict';

  app.Collections.Posts = Backbone.Collection.extend({

    model: app.Models.Post,
    
    comparator: 'id',

    url: app.rootURL
  });

}());