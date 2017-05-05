(function(){
    'use strict';

    angular.module('design.modules.products.product-grid.route', [])
		.config(function($stateProvider, $urlRouterProvider) {
								
			$stateProvider        
				.state('products.product-grid', {
					url: '/grid/:action/:id',
					templateUrl: 'modules/products/product-grid/product-grid.html',
					controller: 'ProductGridController'
				});

		});
}());