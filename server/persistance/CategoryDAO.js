'use strict';

//File: persistance/CategoryDAO
	module.exports = function( CategoryModel, ProductModel, Securize ) {	
		var _findAllCategory = function (req, res) {
			var order = (req.query.order=='asc' || req.query.order=='desc') ? req.query.order : -1,
				orderBy = req.query.orderBy || "lastModification",
				page = parseInt(req.query.page) || 0,
				resultsPerPage = parseInt(req.query.resultsPerPage) || false,
				orderFilter = {};
				
			orderFilter[orderBy] = order;
							
			CategoryModel.find().sort( orderFilter ).skip( page * resultsPerPage ).limit( resultsPerPage ).exec( function (error, categories) {
				_utils.prepareResponse( res, error, categories );
			});
		},
		_getCategory = function (req, res) {
			CategoryModel.findById(req.params.id ,function(error, category){
				_utils.prepareResponse( res, error, category );
			})
		},
		_newCategory = function (req, res){
			var categoryModel = new CategoryModel({
				name: req.body.name,
				lastModification: new Date()
			});

			categoryModel.save(function(error, document){
				var message = "Category created.";
				_utils.prepareResponse( res, error, message );
			});
		},
		_updateCategory = function(req, res){
			CategoryModel.findById(req.body._id ,function(error, category){
				if(error){
					_utils.setResponse(res, error, 500, true);
				}else{
					category.name = req.body.name;
					category.lastModification =  new Date();

					category.save(function(error, documento){
						var message = "Category saved.";
						_utils.prepareResponse( res, error, message );
					});
				}
			});
		},
		_removeCategory = function(req, res){
			ProductModel.find({category: req.params.id}).count(function(error, count){
				if( count===0 ){				
					CategoryModel.remove({_id: req.params.id}, function(error){
						var message = "Category removed.";
						_utils.prepareResponse( res, error, message );
					});	
				}else{
					var message = "Category with products.";
					_utils.setResponse(res, message, 409, true)
				}
			});
		};
		
		return {
			findAllCategory: 	 _findAllCategory,
			getCategory: 	 	 _getCategory,
			newCategory: 		 _newCategory,
			updateCategory: 	 _updateCategory,
			removeCategory: 	 _removeCategory
		}
	};