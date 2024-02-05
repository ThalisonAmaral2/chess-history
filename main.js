require('dotenv').config();
const express = require('express');
const app = express();
const connectDatabase = require('./database');
const logger = require('./middlewares/logger');
const corsMiddleware = require('./middlewares/cors.js');
const authRoutes = require('./routes/Auth')
const playerRoutes = require("./routes/Player")

connectDatabase();
//middlewares
app.use(corsMiddleware)
app.use(express.json())
//routes
app.use('/api', authRoutes)
app.use('/api', playerRoutes)

//Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
})