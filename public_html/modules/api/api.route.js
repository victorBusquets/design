(function(){
    'use strict';

    angular.module('design.modules.api.route', [])
		.config(function($stateProvider, $urlRouterProvider) {
								
			$stateProvider        
				.state('api', {
					parent: 'home',
					url: '/api',
					templateUrl: 'modules/api/api.html',
					controller: 'ApiController'
				});

		});
}());