(function(){
    'use strict';

    angular.module('design.modules.record-list.grid.controller', [])
        .controller("RecordGridController", ["$scope", "$http", "$stateParams", "$q", function( $scope, $http, $stateParams, $q ) {								
				var modeConfig = {
					'new': {
						'ico': 'fa-plus',
						'text': 'Crear'
					},
					'edit': {
						'ico': 'fa-save',
						'text': 'Guardar'
					},
					'delete': {
						'ico': 'fa-trash-o',
						'text': 'Eliminar'
					}
				};
				
				$scope.setMode = function(){
					$scope.mode = $stateParams.action;
					$scope.title = $scope.config.itemTitles[$stateParams.action]  + ( $stateParams.id || '' ) ;
					$scope.buttonParams = modeConfig[$scope.mode];
				};
				$scope.isDisabled = function(){
					return $scope.mode != 'edit' && $scope.mode != 'new';
				};			
				$scope.getDependencyValue = function(name){
					return $scope[name];
				};
				
				$scope.getRecordDetails = function(id){
					return $http.get( $scope.config.endPoint.list+"/"+id );
				};
				$scope.getDependency = function( endPoint ){
					return $http.get( endPoint );
				};
				
				$scope.loadData = function(){
					var dataPromise = new Array(),
						dataStorage = new Array();
					
					if( $stateParams.id!=undefined ){
						dataPromise.push( $scope.getRecordDetails( $stateParams.id ) );
						dataStorage.push( 'record' );
					}
					if( $scope.config.dependencies && ( $scope.mode === 'edit' || $scope.mode === 'new' ) ){
						$scope.config.dependencies.map(function(dependency){
							dataPromise.push( $scope.getDependency( dependency.endPoint ) );
							dataStorage.push( dependency.name );							
						});
					}
					
					dataPromise = $q.all(dataPromise);
					
					dataPromise.then(function( res ){				
						dataStorage.map(function( dataName, index ){
							$scope[dataName] = res[index].data;
						});
					},function(error){
						console.log( error );	
					});
				};
				$scope.getConfig = function(dataType){
				    $http.get("modules/record-list/config/"+dataType+"-config.json")
						.success(function (data) {
							$scope.config = data;
							$scope.setMode();
							$scope.loadData();
						})
						.error(function (data) {
							console.log("there was an error");
						});
				};				
				
				$scope.getConfig( $stateParams.dataType );
		}]);
		
}());