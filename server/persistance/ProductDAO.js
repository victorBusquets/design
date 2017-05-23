'use strict';

//File: persistance/ProductDAO
	module.exports = function( ProductModel, CategoryModel, Securize ) {
		var _findAllProduct = function (req, res) {	
			var order = (req.query.order=='asc' || req.query.order=='desc') ? req.query.order : -1,
				orderBy = req.query.orderBy || "lastModification",
				page = parseInt(req.query.page) || 0,
				resultsPerPage = parseInt(req.query.resultsPerPage) || false,
				orderFilter = {};
				
			orderFilter[orderBy] = order;

			ProductModel.find().sort( orderFilter ).skip( page * resultsPerPage ).limit( resultsPerPage ).exec(function (error, products) {
				CategoryModel.populate(products, {path: "category"}, function(error, products){
					_utils.prepareResponse( res, error, products );
				});
			});
		},
		_getProduct = function (req, res) {
			ProductModel.findById(req.params.id ,function(error, product){
				CategoryModel.populate(product, {path: "category"}, function(error, product){
					_utils.prepareResponse( res, error, product );
				});
			})
		},
		_newProduct = function (req, res){
			var productModel = new ProductModel({
				name:			req.body.name,
				ico:			req.body.ico,
				description:	req.body.description,
				energy:			req.body.energy,
				quantity:		req.body.quantity,
				protein:		req.body.protein,
				fats:			req.body.fats,
				carbohydrates:	req.body.carbohydrates,
				category:  		req.body.category._id,
				lastModification: new Date()
			});

			productModel.save(function(error, document){
				var message = "Product created.";
				_utils.prepareResponse( res, error, message );
			});
		},
		_updateProduct = function(req, res){
			ProductModel.findById(req.body._id ,function(error, product){
				if(error){
					_utils.setResponse(res, error, 500, true);
				}else{
					product.name =			req.body.name;
					product.description =	req.body.description;
					product.energy =		req.body.energy;
					product.quantity =		req.body.quantity;
					product.protein =		req.body.protein;
					product.fats =			req.body.fats;
					product.carbohydrates =	req.body.carbohydrates;
					product.category =  	req.body.category._id;
					product.lastModification =  new Date();
					
					product.save(function(error, documento){
						var message = "Product saved.";
						_utils.prepareResponse( res, error, message );
					});
				}
			});
		},
		_removeProduct = function(req, res){
			ProductModel.remove({_id: req.params.id}, function(error){
				var message = "Product removed.";
				_utils.prepareResponse( res, error, message );
			});
		};
		
		return {
			findAllProduct: _findAllProduct,
			getProduct: 	_getProduct,
			newProduct: 	_newProduct,
			updateProduct: 	_updateProduct,
			removeProduct: 	_removeProduct
		}
	};