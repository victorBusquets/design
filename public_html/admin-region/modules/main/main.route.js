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
						}
					}
				});

				$urlRouterProvider.otherwise('/main');

		});
}());