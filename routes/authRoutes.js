const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { register, login } = require('../controllers/authController');

router.post(
  '/register',
  [
    check('email', 'Invalid email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
  ],
  register
);

router.post('/login', login);
module.exports = router;