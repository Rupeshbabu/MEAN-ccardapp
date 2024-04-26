const { mongoose, Schema } = require('mongoose');

const transSchema = mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    cardId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Card'
    },
    merchant:{
        type: String
    },
    amount: {
        type: Number,
        required: true
    },
    transactionDate: {
        type: Date
    },
    dueData: {
        type: Date,
        required: true
    },
    advPay: {
        type: Boolean,
        default: false
    }
}, { timestamps : true });


module.exports = mongoose.model('Trans', transSchema);