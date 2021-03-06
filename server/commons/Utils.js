'use strict';

//File: api/commons/Utils

	var Utils = function(mongoose){
		this.generateInteger = function(min, max){
			return Math.floor(Math.random() * (max - min) + min);
		};

		this.printArguments = function(){
			console.log( "  - Arguments -> " +  this.getArguments() );
		},
		
		this.getArguments = function(){
			var validArguments = process.argv.slice( 2, process.argv.length );
			return validArguments.length == 0 ? 'No hay argumentos': validArguments.join(" ");
		},
		
		this.generateString = function(size){
			var string 	= "",
				values	= [	'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
							'q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G',
							'H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W',
							'X','Y','Z','1','2','3','4','5','6','7','8','9','0','-','Ç','_','='];

			for(var i=0; i<size; i++){
				string += values[ this.generateInteger(0,values.length) ];
			}
			return string;
		};

		this.setResponse = function(res, message, statusCode, jsonFormat){
			jsonFormat ?  res.status(statusCode).json(message) : res.status(statusCode).send(message)
		};
		
		//EXTRA DATA IS USED FOR INFO DATA EXTERNAL (PAGINATION FOR EXAMPLE)
		this.prepareResponse = function (res, error, data, extraData) {
			error ?
				this.setResponse(res, error, 500, true)
			:
				data == undefined || data.length == 0 ?
						this.setResponse(res, null, 204, true)
					:
						this.setResponse(res, { data:data, extraData:extraData }, 200, true)
		};
		
		this.nodeIsUp = function (onlyFrontOrMocks){
			console.log("+------------------------------------+");
			console.log("| Servidor Node JS en funcionamiento |");
			console.log("+------------------------------------+");	
			if(onlyFrontOrMocks){
				console.log("  - OnlyFront/mock mode.");
			}
		};
		
		this.tryMondoDBConnection = function(mongoose){
			mongoose.connect('mongodb://localhost/design', function(error){
				if(error){
					console.log('  - Error de conexion con MongoDB');
					console.log(error);
					throw error;
				}else{
				   console.log('  - Connection established with MongoDB');
				}
			});
		};
		this.newToDo = function(message){
			console.log("  - TO DO -> " + message);
		};
	};

	module.exports =new Utils();