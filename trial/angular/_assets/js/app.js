var truecaller = angular.module('truecaller', ['ngRoute', 'truecallerControllers', 'truecallerServices']);

truecaller.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : './_assets/js/templates/contact-list.html',
			controller : 'ContactController'
		});
}]);