const express = require('express')
const app = express();
const db = require('./config/mongoose-connection');
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname ,"public")));

const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoute');
const bookingRoutes = require('./routes/bookingRoutes');


app.use('/api/auth', authRoutes);
app.use('/api/host', eventRoutes);
app.use('/api/booking', bookingRoutes)

app.listen('3000')