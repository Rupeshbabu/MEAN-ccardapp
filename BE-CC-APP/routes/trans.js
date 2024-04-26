const express = require('express');
const { createTrans, deleteTrans, getTrans, listTrans, updateTrans } = require('../controllers/trans.controller');

const router = express.Router();

router.route('/').get(listTrans).post(createTrans);
router.route('/:id').get(getTrans).put(updateTrans).delete(deleteTrans);


module.exports = router;