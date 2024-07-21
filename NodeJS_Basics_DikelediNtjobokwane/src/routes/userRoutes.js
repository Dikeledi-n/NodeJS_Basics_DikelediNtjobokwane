const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes
router.post('/', userController.addUser);
router.get('/', userController.getUsers);

module.exports = router;