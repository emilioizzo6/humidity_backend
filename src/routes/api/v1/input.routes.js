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
    console.log(req.query, req.params.module_id)
    res.status(200)
});

router.get('/stay-alive', (req, res) => {
    res.send("Ok!")
})

router.get('/get-data', async (req, res) => {
    var values = await Hvalue.findAll({
        attributes: ['createdAt', 'value']
    })
    values = values.map(value => {
        val = value.dataValues.value
        date = value.dataValues.createdAt.toLocaleDateString()
        time = value.dataValues.createdAt.toLocaleTimeString()
        return {'value': val, 'date': date + ' ' + time}
    })
    
    res.send(values)
})


module.exports = router;
