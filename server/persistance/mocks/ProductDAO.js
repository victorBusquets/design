'use strict';

//File: persistance/mocks/ProductDAO.js
	module.exports = function( products, Securize ) {
		var _findAllProduct = function (req, res) {
			var order = req.query.order || -1,
				orderBy = req.query.orderBy || "lastModification";

			products = products.sort( function(a,b){ return order == "asc" ? a[orderBy] > b[orderBy] :  b[orderBy] > a[orderBy] });
		
			_utils.setResponse( res, products, 200, true );
		},
		_findProductByCategory = function (req, res) {			
			var productsByCategory = products.filter(function(product){
				return product.category._id == req.params.category;
			});

			_utils.setResponse( res, productsByCategory, 200, true );
		},
		_getProduct = function (req, res) {			
			var product = products.filter(function(product){
				return product._id == req.params.id;
			});

			_utils.setResponse( res, product[0], 200, true );
		},
		_newProduct = function (req, res){
			var message = "Producto creado correctamente.";
			
			_utils.setResponse( res, message, 200, true );	
		},
		_updateProduct = function(req, res){
			var message = "Producto modificado correctamente.";
			
			_utils.setResponse( res, message, 200, true );			
		},
		_removeProduct = function(req, res){
			var product = products.filter(function(product){
				return product._id == req.params.id;
			}),
			message = "Producto " + product[0].name + " eliminado";
			
			_utils.setResponse( res, message, 200, true );
		};
		
		return {
			findProductByCategory: _findProductByCategory,
			findAllProduct: _findAllProduct,
			getProduct: 	_getProduct,
			newProduct: 	_newProduct,
			updateProduct: 	_updateProduct,
			removeProduct: 	_removeProduct
		}
	};