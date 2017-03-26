var express = require('express');
var router = express.Router();
var mongodb= require('mongodb');
var jwt = require('express-jwt');


console.log("Welcome")
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// app.use(function (err, req, res, next) {
//   if (err.name === 'UnauthorizedError') {
//     res.status(401);
//     res.json({"message" : err.name + ": " + err.message});
//   }
// });
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/thelist',function(req,res){
// 	var MongoClient= mongodb.MongoClient;
// 	var url = 'mongodb://localhost:27017/yesy_1'
// 	MongoClient.connect(url,function(err,db){
// 		if(err){
// 			console.log('Unable to connect to the server',err);
// 		}
// 		else{
// 			console.log("Connection Established",url);
// 			var collection=db.collection('students');
// 			collection.find({}).toArray(function(err,result){
// 				if(err){
// 					res.send(err);
// 				}
// 				else if(result.length) {

// 				result.forEach(function(value){
// 				  console.log(value);
// 				});
// 				res.send('plz check the console');
//       } else {
//         res.send('No documents found');
//       }
//       //Close connection
//       db.close();
// 			})
// 		}
// 	})
// })

// router.get('/newstudent',function(req,res){
// 	res.render('studentList',{student_list_item:studentlist})
// });

module.exports = router;
