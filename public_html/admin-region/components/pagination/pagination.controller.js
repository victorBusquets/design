(function(){
    'use strict';

    angular.module('design.components.pagination.controller', [])
        .controller("PaginationController", ["$scope", "$location", function( $scope, $location ) {		
			var DEFAULT_LIMIT = 11;
			
			function getPages(){
				var currentPage = $scope.pagination.config.currentPage,
					pages =  $scope.pagination.config.totalPages,
					limit = parseInt( $scope.pagination.limit || DEFAULT_LIMIT ),
					centerPageIndex = Math.ceil( limit/2 ),
					pagesList = Array.apply(null, {length: pages}).map(function( el, index ){ return index+1; });

				if( currentPage-centerPageIndex >= 1 && currentPage+centerPageIndex <= pages){
					pagesList = pagesList.slice(currentPage-centerPageIndex, currentPage+centerPageIndex-1);
				}else{
					if(currentPage-centerPageIndex >= 1){
						pagesList = pagesList.slice(pagesList.length-limit, pagesList.length);
					}else{
						pagesList = pagesList.slice(0, limit);
					}
				}

				if( currentPage > centerPageIndex){
					pagesList[0] = 1;
					pagesList[1] = '';
				}
				if( currentPage < pages-centerPageIndex+1 ){
					pagesList[pagesList.length-2] = '';
					pagesList[pagesList.length-1] = pages;
				}

				return pagesList;
			};
			
			$scope.navigateToPage = function(newPage){
				var currentPage= $scope.pagination.config.currentPage,
					url = $location.url();
				
				$location.url(
					url.replace( "page-"+currentPage, "page-"+newPage )
				);
			};
			
			
			$scope.pagination.pages = getPages();
			
		}]);
}());