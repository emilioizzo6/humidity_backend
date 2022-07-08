const express = require('express');
const router = express.Router();
const url = require('url');

const db = require('../../../models'); 

const { Hvalue } = db;

async function createValue(data, module_id) {
    // console.log(data, module_id);
    await Hvalue.create({ value: data, module_id: module_id });
}

router.post('/:module_id', (req, res) => {
    createValue(req.query.data, req.params.module_id)
    console.log(req.query.data, req.params.module_id)
    res.status(200)
});


module.exports = router;