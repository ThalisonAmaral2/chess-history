require('dotenv').config();
const express = require('express');
const app = express();
const connectDatabase = require('./database');
const authRoutes = require('./routes/Auth')

connectDatabase();
//middlewares
app.use(express.json())

//routes
app.use('/api', authRoutes)

//Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at ${port}`)
})