require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
const db = require('./db');


const PORT = process.env.PORT || 3000;




const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

// Use the routers
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);



app.listen(PORT, () =>{
    console.log('listening on port 3000');
})