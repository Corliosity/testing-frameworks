/**
 * @author Andrew Corliss
 * @description Applicaiton initializers.
 * @return {type} Initializes applicaiton on Document ready
 * 
 * @note Functions should be moved to delegate initializers for greater readablity.
 */
$(document).ready(function() {
	
	// We do not want to cache the call, 
	// This will then not allow any data to be saved to local storage
	$.ajaxSetup({
		cache: false
	});

	TC.contacts = new TC.ContactCollection();
	TC.favouritesContacts = new TC.FavouriteContactsCollection();
	TC.mainView = new TC.MainView();
	

	TC.contacts.fetch()
		.done(function(response) {
			
			TC.mainRegion.show(TC.mainView);
			TC.router = new TC.Router();
			Backbone.history.start();

		});

	TC.start();
});