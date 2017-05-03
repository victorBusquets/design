(function(){
    'use strict';

    angular.module('design.modules.api.functional.route', [])
		.config(function($stateProvider, $urlRouterProvider) {
								
			$stateProvider        
				.state('api.functional', {
					url: '/functional/:restPoint',
					templateUrl: 'modules/api/functional/functional.html',
					controller: 'FunctionalController'
				});

		});
}());