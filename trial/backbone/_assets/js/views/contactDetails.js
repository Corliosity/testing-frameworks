/**
 *
 * return {type} Returns Model, and data to display Detailed view
 *  IF more time - Add Star for ability to Favourite / Unfavourite Contact
 */
TC.ContactDetailsView = Backbone.Marionette.ItemView.extend({
	
	className: 'detail-view row',

	template: '#contact-detail-view',

	initialize: function(options){
		this.options = options;
	}
});