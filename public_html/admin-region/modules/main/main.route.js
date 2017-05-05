(function(){
    'use strict';

    angular.module('design.modules.main.route', [])
		.config(function($stateProvider, $urlRouterProvider) {
								
			$stateProvider        
				.state('main', {
					url: '/main',
					views: {
						'content': {
							templateUrl: 'modules/main/main.html',
							controller: 'MainController'
						},
						'header': {
							templateUrl: 'modules/header/header.html',
							controller: 'HeaderController'
						},
					}
				});

				$urlRouterProvider.otherwise('/main');

		});
}());