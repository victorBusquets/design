(function(){
    'use strict';

    angular.module('design.modules.api.controller', [])
        .controller("ApiController", ["$scope", "$http", function( $scope, $http ) {
			$scope.getConfig = function(){
				$http.get('modules/api/config.json').then(function(result){
					$scope.config = result.data;           
				});
			};
			
			$scope.getConfig();	
		}]);
		
}());