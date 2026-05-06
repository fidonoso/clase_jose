import { Router } from 'express';
import { getUsers, getUserById, createNewUser, updateExistingUser, deleteExistingUser } from '../controllers/users.controller.js';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createNewUser);
router.put('/:id', updateExistingUser);
router.delete('/:id', deleteExistingUser);

export default router;
