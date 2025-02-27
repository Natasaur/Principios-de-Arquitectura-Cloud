const express = require('express');
const passport = require('passport');

const router = express.Router();

// Ruta para iniciar sesión con Google
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Callback de Google después de la autenticación
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/success'); // Redirige a la página de éxito después de iniciar sesión
  }
);

module.exports = router;
