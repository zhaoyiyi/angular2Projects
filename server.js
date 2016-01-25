var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


// Express Server
const app = express(),
      port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, appStart);


// Mongodb

// TODO: put it in a seperate file
var cs = process.env.PROD_MONGODB || 'mongodb://localhost/hospital';
mongoose.connect(cs);
var db = mongoose.connection;
db.on('error', () => {console.log('db error');});
db.once('open', () => {console.log('db connect successful');});

var doctorSchema = new mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  email: String,
  department: String
},{
  collection: 'doctors'
});

var Doctors = mongoose.model('docotors', doctorSchema);
var apiRouter = express.Router();
apiRouter.route('/doctors')
  .get(sendDoctors)
  .post(createDoctor);

// TODO: make use of :id when updating/deleting, i.e.: double check
apiRouter.route('/doctors/:id')
  .get(sendDoctor)
  .put(updateDoctor)
  .delete(deleteDoctor);

// Routes
app.use(express.static(__dirname + '/public'));
app.use('/data', apiRouter);


app.get('*', (req, res) => {
  res.redirect('/');
} );





///// functions /////
function sendDoctors(req, res) {
  console.log('request dotcotrs');
  Doctors.find().exec( (err, data) =>{
    if(err) {
      console.log('database error', err);
    }else{
      res.json(data);
    }
  } );
}

function sendDoctor(req, res) {
  console.log(req.params.id);
  Doctors.findOne( {id: req.params.id}, (err, data) => {
    if(err) {
      console.log('database error', err);
    }else{
      res.json(data);
    }
  });
}

function createDoctor(req, res) {
  console.log(req.body);
  var doctor = new Doctors();
  doctor.first_name = req.body.first_name;
  doctor.last_name = req.body.last_name;
  doctor.email = req.body.email;
  doctor.department = req.body.department;
  doctor.save( err => {
    if(err){
      if(err.code === 11000){
        return res.json({success: false, message: 'duplicated entry'});
      }else{
        return res.json({success: false, message: err});
      }
    }else{
      res.json({success: true, message: 'created!'});
    }
  } );
}

function deleteDoctor(req, res) {
  Doctors.remove({id: req.params.id}, (err) => {
    if(err){
      console.log('error message: ', err);
      res.json({success: false, message: 'remove failed'});
    }else{
      res.json({success: true, message: 'remove success'});
    }
  });
}

function updateDoctor(req, res){
  Doctors.findOneAndUpdate({id: req.params.id},
    {$set: {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      department: req.body.department,
      id: req.body.id
      }
    },
    {new: true},
    (err, doctor) => {
      console.log('new value:',doctor);
      if(err){
        console.log('error message: ', err);
        res.json({success: false, message: 'update failed'});
      }else{
        res.json({success: true, message: 'updated'});
      }
  });
}

function appStart(){
  console.log('server starts');
}
