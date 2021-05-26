const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CandidateQuesAnswerModel = new Schema({
    candidate: {
        type: Schema.Types.ObjectId,
        ref: 'Candidate'
    },
    questionSet: {
        type: Schema.Types.ObjectId,
        ref: 'QuestionSet'
    },
    questionAnswers: {
        type: [Number]
    },
    totalScore: {
        type: Number
    },
    isPassed: {
        type: Boolean,
        default: false
    }
});
CandidateQuesAnswerModel.pre('save', function updateTotalScore(next) {
    // update total score of the candidate here based on the correct questionAnswers and
    // questionSet.
    next();
});

CandidateQuesAnswerModel.pre('save', function updateIsPassed(next) {
    // update the isPassed based on the totalScore obtained by the candidate.
    next();
});
module.exports = mongoose.model('QuestionSetSchema', CandidateQuesAnswerModel)