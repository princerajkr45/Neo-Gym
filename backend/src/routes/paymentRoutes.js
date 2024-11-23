import express from 'express';
import {
    createPayment,
    getAllPayment,
    getPaymentsForMember,   
} from '../controllers/paymentController.js';

const router = express.Router();

// Route to create a new payment
router.post('/', createPayment);

// Route to get app payment for all memebers

router.get('/',getAllPayment)

// Route to get all payments for a specific member
router.get('/:memberId', getPaymentsForMember);


export default router;
