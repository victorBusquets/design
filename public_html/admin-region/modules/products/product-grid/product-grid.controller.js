(function(){
    'use strict';

    angular.module('design.modules.products.product-grid.controller', [])
        .controller("ProductGridController", ["$scope", "$http", "$stateParams", function( $scope, $http, $stateParams ) {
			$scope.products = [
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
				];
				var titles = {
					'detail': 'Detalles de producto',
					'new': 'Nuevo producto',
					'delete': 'Confirme eliminación de producto',
					'edit': 'Edicion datos de producto'
				};
				
				$scope.getProductDetails = function(id){
					$scope.product = $scope.products.filter(function(product){
						return product._id == parseInt(id);
					})[0];
				};
				
				$scope.setMode = function(){
					$scope.mode = $stateParams.action;
					$scope.title = ( titles[$stateParams.action] || 'Nuevo' ) + ( ' '+$stateParams.id || '' );
					$scope.editionDisabled = $scope.mode != 'edit' && $scope.mode != 'new';
				};
				
				if($stateParams.id!=undefined)	$scope.getProductDetails( $stateParams.id );
				$scope.setMode();
		}]);
		
}());