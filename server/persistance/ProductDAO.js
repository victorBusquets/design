'use strict';

//File: persistance/ProductDAO
	module.exports = function( ProductModel, CategoryModel, Securize ) {
		var _findAllProduct = function (req, res) {
			ProductModel.find(function (error, products) {
				CategoryModel.populate(products, {path: "category"}, function(error, products){
					_utils.prepareResponse(error, products, res);
				});
			});
		},
		_findProductByCategory = function(req, res){
			ProductModel.find({category:req.params.category}, function (error, products) {
				CategoryModel.populate(products, {path: "category"}, function(error, products){
					_utils.prepareResponse(error, products, res);
				});
			})
		},
		_getProduct = function (req, res) {
			ProductModel.findById(req.params.id ,function(error, product){
				CategoryModel.populate(product, {path: "category"}, function(error, product){
					_utils.prepareResponse(error, product, res);
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
				category:  		req.body.category._id
			});

			productModel.save(function(error, document){
				var productMessage = "Producto " + req.body.name + " creado correctamente.";
				_utils.prepareResponse(error, productMessage, res);
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

					product.save(function(error, documento){
						var productMessage = "Producto modificado correctamente.";
						_utils.prepareResponse(error, productMessage, res);
					});
				}
			});
		},
		_removeProduct = function(req, res){
			ProductModel.remove({_id: req.params.id}, function(error){
				_utils.prepareResponse(error, "Producto eliminado correctamente.", res);
			});
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