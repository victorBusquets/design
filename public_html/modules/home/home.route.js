(function(){
    'use strict';

    angular.module('design.modules.home.route', [])
		.config(function($stateProvider, $urlRouterProvider) {
								
			$stateProvider        
				.state('home', {
					url: '/',
					views: {
						'content': {
							templateUrl: 'modules/home/home.html',
							controller: 'HomeController'
						}
					}
				});

				$urlRouterProvider.otherwise('/');

		});
}());