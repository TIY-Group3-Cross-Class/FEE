;(function (){
  
  'use strict';

  // Globals

  window.app = {};
  window.app.Models = {};
  window.app.Collections = {};
  window.app.Views = {};
  window.app.Routers = {};

  app.rootURL = 'https://www.sleepy-brook-9224.herokuapp.com';

  $.ajaxSetup ({
    
    headers: {
      'access_token' : Cookies.get('access_token') 
    }
  });

  app.isLoggedIn = (Cookies.get('access_token') !== undefined) ? true : false;

    if(app.isLoggedIn) {
      console.log('Yep, logged in.');
    } else {
      console.log('Nope, not logged in.');
    }

}());