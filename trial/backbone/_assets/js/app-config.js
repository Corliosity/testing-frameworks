/** 
 * Application and Namespace Declaration
 *
 * Declare starting region (div or html tag) for SPA to be loaded.
 * 
 * @object {appConfig} Contains urls, keys, and other information to be used as globals in app.
 * @object {appConfig} Makes changes easier to dictate (URL, or Special Numbers)
 */

var TC = new Backbone.Marionette.Application();

TC.addRegions({
	mainRegion : '#mainRegion'
});

TC.appConfig = {
	startUrl : window.appConfig.startURL,
	localKey: window.appConfig.storageKey,
	maxContacts : 20
}