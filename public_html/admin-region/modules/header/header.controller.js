(function(){
    'use strict';

    angular.module('design.modules.header.controller', [])
        .controller("HeaderController", ["$scope", "$http", function( $scope, $http ) {

			$scope.session = {
				name: 'Victor',
				surname: 'Busquets Boro'
			};

		}]);
		
}());