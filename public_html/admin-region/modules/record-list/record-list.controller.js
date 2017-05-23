
(function(){
    'use strict';

    angular.module('design.modules.record-list.controller', [])
        .controller("RecordListController", ["$scope", "$http", "$stateParams", function( $scope, $http, $stateParams ) {			
			const RESULT_PER_PAGE = 10;
			$scope.orderBy = "order=desc";
			
			function getPageParams(){
				return "page=" + $stateParams.page + "&resultsPerPage=" + RESULT_PER_PAGE;
			};
			
			function getOrderParams(){
				return $scope.orderBy;
			};
			
			function prepareParams(){
				return getOrderParams() +"&"+ getPageParams();
			};
			
			$scope.getData = function(){
				$http({
					method: $scope.config.endPoint.list.method,
					url: $scope.config.endPoint.list.url + "?" + prepareParams()
					})
					.success(function (res) {
						$scope.rows =	res.data;
					})
					.error(function (res) {
						console.log("there was an error", res);
					});
			};
			
			$scope.getConfig = function(dataType){
				$scope.dataType = dataType;
				$http.get("modules/record-list/config/"+dataType+"-config.json")
					.success(function (res) {
						$scope.config = res;
						$scope.getData();
					})
					.error(function (res) {
						console.log("there was an error", res);
					});
			};
			
			$scope.getConfig( $stateParams.dataType );
			
			$scope.getRowFieldValue= function(row, field){
				return field.subName ? row[field.name] ? row[field.name][field.subName] : '' : row[field.name];
			}
		}]);
}());