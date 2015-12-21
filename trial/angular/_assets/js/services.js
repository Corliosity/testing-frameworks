// This is the MODEL
// All data handling should be done here before passing to controller

var truecallerServices = angular.module('truecallerServices', ['ngResource']);

truecallerServices.factory('ContactsList', ['$resource',
	function($resource) {
		return {
			contacts : $resource(window.appConfig.startURL,{},{
				AllContacts:
					{
						method:'GET',
						isArray: true,
						transformResponse : function(data, header) {

							var response = angular.fromJson(data);
							angular.forEach(response, function(item, idx) {
								var contactName = response[idx].name;
								var nameArray = contactName.split(' ');
								var firstInitial = nameArray[0].charAt(0);
								var secondInitial = nameArray[1].charAt(0);
								response[idx].initials = firstInitial + secondInitial;
							});

							return response;
						}
					} 
			})
		}
	}
]);

truecallerServices.factory('localStorage', function($q) {

	var STORAGE_ID = 'truecaller_contacts';

	var store = {

		contacts : [],

		_getFromLocalStorage: function () {
			return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
		},

		_saveToLocalStorage: function (contacts) {
			localStorage.setItem(STORAGE_ID, JSON.stringify(contacts));
		},

		get : function() {

		}
	};

	return store;
});
