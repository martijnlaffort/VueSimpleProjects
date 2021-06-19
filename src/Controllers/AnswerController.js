const mongoose = require('mongoose')
AnswerModel = mongoose.model('AnswerOptionSchema')

//export called on all functions, these are later used in QuizRoute
exports.list_all_answers = function (req, res) {
    AnswerModel.find({}, function (err, answer) {
        if (err){
            res.send(err)
        }else{
            res.json(answer)
        }
    })
}
exports.create_a_answer = function (req, res) {
    let new_answer = new AnswerModel(req.body)
    new_answer.save(function(err, answer){
        if(err)
            res.send(err)
        res.json(answer)
    })
}
exports.read_a_answer = function (req, res) {
    AnswerModel.findById(req.params.id, function (err, answer) {
        if(err){
            res.send(err)
        }else {
            res.json(answer)
        }
    })
}
exports.update_a_answer = function (req, res) {
    AnswerModel.findByIdAndUpdate(req.params.id, req.body,(err, answer) => {
        if(err){
            res.send(err)
        }else {
            res.json(answer)
        }
    })
}
exports.delete_a_answer = function (req, res) {
    AnswerModel.findByIdAndDelete(req.params.id,function (err, answer) {
        if(err){
            res.send(err)
        }else{
            res.json(answer)
        }
    })
}
