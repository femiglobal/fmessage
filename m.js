
var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://innovecs-b193f.firebaseio.com"
});


var db = admin.database();
var ref = db.ref("messages");

if (process.argv[2]){
  ref.push(process.argv[2]).then(function (error){
  	console.log(process.argv[2]);
  	process.exit();
  });
  
  
}