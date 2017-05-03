(function(){
    'use strict';

    angular.module('design.modules.home.controller', [])
        .controller("HomeController", ["$scope", "$http", function( $scope, $http ) {
			
			$scope.getConfig = function(){
				$http.get('modules/home/config.json').then(function(result){
					$scope.config = result.data;           
				});
			};

			$scope.getConfig();	
		}]);
}());