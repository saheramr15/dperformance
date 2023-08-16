const express = require('express');
const app = express();
 
const ejs = require('ejs');
const path = require('path');
const port = 8080;

const nodemailer = require('nodemailer');
const mailgunTransport = require('nodemailer-mailgun-transport');
app.use(express.urlencoded({ extended: true }));
const contactRouter = require('./routers/contact');
///////////routers
// const addRouter = require('./routers/add');
// app.use('/signup', addRouter);
app.set('view engine', 'ejs');


    app.use(express.static(path.join(__dirname, 'public')));
    app.use('/contactus', contactRouter);
    app.get('/', (req, res) => {
        res.render('pages/index',{current:'/Aindex'});
    })
    app.get('/Aindex', (req, res) => {
        res.render('pages/Aindex',{current:'/'});
    })
    app.get('/contactus', (req, res) => {
        res.render('pages/contactus',{current:'/Acontactus'});
    })
    app.get('/Acontactus', (req, res) => {
        res.render('pages/Acontactus',{current:'/contactus'});
    })
    app.get('/ourservices', (req, res) => {
        res.render('pages/ourservices',{current:'/Aourservices'});
    })
    app.get('/Aourservices', (req, res) => {
        res.render('pages/Aourservices',{current:'/ourservices'});
    })
    app.get('/aboutus', (req, res) => {
        res.render('pages/aboutus',{current:'/Aaboutus'});
    })
    app.get('/Aaboutus', (req, res) => {
        res.render('pages/Aaboutus',{current:'/aboutus'});
    })
    app.get('/ourclients', (req, res) => {
        res.render('pages/ourclients',{current:'/Aourclients'});
    })
    app.get('/Aourclients', (req, res) => {
        res.render('pages/Aourclients',{current:'/ourclients'});
    })
   

    app.listen(port, () => {
        console.log('http://localhost:8080');
    });
    app.use((req, res) => {

        res.status(404).render('pages/404');
    })
    