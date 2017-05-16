(function(){
    'use strict';

    angular.module('design.components.grid-field.controller', [])
        .controller("GridFieldController", ["$scope", function( $scope ) {		
			function filterSelectedValue(){
				$scope.gridField.value = $scope.gridField.dependency.filter(function(element){
					return element._id === ( $scope.gridField.value && $scope.gridField.value._id );
				})[0] ;
			};
			
			function addDefaultOption(){
				$scope.gridField.dependency.unshift({
					_id: null,
					name: 'Seleccione una opción'
				});
				$scope.gridField.value = $scope.gridField.dependency[0];
			};
			
			$scope.prepareSelectedValue = function(){
				$scope.gridField.value ?  filterSelectedValue() : addDefaultOption();
			};			
			
			
			$scope.getPlaceholder = function(){
				return $scope.gridField.disabled ? '' : $scope.gridField.title;
			};
		}]);
}());