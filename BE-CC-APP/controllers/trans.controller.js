const Trans = require("../models/trans");

exports.createTrans = async (req, res) => {
  try {
    const userId = req.body.userId;
    const cardId = req.body.cardId;
    if (!userId) {
      return res.status(400).json({
        status: "fail",
        message: "User Id required!!",
      });
    }
    if (!cardId) {
      return res.status(400).json({
        status: "fail",
        message: "Card Id required!!",
      });
    }
    const newTrans = new Trans({
      userId: userId,
      cardId: cardId,
      merchant: req.body.merchant,
      amount: req.body.amount,
      transactionDate: req.body.transactionDate,
      dueData: req.body.dueData,
      advPay: req.body.advPay,
    });
    await newTrans.save();
    return res.status(201).json({
      status: "success",
      message: "Transaction Added!!!",
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: "Card was not updated!!!",
      error: error,
    });
  }
};

exports.listTrans = async (req, res) => {
  try {
    const trans = await Trans.find();
    return res.status(201).json({
      status: "success",
      data: {
        trans,
      },
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: "Card was not updated!!!",
      error: error,
    });
  }
};

exports.updateTrans = async (req, res) => {
  try {
    const transId = req.params.id;
    if (!transId) {
      return res.status(400).json({
        status: "fail",
        message: "Transaction not found!!",
      });
    }
    await Trans.findByIdAndUpdate(transId, req.body, {
      new: true,
      runValidators: true,
    });
    return res.status(200).json({
      status: "success",
      message: "Transaction has been updated!!!",
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: "Transaction was not updated!!!",
      error: error,
    });
  }
};

exports.getTrans = async (req, res) => {
    try {
        const transId = req.params.id;
        if (!transId) {
            return res.status(400).json({
              status: "fail",
              message: "Transaction not found!!",
            });
          }
        const trans = await Trans.findById(transId);
        return res.status(200).json({
            status: 'success',
            data: {
                trans
            }
        });
        
    } catch (error) {
        return res.status(400).json({
            status: "fail",
            message: "Transaction was not found!!!",
            error: error,
          }); 
    }
};

exports.deleteTrans = async (req, res) => {
  try {
    const transId = req.params.id;
    await Trans.findByIdAndDelete(transId);
    return res.status(200).json({
      status: "success",
      message: "Transaction has been deleted!!!",
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: "Transaction was not deleted!!!",
      error: error,
    });
  }
};
