
(function(){
    'use strict';

    angular.module('design.modules.record-list.controller', [])
        .controller("RecordListController", ["$scope", "$http", "$stateParams", "$state", function( $scope, $http, $stateParams, $state ) {			
			const RESULT_PER_PAGE = 10;
			const ORDER = "desc";
			$scope.dataType = $stateParams.dataType;
			
			function getPageParams(){
				return "page=" + $stateParams.page + "&resultsPerPage=" + RESULT_PER_PAGE;
			};
			
			function getOrderParams(){
				return "order=" + ORDER;
			};
			
			function prepareParams(){
				return "?" + getOrderParams() +"&"+ getPageParams();
			};
			
			$scope.getData = function(){
				$http({
					method: $scope.config.endPoint.list.method,
					url: $scope.config.endPoint.list.url +  prepareParams()
					})
					.success(function (res) {
						$scope.rows =	res.data;
						$scope.paginationConfig = res.extraData.paginationInfo;
					})
					.error(function (res) {
						console.log("there was an error", res);
					});
			};
			
			$scope.getConfig = function(){
				$http.get("modules/record-list/config/" + $scope.dataType + "-config.json")
					.success(function (res) {
						$scope.config = res;
						$scope.getData();
					})
					.error(function (res) {
						console.log("there was an error", res);
					});
			};

			$scope.setRowOpen = function( id ){
				$scope.rowOpenId =  id;
			};
			
			$scope.getRowFieldValue= function(row, field){
				return field.subName ? row[field.name] ? row[field.name][field.subName] : '' : row[field.name];
			};
			
			$scope.showMessage = function(type){
				$scope.messageConfig = {
					type: type,
					text: $scope.config.messages[type]
				};				
			};
			
			$scope.paginationCallback = function( page ){
				if( $state.params.id ){
					$state.go('record-list.grid', {
						'dataType': $state.params.dataType,
						'action': 	$state.params.action,
						'id': 		$state.params.id,
						'page': 	page
					});
				}else{
					$state.go('record-list', {
						'dataType':	$state.params.dataType,
						'page': 	page
					});
				}
			};

			$scope.getConfig();
		}]);
}());