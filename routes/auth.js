const express = require('express');
const passport = require('passport');
const router = express.Router();

// descr: Google authentication
// route: GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// descr: Google auth callback
// route: GET /auth/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/',
  }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

// descr: logout user
// route: /auth/logout

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
