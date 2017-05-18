(function(){
    'use strict';

    angular.module('design.components.grid-field.controller', [])
        .controller("GridFieldController", ["$scope", function( $scope ) {		
			function filterSelectedValue(){
				$scope.gridField.value = $scope.gridField.dependency.filter(function(element){
					return element._id === ( $scope.gridField.value && $scope.gridField.value._id );
				})[0] ;
			};
					
			function showDefaultOption(){
				$scope.showDefault = true;
			}
					
			$scope.prepareSelectedValue = function(){
				$scope.gridField.value ?  filterSelectedValue() : showDefaultOption();
			};			
			
			
			$scope.getPlaceholder = function(){
				return $scope.gridField.disabled ? '' : $scope.gridField.config.title;
			};	
						
			$scope.gridField.config.type = ( $scope.gridField.config.type || 'text' );
				
			$scope.isRequired = $scope.gridField.config.validations && $scope.gridField.config.validations.required != undefined;
		}]);
}());