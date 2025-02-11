const Post = require('../models/Post'); 


exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'username');
    res.json(posts); 
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const post = new Post({ title, content, author: req.user.id });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
// Add updatePost, deletePost, getPostById similarly