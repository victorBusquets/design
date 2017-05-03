(function(){
    'use strict';

    angular.module('design.modules.products.route', [])
		.config(function($stateProvider, $urlRouterProvider) {
								
			$stateProvider        
				.state('products', {
					parent: 'main',
					url: '/products',
					templateUrl: 'modules/products/products.html',
					controller: 'ProductsController'
				});

		});
}());