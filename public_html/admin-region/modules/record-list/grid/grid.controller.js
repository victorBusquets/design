(function(){
    'use strict';

    angular.module('design.modules.record-list.grid.controller', [])
        .controller("RecordGridController", ["$scope", "$http", "$stateParams", function( $scope, $http, $stateParams ) {						
				var titles = {
					'detail': 'Detalles de ',
					'new': 'Nuevo ',
					'delete': 'Confirme eliminación de ',
					'edit': 'Edicion datos de '
				};
								
				$scope.getRecordDetails = function(id){
					
					$http.get( $scope.config.endPoint.list+"/"+id )
						.success(function (data) {
							$scope.record= data;
						})
						.error(function (data) {
							console.log("there was an error");
						});
				};
				
				$scope.setMode = function(){
					$scope.mode = $stateParams.action;
					$scope.title = ( titles[$stateParams.action] || 'Nuevo' ) + $scope.config.itemTitle + ( ' '+$stateParams.id || '' ) ;
					$scope.editionDisabled = $scope.mode != 'edit' && $scope.mode != 'new';
				};
				
				$scope.getRowFieldValue= function(record, field){
					return field.subName ? record[field.name][field.subName] : record[field.name];
				};
				
				$scope.getConfig = function(dataType){
				    $http.get("modules/record-list/config/"+dataType+"-config.json")
						.success(function (data) {
							$scope.config = data;
							$scope.setMode();
							if($stateParams.id!=undefined)	$scope.getRecordDetails( $stateParams.id );
						})
						.error(function (data) {
							console.log("there was an error");
						});
				};
				
				$scope.getConfig( $stateParams.dataType );
		}]);
		
}());