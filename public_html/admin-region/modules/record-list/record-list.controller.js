
(function(){
    'use strict';

    angular.module('design.modules.record-list.controller', [])
        .controller("RecordListController", ["$scope", "$http", "$stateParams", function( $scope, $http, $stateParams ) {			
			$scope.orderBy = "";
			
			function prepareParams(){
				return "?" + $scope.orderBy;
			};
			
			$scope.getData = function(){
				$http({
					method: $scope.config.endPoint.list.method,
					url: $scope.config.endPoint.list.url + prepareParams()
					})
					.success(function (data) {
						$scope.rows = data;
					})
					.error(function (data) {
						console.log("there was an error");
					});
			};
			
			$scope.getConfig = function(dataType){
				$scope.dataType = dataType;
				$http.get("modules/record-list/config/"+dataType+"-config.json")
					.success(function (data) {
						$scope.config = data;
						$scope.getData();
					})
					.error(function (data) {
						console.log("there was an error");
					});
			};
			
			$scope.getConfig( $stateParams.dataType );
			
			$scope.getRowFieldValue= function(row, field){
				return field.subName ? row[field.name] ? row[field.name][field.subName] : '' : row[field.name];
			}
		}]);
}());