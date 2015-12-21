/**
 * Requires favouriteViewCollection.js 
 *
 * return {type} Displays favourite contact models from collection
 * Using Item View makes actions happen on single child element
 */
TC.FavouriteChildView = Backbone.Marionette.ItemView.extend({
	
	template : '#favourites-view',
	className : 'contact-list-item',
	tagName : 'li',

	events: {
		'click .js-remove' : 'removeFromFavourites',
		'click span.js-initials' : 'seeDetails'
	},

	removeFromFavourites: function(event) {
		// Delete instance from local storage
	},

	seeDetails: function(event) {

		var modelID;
		modelID = this.model.get('phone');
		
		Backbone.history.navigate('contact/' + modelID, {trigger:true});

	}

});