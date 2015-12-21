TC.ContactsView = Backbone.Marionette.CollectionView.extend({
	
	tagName : 'ul',
	className : 'medium-block-grid-1',
	childView : TC.ContactChildView

});