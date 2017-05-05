(function(){
    'use strict';

    angular.module('design.filters.cut', [])
		.filter('cut', function(){
			var defaultTail = ' ...';
			return function (value, max, tail) {
				max = parseInt(max, 10);
				return !value ? '' : !max || value.length <= max ? value : value.substr(0, max) + (tail || defaultTail);
			};
		});
}());