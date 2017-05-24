(function(){
    'use strict';

    angular.module('design.modules.record-list.route', [])
		.config(function($stateProvider, $urlRouterProvider) {
								
			$stateProvider        
				.state('record-list', {
					parent: 'main',
					url: '/list-:dataType/page-:page',
					templateUrl: 'modules/record-list/record-list.html',
					controller: 'RecordListController'
				});

		});
}());