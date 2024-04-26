const express = require("express");

const {
  cardCreation,
  cardDeletion,
  cardDetails,
  cardList,
  cardListByUserId,
  cardUpdation,
} = require("../controllers/ccard.controller");

const router = express.Router();

router.route('/').get(cardList).post(cardCreation);
router.route('/:id').get(cardDetails).put(cardUpdation).delete(cardDeletion);
router.route('/user/:id').get(cardListByUserId);


module.exports = router;