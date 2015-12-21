/**
 *
 * return {type} Contact model, on creation add attribute of initials to Model for Display
 * @note if more time, use Model here to look up Phone number in Local Storage
 * @note cont. IF record exits update Star to full mode
 */
TC.ContactModel = Backbone.Model.extend({

	initialize: function() {

		this.on('add', this.modifyAttribute, this);

	},

	modifyAttribute: function() {

		var contact = this.get('name');
		var nameArray = contact.split(' ');
		var firstInitial = nameArray[0].charAt(0);
		var secondInitial = nameArray[1].charAt(0);
		
		this.set({
			initials : firstInitial + secondInitial
		}, { silent:true });
	}
});