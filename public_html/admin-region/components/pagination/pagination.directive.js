(function() {
    'use strict';

	angular.module('design.components.pagination.directive', [])
	.directive('dirPagination', function(){
		return {
			restrict: 'EA',
			replace: true,
			controller: 'PaginationController',
			controllerAs: 'pagination',
			templateUrl: 'components/pagination/pagination.html',
			scope:{
				limit: '=',
				config: '=',
				callback: '='
			},
			bindToController: true
		};
	});
}());