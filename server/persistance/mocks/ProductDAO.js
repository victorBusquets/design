'use strict';

//File: persistance/mocks/ProductDAO.js
	module.exports = function( products, Securize ) {
		var _findAllProduct = function (req, res) {
			var order = req.query.order || -1,
				orderBy = req.query.orderBy || "lastModification",
				page = parseInt(req.query.page) || 0,
				resultsPerPage = parseInt(req.query.resultsPerPage) || false;

			//SORT FILTER
			products = products.sort( function(a,b){ return order == "asc" ? a[orderBy] > b[orderBy] :  b[orderBy] > a[orderBy] });
			//PAGINATION
			products = resultsPerPage ? products.slice( resultsPerPage * page, resultsPerPage * page + resultsPerPage ) : products;
		
			_utils.prepareResponse( res, false, products );	
		},
		_getProduct = function (req, res) {			
			var product = products.filter(function(product){
				return product._id == req.params.id;
			})[0];

			_utils.prepareResponse( res, false, product );
		},
		_newProduct = function (req, res){
			var message = "Producto creado correctamente.";
			
			_utils.prepareResponse( res, false, message );	
		},
		_updateProduct = function(req, res){
			var message = "Producto modificado correctamente.";
			
			_utils.prepareResponse( res, false, message );			
		},
		_removeProduct = function(req, res){
			var product = products.filter(function(product){
				return product._id == req.params.id;
			}),
			message = "Producto " + product[0].name + " eliminado";
			
			_utils.prepareResponse( res, false, message );	
		};
		
		return {
			findAllProduct: _findAllProduct,
			getProduct: 	_getProduct,
			newProduct: 	_newProduct,
			updateProduct: 	_updateProduct,
			removeProduct: 	_removeProduct
		}
	};