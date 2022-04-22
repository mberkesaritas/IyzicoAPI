const router = require('express').Router();
const paymentContoller = require('./iyzicoModel')

router.post('/iyzico' , paymentContoller.iyzico);

module.exports = router;