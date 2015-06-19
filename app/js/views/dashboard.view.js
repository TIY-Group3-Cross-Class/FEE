;(function (){

'use strict';

app.Views.Dashboard = Backbone.View.extend({

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