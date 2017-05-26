(function() {
    'use strict';

	angular.module('design.components.message.directive', [])
	.directive('dirMessage', function(){
		return {
			restrict: 'EA',
			replace: true,
			controller: 'MessageController',
			controllerAs: 'message',
			templateUrl: 'components/message/message.html',
			scope:{
				config: '='
			},
			bindToController: true
		};
	});
}());