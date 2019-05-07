var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Test = require('./model');
var app = express();

const db = 'mongodb://localhost/api';

mongoose.Promise = global.Promise;
 d=mongoose.connect(db)
.then(() => { 
    console.log("mongo db connected");
})
.catch(err => { 
    console.error('App starting error:', err);
    process.exit(1);
});

/*
const open = () => {
    let connection = mongoose.connection;
    mongoose.Promise = global.Promise;
     mongoose.connect(db);
     mongoose.connection.on('open', () => {
               console.log('We have connected to mongodb');
           });
    return connection;
   };*/
    
  // open();


module.exports = app;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) =>
  res.sendFile('index.html',{root:'.'}));
 app.post('/insert-data', (req, res) => {
    let newTest = Test();
		newTest.name = req.body.name;
        newTest.password = req.body.password;
        newTest.email = req.body.email;
    newTest.save((err, msg) => {
      if(err) {
        res.send('error');
      } else {
        console.log(msg);
        res.send(msg);
      }
    })
  });
  
  
  app.listen(8000, () =>
  console.log('app listening on port ' + 8000));
