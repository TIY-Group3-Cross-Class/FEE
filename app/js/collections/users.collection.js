
=======
;(function (){

  'use strict';

  app.Collections.Users = Backbone.Collection.extend({

    model: app.Models.User,

    comparator: 'id',

    url: app.rootURL + '/users/signup'

  });

}());

