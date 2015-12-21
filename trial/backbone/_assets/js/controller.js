/**
 * @return {object} functions handling the routing for Backbone/Marionette
 * 
 * Contact details takes required parameter of id (phone number) to find contact from Collection
 */
TC.Controller = {
	
	home : function(){
		var contactView,
			favouriteView;

		contactView = new TC.ContactsView({
			collection : new Backbone.Collection(TC.contacts.first(50))
		});

		favouriteView = new TC.FavouritesView({
			collection : TC.favouritesContacts
		});

		TC.mainView.allContacts.show(contactView);
		TC.mainView.favouritesRegion.show(favouriteView);
	},

	/**
	 * @param {id} - Requires phone number of contact to display card
	 */
	contactDetails : function(id) {
		var view;

		var contactDetail = TC.contacts.findWhere({ phone: id });

		view = new TC.ContactDetailsView({
			model : contactDetail
		});

		TC.mainView.allContacts.show(view);
	}
};