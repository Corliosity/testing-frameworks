/**
 *
 *
 * return {type} Create collection for All Contacts from API
 */
TC.ContactCollection = Backbone.Collection.extend({
	
	model : TC.ContactModel,

	url : TC.appConfig.startUrl
});