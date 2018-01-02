
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var cors = require('cors');
var service = require('./routes/webservices');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(cors());
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");	
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});


// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

app.post('/createDatabase', service.CreateDatabase);
app.post('/createCollection', service.CreateCollection);
app.post('/insertDocuments', service.InsertDocuments);
app.post('/updateDocuments', service.UpdateDocuments);
app.post('/findDocuments', service.FindDocuments);
app.post('/queryDocuments', service.QueryDocuments);
app.post('/filterQueryDocuments', service.FilterQueryDocuments);
app.post('/aggregateDocuments', service.AggregateDocuments);
app.post('/deleteDocuments', service.DeleteDocuments);
app.post('/joinCollections', service.JoinCollections);
app.post('/dropCollection', service.DropCollection);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
