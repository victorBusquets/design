'use strict';

//File: persistance/mocks/CategoryDAO.js
	module.exports = function( categories, Securize ) {	
		
		var _findAllCategory = function (req, res) {
			var order = req.query.order || -1,
				orderBy = req.query.orderBy || "lastModification";

			categories = categories.sort( function(a,b){ return order == "asc" ? a[orderBy] > b[orderBy] :  b[orderBy] > a[orderBy] });
			
			_utils.setResponse( res, categories, 200, true );
		},
		_getCategory = function (req, res) {			
			var category = categories.filter(function(category){
				return category._id == req.params.id;
			});

			_utils.setResponse( res, category[0], 200, true );
		},
		_newCategory = function (req, res){
			var message = "Categoria creada correctamente.";
			
			_utils.setResponse( res, message, 200, true );	
		},
		_updateCategory = function(req, res){
			var message = "Categoria modificada correctamente.";
			
			_utils.setResponse( res, message, 200, true );			
		},
		_removeCategory = function(req, res){
			var category = categories.filter(function(category){
				return category._id == req.params.id;
			});
			message = "Categoria " + category[0].name + " eliminado";
			
			_utils.setResponse( res, message, 200, true );
		};
		
		return {
			findAllCategory: 	 _findAllCategory,
			getCategory: 	 	 _getCategory,
			newCategory: 		 _newCategory,
			updateCategory: 	 _updateCategory,
			removeCategory: 	 _removeCategory
		}
	};