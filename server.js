// Importing express module
const express = require('express');

const app = express();
const mysql = require('mysql2');
const dotenv = require('dotenv');

// Configuring env varibles
dotenv.config();

// db Configuration
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

db.connect((err) => {
    if(err){
        // if no connection
        return console.log('Error connecting to the database:', err)
    }
    // For successful connecting to database
    console.log('Successfully connected to mysql:', db.threadId)
})

// // Question 1 goes here
app.get('/patients', (req, res) => {
    const getPatients= 'SELECT patient_id, first_name, last_name, date_of_birth FROM patients'
    db.query(getPatients, (err, results) => {
        if(err){
            res.status(500).send('Error retriving patients details')
        } else {
            res.status(200).send(results)
        }
    });
});

// // Question 2 goes here
app.get('/providers', (req, res) => {
    const getPatients= 'SELECT first_name, last_name, provider_specialty FROM providers'
    db.query(getPatients, (err, results) => {
        if(err){
            res.status(500).send('Error retriving patients details')
        } else {
            res.status(200).send(results)
        }
    });
});

// // Question 3 goes here
app.get('/patients-fname', (req, res) => {
    const getPatients= 'SELECT first_name FROM patients'
    db.query(getPatients, (err, results) => {
        if(err){
            res.status(500).send('Error retriving patients details')
        } else {
            res.status(200).send(results)
        }
    });
});

// // Question 4 goes here
app.get('/provider-prof', (req, res) => {
    const getPatients= 'SELECT provider_specialty FROM providers'
    db.query(getPatients, (err, results) => {
        if(err){
            res.status(500).send('Error retriving patients details')
        } else {
            res.status(200).send(results)
        }
    });
});
   

// listen to the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is runnig on http://localhost:${PORT}`)
})
