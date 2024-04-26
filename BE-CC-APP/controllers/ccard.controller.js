const Card = require("../models/ccard");

exports.cardCreation = async (req, res) => {
  try {
    const userId = req.body.userId;
    if (!userId) {
      return res.status(404).json({
        status: "fail",
        message: "User not valid",
      });
    }
    const newCard = new Card({
      userId: userId,
      nickName: req.body.nickName,
      cardHolderName: req.body.cardHolderName,
      cardNumber: req.body.cardNumber,
      bankName: req.body.bankName,
      expiryDate: req.body.expiryDate,
    });
    await newCard.save();
    return res.status(201).json({
      status: "success",
      message: "Card was added!!!",
      //   data: newCard
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: "Card was not added. Somthing went wrong!!!",
      error: error,
    });
  }
};

exports.cardUpdation = async (req, res) => {
  try {
    const cardId = req.params.id;
    const card = await Card.findByIdAndUpdate(cardId, req.body, {
      new: true,
      runValidators: true,
    });

    return res.status(200).json({
      status: "success",
      message: "Card was updated!!!",
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: "Card was not updated!!!",
      error: error,
    });
  }
};

exports.cardDetails = async (req, res) => {
  try {
    const cardId = req.params.id
    const card = await Card.findById(cardId);
    return res.status(200).json({
        status: 'success',
        data: {
            card
        }
    });
    
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: "Card was not valid!!!",
      error: error,
    });
  }
};

exports.cardList = async (req, res) => {
  try {
    const cards = await Card.find();
    return res.status(200).json({
      status: "success",
      data: {
        cards
      }
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: "Somthing went wrong!!!",
      error: error,
    });
  }
};

exports.cardListByUserId = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      res.status(400).json({
        status: "fail",
        message: "Card was not found",
      });
    }
    const cards = await Card.find({userId: userId});
    return res.status(200).json({
      status: "success",
      data:{
        cards
      }
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: "No Data",
      error: error,
    });
  }
};

exports.cardDeletion = async (req, res) => {
  try {
    const cardId = req.params.id;
    if(!cardId){
        res.status(400).json({
            status:'fail',
            message:'Card was not found'
        });
    }
    await Card.findByIdAndDelete(cardId);
    return res.status(204).json({
      status: "success",
      message: "Card was deleted!!!",
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: "Card was not deleted!!!",
      error: error,
    });
  }
};
