(function() {
    'use strict';

	angular.module('design.components.grid-field.directive', [])
	.directive('dirGridField', function(){
		return {
			restrict: 'EA',
			replace: true,
			controller: 'GridFieldController',
			controllerAs: 'gridField',
			templateUrl: 'components/grid-field/grid-field.html',
			scope:{
				value: '=',
				subvalue: '=',
				config: '=',
				disabled: '=',
				dependency: '=',
				error: '='
			},
			bindToController: true
		};
	});
}());