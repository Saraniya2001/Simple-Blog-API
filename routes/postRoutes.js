const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const { getAllPosts, createPost, getPostById, updatePost, deletePost } = require('../controllers/postController');

router.get('/', protect, getAllPosts);
router.post('/', protect, createPost);
// Add other routes for GET/:id, PUT, DELETE
module.exports = router;