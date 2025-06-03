const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getPosts, createPost, updatePost, deletePost, addComment, getPostById, deleteComment} = require('../controllers/postController');

router.get('/', getPosts);
router.post('/', auth, createPost);
router.put('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);

router.post('/:id/comments',auth, addComment);
router.get('/:id', getPostById);
router.delete(':postId/comments/:commentId', auth, deleteComment);


module.exports = router;
