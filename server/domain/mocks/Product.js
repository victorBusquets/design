'use strict';

//File: api/domain/mocks/Product
	module.exports = function() {
		var imagesBase = 'styles/assets/products/',
			products = [
			{
				_id: 0,
				name: 'Arroz',
				lastModification: "2017-05-22T14:28:10.933Z",
				description: 'El arroz (del árabe أرز, Ar-ruzz) es la semilla de la planta Oryza sativa. Se trata de un cereal considerado alimento básico en muchas culturas culinarias (en especial la cocina asiática), así como en algunas partes de América Latina. El arroz es el segundo cereal más producido en el mundo, tras el maíz.',
				energy: 60,//calorias
				quantity: 100,//gramos
				protein: 12,
				fats: 10,
				carbohydrates: 50,
				ico: imagesBase + 'arroz.jpg',
				category: {
					_id: 1,
					name: 'Arroz y pasta'
				}
			},{
				_id: 1,
				name: 'Arroz integral',
				description: 'El arroz (del árabe أرز, Ar-ruzz) es la semilla de la planta Oryza sativa. Se trata de un cereal considerado alimento básico en muchas culturas culinarias (en especial la cocina asiática), así como en algunas partes de América Latina. El arroz es el segundo cereal más producido en el mundo, tras el maíz.',
				lastModification: "2017-05-22T14:27:10.933Z",		
				energy: 51,//calorias
				quantity: 100,//gramos
				protein: 23,
				fats: 8,
				carbohydrates: 40,
				ico: imagesBase + 'arroz_integral.jpg',
				category: {
					_id: 1,
					name: 'Arroz y pasta'
				}
			},{
				_id: 2,
				name: 'Macarrones',
				lastModification: "2017-05-22T14:26:10.933Z",
				energy: 65,//calorias
				quantity: 100,//gramos
				protein: 23,
				fats: 10,
				carbohydrates: 70,
				ico: imagesBase + 'macarrones.jpg',
				category: {
					_id: 1,
					name: 'Arroz y pasta'
				}			
			},{
				_id: 3,
				name: 'Solomillo de cerdo',
				lastModification: "2017-05-22T14:25:10.933Z",
				energy: 40,//calorias
				quantity: 100,//gramos
				protein: 20,
				fats: 30,
				carbohydrates: 20,
				ico: imagesBase + 'solomillo_de_cerdo.jpg',
				category: {
					_id: 2,
					name: 'Carne'
				}
			},{
				_id: 4,
				name: 'Entrecot de buey',
				lastModification: "2017-05-22T14:23:10.933Z",
				energy: 70,//calorias
				quantity: 100,//gramos
				protein: 45,
				fats: 18,
				carbohydrates: 35,
				ico: imagesBase + 'entrecot_de_buey.jpg',
				category: {
					_id: 2,
					name: 'Carne'
				}
			},{
				_id: 5,
				name: 'Hamburguesa mixta(cerdo/vaca)',
				lastModification: "2017-05-21T14:28:10.933Z",
				energy: 72,//calorias
				quantity: 100,//gramos
				protein: 12,
				fats: 15,
				carbohydrates: 50,
				ico: imagesBase + 'arroz_integral.jpg',
				category: {
					_id: 2,
					name: 'Carne'
				}
			},{
				_id: 6,
				name: 'Jamon serrano',
				lastModification: "2017-04-22T14:28:10.933Z",
				energy: 42,//calorias
				quantity: 100,//gramos
				protein: 32,
				fats: 34,
				carbohydrates: 40,
				ico: imagesBase + 'jamon_serrano.jpg',
				category: {
					_id: 3,
					name: 'Embutido'
				}
			},{
				_id: 7,
				name: 'Merluza',
				lastModification: "2017-03-22T14:28:10.933Z",
				energy: 56,//calorias
				quantity: 100,//gramos
				protein: 52,
				fats: 10,
				carbohydrates: 30,
				ico: imagesBase + 'merluza.jpg',
				category: {
					_id: 4,
					name: 'Pescado'
				}
			}
		];
		
		return products;
	};