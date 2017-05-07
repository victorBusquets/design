'use strict';

//File: presentacion/productController.js
module.exports = function( ProductDAO ) {
	var base = _basePath + '/product';

	_app.get   	( base, ProductDAO.findAllProduct );
	_app.get   	( base + '/category/:category', ProductDAO.findProductByCategory );
	_app.post  	( base, _jsonParser, ProductDAO.newProduct );
	_app.get   	( base + '/:id', ProductDAO.getProduct );
	_app.delete	( base + '/:id', ProductDAO.removeProduct );
	_app.put   	( base, _jsonParser, ProductDAO.updateProduct );
};