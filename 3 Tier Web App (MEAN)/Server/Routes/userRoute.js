import express from 'express'

const router = express.Router();

import { addUser, signIn } from '../Controller/userController.js';

router.post('/signUp', addUser)
router.post('/signIn', signIn)

export default router