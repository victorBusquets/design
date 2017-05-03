(function(){
    'use strict';

    angular.module('design.modules.api.json.route', [])
		.config(function($stateProvider, $urlRouterProvider) {
								
			$stateProvider        
				.state('api.json', {
					url: '/json/:restPoint',
					templateUrl: 'modules/api/json/json.html',
					controller: 'JsonController'
				});

		});
}());