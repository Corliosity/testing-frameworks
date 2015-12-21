/**
 *
 * return {type} - Couple to Model
 * Instantiate with Local Storage for Favourites.
 *  Local storage creates a reference with Key to all Models stored.
 */

TC.FavouriteContactsCollection = Backbone.Collection.extend({

	model: TC.FavouriteContact,
	
	localStorage: new Backbone.LocalStorage(TC.appConfig.localKey)
});