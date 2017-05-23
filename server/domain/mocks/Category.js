'use strict';

//File: api/domain/mocks/Category
	module.exports = function() {
		var categories = [
			{
				_id: 1,
				name: 'Arroz y pasta',
				lastModification: "2017-05-22T14:28:10.933Z"
			},
			{
				_id: 2,
				name: 'Carne',
				lastModification: "2017-05-21T14:28:10.933Z"
			},
			{
				_id: 3,
				name: 'Embutido',
				lastModification: "2017-05-20T14:28:10.933Z"
			},
			{
				_id: 4,
				name: 'Pescado',
				lastModification: "2017-05-19T14:28:10.933Z"
			},
			{
				_id: 5,
				name: 'Marisco',
				lastModification: "2017-05-12T14:28:10.933Z"
			},
			{
				_id: 6,
				name: 'Lacteos',
				lastModification: "2017-05-11T14:28:10.933Z"
			}
		];
		
		return categories;
	};