/**
 * Requires contactsViewColleciton.js
 *
 * return {type} Child view display of all contacts
 *				On click of Main area (Everything but Star)
 *					Display Contact Card
 *				On Star click save to Favourites Model to handle Local Storage events.
 * @note Technically I should check for the Phone Locally in the Model/Collection
 * @note cont. I am presuming in an actual environment that I couls use the API
 * @note cont. To save data and then overwrite Backbone.Collection.sync to save locally or to server
 */

TC.ContactChildView = Backbone.Marionette.ItemView.extend({
	
	template : '#contacts_list',
	className : 'contact-list-item',
	tagName : 'li',

	events: {
		'click .js-save' : 'addToFavourites',
		'click button.flat' : 'seeDetails'
	},

	onDomRefresh: function() {
		var checkModel,
			checkID;

		checkID = this.model.get('phone');

		if (TC.favouritesContacts.findWhere({phone : checkID})) {
			var star = this.$el.find('span.icon');
			star.toggleClass('star-color');
		}
	},

	addFavourite: function() {

		var success;
		var star = this.$el.find('span.icon');
		var modelID = this.model.get('phone');
		var modelFL = this.model.get('initials');

		var favourite = new TC.FavouriteContact({
			initials: modelFL,
			phone: modelID
		});

		star.toggleClass('star-color');
		
		TC.favouritesContacts.add(favourite);

		favourite.save([],{
			success: function(model, response) {
				// If extra setup needed.
				success = true;
				
			},
			error: function(model, response) {
				// console.log('An error with ' + JSON.stringify(model) + ' occured by ' + JSON.stringify(response));
				success = false;
			}
		});

		return success;
	},

	addToFavourites: function(event) {
		// Create an instance of a new Model
		// Save the favourite to Model and Collection
		// Model will use Backbone.localstorage
		// Display Success Message
		console.log(TC.favouritesContacts);
		if (TC.favouritesContacts.length + 1 < TC.appConfig.maxContacts) {

			var adding = this.addFavourite();

			if (adding === true) {
				
				alert('Success, you have added ' + this.model.get('name') + ' to your favourites.');

			} else {
				
				alert('Sorry we could not add the desired contact to your favourite list');
			}

		} else {

			alert('Whoops, looks like you have added too many Favourites, sorry but we cannot add any more');
		}


	},

	seeDetails: function(event) {
		var modelID;
		
		modelID = this.model.get('phone');
		Backbone.history.navigate('contact/' + modelID, {trigger:true});

	}

});