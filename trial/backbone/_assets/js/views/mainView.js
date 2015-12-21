/**
 * return {type} Sets up the basis for displaying All Contacts, and Favourites on screen
 */
TC.MainView = Marionette.LayoutView.extend({
	
	template : '#main_view',
	className: 'row',

	regions : {
		allContacts : '#allContacts',
		favouritesRegion : '#favouritesRegion'
	}
});