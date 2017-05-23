'use strict';

//File: api/domain/Category
	module.exports = function(mongoose) {
		return mongoose.model( 'Category',
			mongoose.Schema({
				name:	{ type: String,  required: true, unique: true },
				lastModification:	{ type: Date, required: true }
			})
		);
	};