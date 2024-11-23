import express from 'express';
import { createUser, getAllUsers, getUserById, updateUserById, deleteUserById } from '../controllers/UserConroller.js'; 

const MembersRouter = express.Router();

// Routes
MembersRouter.post('/users', createUser);
MembersRouter.get('/users', getAllUsers);
MembersRouter.get('/users/:id', getUserById);
MembersRouter.put('/users/:id', updateUserById);
MembersRouter.delete('/users/:id', deleteUserById);

export default MembersRouter;
