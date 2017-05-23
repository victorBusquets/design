'use strict';

//File: persistance/CategoryDAO
	module.exports = function( CategoryModel, ProductModel, Securize ) {	
		var _findAllCategory = function (req, res) {
			var order = (req.query.order=='asc' || req.query.order=='desc') ? req.query.order : -1,
				orderBy = req.query.orderBy || "lastModification",
				orderFilter = {};
				
			orderFilter[orderBy] = order;
							
			CategoryModel.find().sort( orderFilter ).exec( function (error, categories) {
				_utils.prepareResponse(error, categories, res);
			});
		},
		_getCategory = function (req, res) {
			CategoryModel.findById(req.params.id ,function(error, category){
				_utils.prepareResponse(error, category, res);
			})
		},
		_newCategory = function (req, res){
			var categoryModel = new CategoryModel({
				name: req.body.name,
				lastModification: new Date()
			});

			categoryModel.save(function(error, document){
				var categoryMessage = "Categoria " + req.body.name + " creada correctamente.";
				_utils.prepareResponse(error, categoryMessage, res);
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
						var categoryMessage = "Categoria modificada correctamente.";
						_utils.prepareResponse(error, categoryMessage, res);
					});
				}
			});
		},
		_removeCategory = function(req, res){
			ProductModel.find({category: req.params.id}).count(function(error, count){
				if( count===0 ){				
					CategoryModel.remove({_id: req.params.id}, function(error){
						_utils.prepareResponse(error, "Categoria eliminada correctamente.", res);
					});	
				}else{
					_utils.setResponse(res, 'Categoria con productos asociados.', 409, true)
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