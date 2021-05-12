const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizModel = new Schema({
    quizName: {
        type: String,
        Required: 'Please enter'
    },
    quizMaker: {
        type: String,
        Required: 'Please enter'
    }
});
module.exports = mongoose.model('QuizSchema', QuizModel)