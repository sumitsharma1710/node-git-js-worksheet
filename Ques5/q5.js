const express = require('express');
const mongoose = require('mongoose');
const productroutes = require('./routes/productroutes.js');

const app = express();
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/node_express_api')
.then(() => console.log('MongoDB connected...'))
.catch((err) => console.log(err));

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productroutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
