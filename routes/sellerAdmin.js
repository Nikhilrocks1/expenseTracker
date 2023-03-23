const express = require('express');

const sellerController = require('../controllers/sellerAdmin');

const router = express.Router();

router.post('/user/add-product', sellerController.addProduct);

router.get('/user/get-products', sellerController.getProduct);

router.delete('/user/delete-product/:id', sellerController.deleteProduct);


module.exports = router;