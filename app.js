const express = require('express');
const connectDB = require('./config/db');
//const chatRoutes = require('./routes/chat');
const cors = require('cors');
 
const app = express();
connectDB();
 
app.use(cors());
app.use(express.json());
//app.use('/api/chat', chatRoutes);
 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))