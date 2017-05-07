'use strict';

//File: requiredFiles.js
module.exports = function(mongoose) {
	
	var mocks = 	(_mocks || _onlyFront) ? 'mocks/' : '',
		Securize = 	require('./commons/Securize');
	
	if(!(_mocks || _onlyFront)){
		_utils.tryMondoDBConnection(mongoose);
	}
		
	var CategoryModel = require('./domain/'+mocks+'Category')( mongoose ),
		ProductModel =	require('./domain/'+mocks+'Product')( mongoose );
		
	var CategoryDAO = 	require('./persistance/'+mocks+'CategoryDAO')( CategoryModel, ProductModel, Securize ),
		ProductDAO =	require('./persistance/'+mocks+'ProductDAO')( ProductModel, CategoryModel, Securize );
	
	require('./presentacion/productController')( ProductDAO );		
	require('./presentacion/categoryController')( CategoryDAO );
}