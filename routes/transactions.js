const express = require('express');
const router = express.Router();
const { getTransactions, addTransactions, deleteTransactions } = require('../controllers/transactions');
const auth = require('../middleware/auths');

router
    .route('/')
    .get(getTransactions)
    .post(auth, addTransactions);
router
    .route('/:id')
    .delete(auth, deleteTransactions);
    
module.exports = router;