(function(){
    'use strict';

    angular.module('design.modules.record-list.grid.route', [])
		.config(function($stateProvider, $urlRouterProvider) {
								
			$stateProvider        
				.state('record-list.grid', {
					url: '/grid-:dataType/:action/:id',
					templateUrl: 'modules/record-list/grid/grid.html',
					controller: 'RecordGridController'
				});

		});
}());