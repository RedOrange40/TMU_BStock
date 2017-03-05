var express = require('express');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/local';
var cors = require('cors');

var Schema = mongoose.Schema({
    account: String,
    name: String,
    gender: String,
    password: String,
    tel: Number,
    email: String
});
var User = mongoose.model('User', Schema);

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(__dirname + '/index.html'));
app.use(cors());

app.post("/reg",function(req,res){
    var user=new User({
        account:req.body.account,
        name:req.body.name,
        gender:req.body.gender,
        password: req.body.password,
        tel:req.body.tel,
        email:req.body.email
    });
    console.log(req);
    user.save(function(){
              //res.send("Success");
              res.status(200).json(user);
              })
});

mongoose.connect(url);
app.listen(3000);
