const express = require('express');
const connectDB = require('./config/db');
const ejs = require('ejs');

const app = express();

//Connect to database
connectDB();

const port = process.env.PORT || 3000;

app.use(express.json({extended: false}));

// Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/URL'));


app.listen(port, () => console.log(`Server running on PORT ${port}`))