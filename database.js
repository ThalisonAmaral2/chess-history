const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log('Successful connection');
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = connectDatabase;