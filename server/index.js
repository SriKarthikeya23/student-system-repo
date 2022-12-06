const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const mqtt = require('mqtt')

app.use(cors());
app.use(express.json());

// const db = mysql.createPool({
//     connectionLimit: 10,
//     host: process.env.MYSQL_HOST || "localhost",
//     user: process.env.MYSQL_USER || "root",
//     password: process.env.MYSQL_PASSWORD || "password",
//     database: process.env.MYSQL_DATABASE || "erpsystem",
//   });

const db = mysql.createConnection({
    user : 'root',
    host : 'localhost',
    password : '190040608',
    database : 'erpsystem',
    insecureAuth : true
});

app.post('/enter/attendance', (req, res) => {
    console.log(req.body);
    const rfid = req.body.rfid;
    db.query('insert into recordEnter (rfidEnter) values (?)', 
    [rfid], 
    (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send("values inserted");
        }
    });
});

app.post('/create',(req, response) => {

    console.log(req.body);

    const idno = req.body.idno
    const rfidno = req.body.rfidno
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const age = req.body.age
    const gender = req.body.gender
    const dept = req.body.dept
    const year = req.body.year

    db.query('insert into studentdetails (idno, rfidno, firstname, lastname, age, gender, dept, year) values (?,?,?,?,?,?,?,?)', 
    [idno, rfidno, firstname, lastname, age, gender, dept, year], 
    (err, result) => {
        if(err) {
            console.log(err)
        } else {
            response.send("values inserted");
        }
    });
});

app.get('/get/details/all', (req, res) => {
    db.query('select * from studentdetails', (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get('/get/details/:id', (req, res) => {
    const id = req.params.id;
    db.query('select * from studentdetails where idno = ?', [id], (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

var rfid = mqtt.connect('mqtt://35.234.254.79:1883');

rfid.on('connect', function() {
    rfid.subscribe('rfid/enter');
    console.log('rfid/enter is subscribed successfully');
});
rfid.on('message', function(topic, message) {
    var rfid = message.toString();
    console.log('data received : '+rfid);
    db.query('insert into recordEnter (rfidEnter) values (?)', 
    [rfid], 
    (err, result) => {
        if(err) {
            console.log(err)
        } else {
            console.log('done inserted');
        }
    }); 
});

app.listen(3001, () => {
    console.log("You server is running on port 3001");
});