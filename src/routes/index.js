const express = require('express');

const router = express.Router();

const input = require('./api/v1/input.routes')


router.use('/', input);

module.exports = router;