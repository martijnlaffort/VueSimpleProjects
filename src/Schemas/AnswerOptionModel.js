const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSetModel = new Schema({
    optionNumber: {
        type: Number
    },
    answerBody: {
        type: String
    },
    isCorrectAnswer: {
        type: Boolean,
        default: false
    }
},
    {_id: false
});
module.exports = mongoose.model('QuestionSetSchema', QuestionSetModel)