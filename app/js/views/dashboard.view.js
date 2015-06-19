;(function (){

'use strict';

app.views.dashboard = Backbone.Views.Extend({

	className: '.dashboard',

	template: hbs.dashboard,

	initialize: function () {
		this.render();
		$('.col-sm-6').html(this.el);
	},

	render: function () {
		this.$el.html(this.template);

	}

});

}());