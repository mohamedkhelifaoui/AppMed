const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// 🔹 Inscription (Register)
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "L'utilisateur existe déjà" });

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel utilisateur
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Utilisateur créé avec succès" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔹 Connexion (Login)
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Vérifier si l'utilisateur existe
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Utilisateur non trouvé" });

    // Vérifier le mot de passe
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Identifiants incorrects" });

    // Générer le token JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.cookie("token", token, { httpOnly: true, secure: false }).json({ message: "Connexion réussie", userId: user._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔹 Déconnexion (Logout)
router.post('/logout', (req, res) => {
  res.clearCookie("token").json({ message: "Déconnexion réussie" });
});

// 🔹 Vérifier l'authentification
router.get('/me', async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Non authentifié" });

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(verified.id).select('-password');

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Token invalide" });
  }
});

module.exports = router;
