const mongoose = require('mongoose')
QuestionModel = mongoose.model('QuestionSchema')

//export called on all functions, these are later used in QuizRoute
exports.list_all_questions = function (req, res) {
    QuestionModel.find({}, function (err, question) {
        if (err){
            res.send(err)
        }else{
            res.json(question)
        }
    })
}
exports.create_a_question = function (req, res) {
    let new_question = new QuestionModel(req.body)
    new_question.save(function(err, question){
        if(err)
            res.send(err)
        res.json(question)
    })
}
exports.read_a_question = function (req, res) {
    QuestionModel.findById(req.params.id, function (err, question) {
        if(err){
            res.send(err)
        }else {
            res.json(question)
        }
    })
}
exports.update_a_question = function (req, res) {
    QuestionModel.findByIdAndUpdate(req.params.id, req.body,(err, question) => {
        if(err){
            res.send(err)
        }else {
            res.json(question)
        }
    })
}
exports.delete_a_question = function (req, res) {
    QuestionModel.findByIdAndDelete(req.params.id,function (err, question) {
        if(err){
            res.send(err)
        }else{
            res.json(question)
        }
    })
}
