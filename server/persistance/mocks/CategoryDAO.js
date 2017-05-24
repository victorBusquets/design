'use strict';

//File: persistance/mocks/CategoryDAO.js
	module.exports = function( categories, Securize ) {	
		
		var _findAllCategory = function (req, res) {
			var order = req.query.order || -1,
				orderBy = req.query.orderBy || "lastModification",
				page = parseInt(req.query.page) || 0,
				resultsPerPage = parseInt(req.query.resultsPerPage) || false,
				extraData = {
					paginationInfo:{
						currentPage: page,
						resultsPerPage: resultsPerPage,	
						totalRecords: categories.length,
						totalPages: parseInt( Math.ceil( categories.length/resultsPerPage ) ) || 1
					}
				};
			
			//SORT FILTER
			categories = categories.sort( function(a,b){ return order == "asc" ? a[orderBy] > b[orderBy] :  b[orderBy] > a[orderBy] });
			//PAGINATION
			categories = resultsPerPage ? categories.slice( resultsPerPage * page, resultsPerPage * page + resultsPerPage ) : categories;
			
			_utils.prepareResponse( res, false, categories, extraData );
		},
		_getCategory = function (req, res) {			
			var category = categories.filter(function(category){
				return category._id == req.params.id;
			})[0];

			_utils.prepareResponse( res, false, category );
		},
		_newCategory = function (req, res){
			var message = "Categoria creada correctamente.";
			
			_utils.prepareResponse( res, false, message );
		},
		_updateCategory = function(req, res){
			var message = "Categoria modificada correctamente.";
			
			_utils.prepareResponse( res, false, message );			
		},
		_removeCategory = function(req, res){
			var category = categories.filter(function(category){
				return category._id == req.params.id;
			});
			message = "Categoria " + category[0].name + " eliminado";
			
			_utils.prepareResponse( res, false, message );
		};
		
		return {
			findAllCategory: 	 _findAllCategory,
			getCategory: 	 	 _getCategory,
			newCategory: 		 _newCategory,
			updateCategory: 	 _updateCategory,
			removeCategory: 	 _removeCategory
		}
	};