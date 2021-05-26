const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const QuestionSchema = require('./QuestionModel')

const QuestionSetModel = new Schema({
    QuestionSet: {
        type: [QuestionSchema]
    }
});
module.exports = mongoose.model('QuestionSetSchema', QuestionSetModel)