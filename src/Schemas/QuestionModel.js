const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AnswerOptionSchema = require('./AnswerOptionModel')

const QuestionModel = new Schema({
    question: {
        type: String
    },
    answerOptions: {
        type: AnswerOptionSchema,
        default: undefined,
    }
});
module.exports = mongoose.model('QuestionSchema', QuestionModel)