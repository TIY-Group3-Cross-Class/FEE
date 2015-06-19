this["hbs"] = this["hbs"] || {};
this["hbs"]["dashboard"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1 class=\"SBBD\">View your Score!</h1>\n\n<figure class=\"scoreDB\"></figure>\n\n<button class=\"postDB\">Post</button>\n<button class=\"playDB\">Play</button>\n\n<div class=\"logoutDB\">\n<button class=\"logout1DB\">Logout</button>\n</div>";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["example"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<h1>\n  "
    + this.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\n</h1>\n";
},"useData":true});