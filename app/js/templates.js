this["hbs"] = this["hbs"] || {};
this["hbs"]["dashboard"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<figure class=\"scoreDB\"></figure>\n\n<button class=\"postDB\">Post</button>\n<button class=\"playDB\">Play</button>\n\n<div class=\"logoutDB\">Logout</div>";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["example"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<h1>\n  "
    + this.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\n</h1>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["register"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form class=\"form-horizontal\" id=\"userRegister\">\n\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" id=\"fullName\" placeholder=\"Full Name\">\n  </div>\n\n    <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\">\n  </div>\n    \n  <div class=\"form-group\">\n    <input type=\"email\" class=\"form-control\" id=\"userEmail\" placeholder=\"Email\">\n  </div>\n\n  <div class=\"form-group\">\n    <input type=\"password\" class=\"form-control\" id=\"userPassword\" placeholder=\"Password\">\n  </div>\n\n  </div>\n\n  <div class=\"form-group\">\n    <button type=\"submit\" class=\"btn btn-default\">Register</button>\n  </div>\n\n</form>";
},"useData":true});