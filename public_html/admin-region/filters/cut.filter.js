(function(){
    'use strict';

    angular.module('design.filters.cut', [])
		.filter('cut', function(){
			var defaultTail = '...';
			return function (value, max, tail) {
				var numberType = (value ? value : '').constructor() === Number.prototype.constructor();
				value = value ? value.toString() : '';
				max = parseInt(max, 10);
				return !max || value.length <= max ? value : value.substr(0, max) + ( numberType ? '' : ' ' ) +(tail || defaultTail);
			};
		});
}());