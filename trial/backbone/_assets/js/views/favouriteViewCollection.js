/**
 *
 * return {type} Setup for Favourites Child Views, colleciton passed in during routing
 * 			fetch colleciton here, for Models to display on Child
 */
TC.FavouritesView = Backbone.Marionette.CollectionView.extend({
	
	tagName : 'ul',
	className : 'medium-block-grid-1',
	childView : TC.FavouriteChildView,

	initialize: function() {
		this.collection.fetch();
	}

});