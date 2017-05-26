(function(){
    'use strict';

    angular.module('design.modules.record-list.grid.controller', [])
        .controller("RecordGridController", ["$scope", "$http", "$stateParams", "$q", "$document", function( $scope, $http, $stateParams, $q, $document ) {								
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
				
				function showErrors(){
					$(".grid").addClass("showError");
				};
				
				$scope.loading = false;
				$scope.record = {};
				
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
				
				$scope.getRecordDetails = function(endPoint, id){
					var url = endPoint.url + ( endPoint.urlParam ? "/" + id : "");
					
					return $http({
						method: endPoint.method,
						url: url
					});
				};
				$scope.getDependency = function( endPoint ){				
					return $http({
						method: endPoint.method,
						url: endPoint.url
					});
				};
				
				$scope.loadData = function(){
					var dataPromise = new Array(),
						dataStorage = new Array();
					
					if( $stateParams.id != "" ){
						dataPromise.push( $scope.getRecordDetails( $scope.config.endPoint.detail, $stateParams.id ) );
						dataStorage.push( 'record' );
					}
					if( $scope.config.dependencies && ( $scope.mode === 'edit' || $scope.mode === 'new' ) ){
						$scope.config.dependencies.map(function(dependency){
							dataPromise.push( $scope.getDependency( dependency.endPoint ) );
							dataStorage.push( dependency.name );							
						});
					}else{
						$scope.renderReady = true;
					}
					
					dataPromise = $q.all(dataPromise);
					
					dataPromise.then(function( res ){				
						dataStorage.map(function( dataName, index ){
							$scope[dataName] = res[index].data.data;
							$scope.renderReady = dataStorage.length === index+1;
						});
					},function(error){
						console.log( error );	
					});
				};
				
				$scope.getConfig = function(dataType){
				    $http({
						method: 'GET',
						url:	'modules/record-list/config/'+dataType+'-config.json'
					})
					.success(function (res) {
						$scope.config = res;
						$scope.setMode();
						$scope.loadData();
					})
					.error(function (res) {
						console.log("there was an error", res);
					});
				};					
												
				$scope.gridAction = function(){					
					var endPoint = $scope.config.endPoint[$scope.mode],
						url = endPoint.url + ( endPoint.urlParam ? "/" + $scope.record._id : "" );
					
					showErrors();
					
					$scope.loading = true;
						
					$http({
						method: endPoint.method,
						url:	url,
						data: 	$scope.record
					})
					.success(function (res) {
						console.log( "GRID ACTION SUCCESS", res );
						$scope.showMessage( $scope.mode );
						$scope.getData();
						$scope.loading = false;
					})
					.error(function (res) {
						console.log( "GRID ACTION was an error", res );
						$scope.loading = false;
					});
						
				};
								
				$scope.getConfig( $stateParams.dataType );
				
		}]);
		
}());