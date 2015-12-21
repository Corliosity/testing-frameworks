// First setup our applicaiton
// It has no dependencies at this point so do not pass anything in
var truecallerControllers = angular.module('truecallerControllers', ['truecallerServices']);

truecallerControllers.controller('ContactController', [
	'$scope',
	'ContactsList',
	function($scope, list) {
		list.contacts.AllContacts({}, function(response){
				$scope.contacts = response;
			}, function(errorResponse){
	                console.log(errorResponse);
	       });
	}
]);