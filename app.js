const express = require('express');
var app = express();
const path = require('path');
const md5=require('md5');
var mv = require('mv');  //its for chokidar
//var morgan = require('morgan'); //http request logger
const flash = require('connect-flash');
var mongoose=require('mongoose');
 var chokidar = require('chokidar');
var sysPath = require('path');
const fileUpload = require('express-fileupload');
var Song=require('./Models/Songs.js'); //including model

/*---------------------------

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url ="mongodb://Esfera:esfera456@ds133547.mlab.com:33547/esferasoft";

------------------------------*/
mongoose.connect('mongodb://monu:monu@ds261138.mlab.com:61138/apidb', { useMongoClient: true });  //live
mongoose.Promise = global.Promise;

var port =process.env.PORT || 8080;
var http=require('http').Server(app);
var io=require('socket.io')(http);
       http.listen(port);

var rn = require('random-number');
var gen = rn.generator({
  min:  0
, max:  100
, integer: true
})

var randomColor = require('randomcolor'); // import the script 
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const dotenv = require('dotenv');
var User=require('./Models/user.js');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'fav.png')));
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.engine('html',require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'client'))); //angular app
//app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

/*------routes Define---------------------*/
const routes = require('./routes/index.js');
const Users = require('./routes/user.js');
const Book = require('./routes/Book.js');

app.use('/', routes);
//app.use('/dashboard', Users);
app.use('/books', Book);

/*---------routes end---------------------*/

/*--chokiii---*/
/*var paths="/Users/macmini/Downloads/alldownloads"
var j=0;
chokidar.watch(paths, {usePolling: true,
  interval: 100,
  atomic:true }).on('all', function(event, file) {
    //console.log(event+' :'+file);

   if (path.extname(file) === '.mp3') {    
      var newfile=file.replace(path.basename(file), "");
        console.log("Mp3 path: " + newfile);
        console.log("event: " + event);
      
      if(event=="add" || event =="change" || event =="addDir") 
      {
         
            console.log("Mp3 basename: " + path.basename(file)) ;
             mv(file, "./public/audio/"+path.basename(file), {clobber: false},function(err) {
                console.log(err);
                if(err!=null)
                {
                      if(err['code']=='EEXIST')
                      {
                        console.log('already exist file');
                      }
                
               }
               else
                {
                   //db update 
                   console.log('db updating');
                   var newSong=new Song();
                      newSong.Title=path.basename(file);
                      newSong.filepath=path.basename(file);
                      newSong.Category='Normal';
                      newSong.save().then((results)=>{
                         console.log('db updated:'+results);
                      }).catch((err)=>{
                        console.log('db updated err:'+err);
                      });
                }
                
              });
         
              
        }
    }
}); */
  /*---chokiii end--*/

/*io.on('connection', function(socket){

     // console.log('socket started');
      socket.on('req_fetchinfo', function(room){
            socket.join(room);
            var value=gen();
             //var color=randomColor();
            io.to(room).emit('get_fetchinfo',value);
      });
});*/
        




