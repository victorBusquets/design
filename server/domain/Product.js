'use strict';

//File: api/domain/Product
	module.exports = function(mongoose) {
		return mongoose.model( 'Product',
			mongoose.Schema({
				name:			{ type: String,  required: true, unique: true },
				ico:			{ type: String,  required: false },
				description:	{ type: String,  required: false },
				energy:			{ type: Number,  required: true },
				quantity:		{ type: Number,  required: true },
				protein:		{ type: Number,  required: true },
				fats: 			{ type: Number,  required: true },
				carbohydrates: 	{ type: Number,  required: true },
				category: 		{ type: mongoose.Schema.ObjectId,  required: true, ref: "Category" },
				lastModification:	{ type: Date, required: true }
			})
		);
	};