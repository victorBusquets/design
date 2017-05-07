'use strict';

//File: presentacion/categoryController.js
	module.exports = function( CategoryDAO ) {
		var base = _basePath + '/category';

		_app.get   	( base, CategoryDAO.findAllCategory );
		_app.post  	( base, _jsonParser, CategoryDAO.newCategory );
		_app.get   	( base + '/:id', CategoryDAO.getCategory );
		_app.delete	( base + '/:id', CategoryDAO.removeCategory );
		_app.put   	( base, _jsonParser, CategoryDAO.updateCategory );
	};