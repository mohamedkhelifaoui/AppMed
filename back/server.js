const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' })); // Ajuste selon ton frontend
app.use(cookieParser());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB Connecté"))
  .catch(err => console.log(err));

// Routes
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`🚀 Serveur lancé sur le port ${PORT}`));
