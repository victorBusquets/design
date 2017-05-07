'use strict';

//File: api/commons/GlobalParams

	//DEFAULT GLOBAL PARAMS
	global._onlyFront 	= false;
	global._debuggMode 	= false;
	global._mocks 		= false;

	var prepareGlobalParams = function(params){
		//Firsts argument is 'node server' or 'nodemon server'
		var validParams = params.slice(2, params.length);
			
		validParams.forEach(function(param){
			global['_'+param] = true; 
		});			
	};
	
	prepareGlobalParams(process.argv);
	