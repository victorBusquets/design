(function(){
    'use strict';

    angular.module('design.modules.products.controller', [])
        .controller("ProductsController", ["$scope", "$http", function( $scope, $http ) {
			$scope.result = {
				data:	[
					{
						_id: 1,
						name: 'Arroz',
						description: 'El arroz (del árabe أرز, Ar-ruzz) es la semilla de la planta Oryza sativa. Se trata de un cereal considerado alimento básico en muchas culturas culinarias (en especial la cocina asiática), así como en algunas partes de América Latina. El arroz es el segundo cereal más producido en el mundo, tras el maíz.',
						energy: 60,//calorias
						quantity: 100,//gramos
						protein: 12,
						fats: 10,
						carbohydrates: 50,
						ico: 'arroz.jpg',
						category: {
							_id: 1,
							name: 'Arroz y pasta'
						}
					},{
						_id: 2,
						name: 'Arroz integral',
						description: 'El arroz (del árabe أرز, Ar-ruzz) es la semilla de la planta Oryza sativa. Se trata de un cereal considerado alimento básico en muchas culturas culinarias (en especial la cocina asiática), así como en algunas partes de América Latina. El arroz es el segundo cereal más producido en el mundo, tras el maíz.',
						energy: 51,//calorias
						quantity: 100,//gramos
						protein: 23,
						fats: 8,
						carbohydrates: 40,
						ico: 'arroz_integral.jpg',
						category: {
							_id: 1,
							name: 'Arroz y pasta'
						}
					},{
						_id: 3,
						name: 'Macarrones',
						energy: 65,//calorias
						quantity: 100,//gramos
						protein: 23,
						fats: 10,
						carbohydrates: 70,
						ico: 'macarrones.jpg',
						category: {
							_id: 1,
							name: 'Arroz y pasta'
						}			
					},{
						_id: 4,
						name: 'Solomillo de cerdo',
						energy: 40,//calorias
						quantity: 100,//gramos
						protein: 20,
						fats: 30,
						carbohydrates: 20,
						ico: 'solomillo_de_cerdo.jpg',
						category: {
							_id: 2,
							name: 'Carne'
						}
					},{
						_id: 5,
						name: 'Entrecot de buey',
						energy: 70,//calorias
						quantity: 100,//gramos
						protein: 45,
						fats: 18,
						carbohydrates: 35,
						ico: 'entrecot_de_buey.jpg',
						category: {
							_id: 2,
							name: 'Carne'
						}
					},{
						_id: 6,
						name: 'Hamburguesa mixta(cerdo/vaca)',
						energy: 72,//calorias
						quantity: 100,//gramos
						protein: 12,
						fats: 15,
						carbohydrates: 50,
						ico: 'arroz_integral.jpg',
						category: {
							_id: 2,
							name: 'Carne'
						}
					},{
						_id: 7,
						name: 'Jamon serrano',
						energy: 42,//calorias
						quantity: 100,//gramos
						protein: 32,
						fats: 34,
						carbohydrates: 40,
						ico: 'jamon_serrano.jpg',
						category: {
							_id: 3,
							name: 'Embutido'
						}
					},{
						_id: 8,
						name: 'Merluza',
						energy: 56,//calorias
						quantity: 100,//gramos
						protein: 52,
						fats: 10,
						carbohydrates: 30,
						ico: 'merluza.jpg',
						category: {
							_id: 4,
							name: 'Pescado'
						}
					},{
						_id: 9,
						name: 'Merluza',
						energy: 56,//calorias
						quantity: 100,//gramos
						protein: 52,
						fats: 10,
						carbohydrates: 30,
						ico: 'merluza.jpg',
						category: {
							_id: 4,
							name: 'Pescado'
						}
					},{
						_id: 10,
						name: 'Merluza',
						energy: 56,//calorias
						quantity: 100,//gramos
						protein: 52,
						fats: 10,
						carbohydrates: 30,
						ico: 'merluza.jpg',
						category: {
							_id: 4,
							name: 'Pescado'
						}
					},{
						_id: 11,
						name: 'Merluza',
						energy: 56,//calorias
						quantity: 100,//gramos
						protein: 52,
						fats: 10,
						carbohydrates: 30,
						ico: 'merluza.jpg',
						category: {
							_id: 4,
							name: 'Pescado'
						}
					},{
						_id: 12,
						name: 'Merluza',
						energy: 56,//calorias
						quantity: 100,//gramos
						protein: 52,
						fats: 10,
						carbohydrates: 30,
						ico: 'merluza.jpg',
						category: {
							_id: 4,
							name: 'Pescado'
						}
					}
				],
				info:{
					totalResults: 12,
					resultPerPage: 10,
					currentPage: 1			
				}
			};
		
			/*Compontent*/
			function getPages(currentPage, totalResults, resultPerPage){
				var pages = Math.ceil( $scope.paginator.totalResults / $scope.paginator.resultPerPage ),
					pageLimit = 11,
					centerPageIndex = Math.ceil( pageLimit/2 ),
					pagesList = Array.apply(null, {length: pages}).map(function( el, index ){ return index+1; });

					if( currentPage-centerPageIndex >= 1 && currentPage+centerPageIndex <= pages){
						console.log("Center");
						pagesList = pagesList.slice(currentPage-centerPageIndex, currentPage+centerPageIndex-1);
					}else{
						if(currentPage-centerPageIndex >= 1){
							pagesList = pagesList.slice(pagesList.length-pageLimit, pagesList.length);
						}else{
							pagesList = pagesList.slice(0, pageLimit);
						}
					}
					
					if( currentPage > centerPageIndex){
						pagesList[0] = 1;
						pagesList[1] = '...';
					}
					if( currentPage < pages-centerPageIndex+1 ){
						pagesList[pagesList.length-2] = '...';
						pagesList[pagesList.length-1] = pages;
					}
					
				return pagesList;
			};
			/*Compontent*/
		
			$scope.getProducts = function(page){
				if(page!='...'){

					$scope.paginator = $scope.result.info;
					$scope.paginator.currentPage = page;
					$scope.paginator.pages = getPages( page, $scope.paginator.totalResults, $scope.paginator.resultPerPage );
					$scope.paginator.finalPage = Math.ceil( $scope.paginator.totalResults / $scope.paginator.resultPerPage );	

					$scope.products = $scope.result.data.slice( $scope.paginator.resultPerPage*(page-1), $scope.paginator.resultPerPage*page );	
				}
			};
			
			$scope.getProducts(1);
		
		}]);
		
}());