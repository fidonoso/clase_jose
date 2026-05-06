import { Router } from 'express';
import { getPosts, getPostById, createNewPost, updateExistingPost, deleteExistingPost } from '../controllers/post.controller.js';

const router = Router();

router.get('/', getPosts);
router.get('/:id', getPostById);
router.post('/', createNewPost);
router.put('/:id', updateExistingPost);
router.delete('/:id', deleteExistingPost);

export default router;
