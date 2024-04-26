const  {mongoose, Schema} = require('mongoose');

const cardSchema = mongoose.Schema({
    userId:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    nickName: {
        type: String,
    },
    cardHolderName: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true,
        unique: true
    },
    bankName: {
        type: String,
        required: true
    },
    expiryDate: {
        type: Date,
        required: true
    },
    cardLimit:{
        type:Number
    }
}, { timestamps: true });

module.exports = mongoose.model('Card', cardSchema);
