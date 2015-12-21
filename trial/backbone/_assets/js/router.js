TC.Router = Backbone.Marionette.AppRouter.extend({
	
	controller : TC.Controller,

	appRoutes : {
		'' : 'home',
		'contact/:id' : 'contactDetails'
	}
});