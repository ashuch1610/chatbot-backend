const mongoose = require('mongoose');
 
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://ashwini:KGMcd1997@cluster0.0bl2rm3.mongodb.net/chatbot');
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
 
module.exports = connectDB;
 