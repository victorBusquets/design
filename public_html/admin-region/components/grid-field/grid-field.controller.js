(function(){
    'use strict';

    angular.module('design.components.grid-field.controller', [])
        .controller("GridFieldController", ["$scope", function( $scope ) {		
			$scope.prepareSelectedValue = function(){
				$scope.gridField.value = $scope.gridField.dependency.filter(function(element){
					return element._id === ( $scope.gridField.value && $scope.gridField.value._id );
				})[0] || $scope.gridField.dependency[0];
			};			
			
			$scope.getPlaceholder = function(){
				return $scope.gridField.disabled ? '' : $scope.gridField.title;
			};
		}]);
}());