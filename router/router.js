import express from 'express';
import { createUser, getDetails } from '../controllers/user.js';
import { createExpense, getExpense } from '../controllers/expense.js';
const router = express.Router();

router.get('/details/:email', getDetails);
router.post('/create', createUser);
router.get('/expense/:email', getExpense);
router.post('/create/:email', createExpense);
export default router;