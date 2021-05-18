const mongoose = require('mongoose')
QuizModel = mongoose.model('QuizSchema')

//export called on all functions, these are later used in QuizRoute
exports.list_all_quizzes = function (req, res) {
    QuizModel.find({}, function (err, quiz) {
        if (err){
            res.send(err)
        }else{
            res.json(quiz)
        }
    })
}
exports.create_a_quiz = function (req, res) {
    let new_quiz = new QuizModel(req.body)
    new_quiz.save(function(err, quiz){
        if(err)
            res.send(err)
        res.json(quiz)
    })
}
exports.read_a_quiz = function (req, res) {
    QuizModel.findById(req.params.id, function (err, quiz) {
        if(err){
            res.send(err)
        }else {
            res.json(quiz)
        }
    })
}
exports.update_a_quiz = function (req, res) {
    QuizModel.findByIdAndUpdate(req.params.id, req.body,(err, quiz) => {
        if(err){
            res.send(err)
        }else {
            res.json(quiz)
        }
    })
}
exports.delete_a_quiz = function (req, res) {
    QuizModel.findByIdAndDelete(req.params.id,function (err, quiz) {
        if(err){
            res.send(err)
        }else{
            res.json(quiz)
        }
    })
}
