const express = require('express');
const router = express.Router();

const db = require('../../../models'); 

const { Hvalue } = db;

async function createUser(data) {
    await Hvalue.create({ value: data });
}

router.post('/', (req, res) => {
    createUser(req.query.data)
    console.log(req.query.data)
});


module.exports = router;