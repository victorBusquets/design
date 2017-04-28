'use strict';

var serverPort 	= process.env.PORT || 2000,
	express 	= require('express'),
	app 		= express(),
	server 		= app.listen(serverPort),
	path 		= require('path');

app.use(express.static(path.join(__dirname, 'public_html')));

console.log("+------------------------------------+");
console.log("| Servidor Node JS en funcionamiento |");
console.log("+------------------------------------+");