(function(){
    'use strict';

    angular.module('design.components.message.controller', [])
        .controller("MessageController", ["$scope", "$timeout", function( $scope, $timeout ) {
			const TIME_TO_CLOSE = 3 * 1000;
			const ICOS = {
				'new': 'plus',
				'edit': 'save',
				'info': 'info',
				'error': 'times',
				'delete': 'trash-o',
				'warning': 'exclamation'
			};
			$scope.showMessage = false;
			
			
			function initTimeOut(){
				$timeout( closeMessage, TIME_TO_CLOSE)
			};
			
			function closeMessage(){
				$scope.showMessage = false;
				$scope.message.config = null;
			};
			
			function prepareIco(){
				$scope.message.config.ico = ICOS[$scope.message.config.type];
			};
		
			$scope.closeMessage = closeMessage;
			
			$scope.$watch("message.config", function(value) {
				if(value){
					prepareIco();
					$scope.showMessage = true;
					initTimeOut(); 
				}
			});
			
		} ]);
}());