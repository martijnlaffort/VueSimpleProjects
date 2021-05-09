const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizModel = new Schema({
    QuizName: {
        type: String,
        Required: 'Please enter'
    },
    QuizMaker: {
        type: String,
        Required: 'Please enter'
    }
});
module.exports = mongoose.model('QuizModel', QuizModel)