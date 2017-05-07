'use strict';

//File: server

	var serverPort 	= process.env.PORT || 2112,
		http 		= require('http'),
		express 	= require('express'),
		app 		= express(),
		server 		= app.listen(serverPort),
		path 		= require('path'),
		mongoose 	= require('mongoose'),
		bodyParser 	= require('body-parser');
		
	//RequiredFiles
	require('./server/commons/GlobalParams');
		
	//Setting global acces	
	global._app 	   = app;
	global._jsonParser = bodyParser.json();
	global._basePath   = '/api';
	global._utils = require('./server/commons/Utils');

	require('./server/requiredFiles')(mongoose);

	app.use(express.static(path.join(__dirname, 'public_html')));

	_utils.nodeIsUp(_onlyFront || _mocks);
	_utils.printArguments();