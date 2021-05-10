const mongoose = require('mongoose')
QuizModel = mongoose.model('QuizModel')

list_all_quizzes = function (req, res) {
    QuizModel.find({}, function (err, exercise) {
        if (err){
            res.send(err)
        }else{
            res.json(exercise)
        }
    })
}
create_a_quiz = function (req, res) {
    let new_exercise = new QuizModel(req.body)
    new_exercise.save(function(err, exercise){
        if(err)
            res.send(err)
        res.json(exercise)

    })
}
read_a_quiz = function (req, res) {
    QuizModel.findById(req.params.id, function (err, exercise) {
        if(err){
            res.send(err)
        }else {
            res.json(exercise)
        }
    })
}
update_a_quiz = function (req, res) {
    QuizModel.updateOne(req.params.id, function (err, exercise) {
        if(err){
            res.send(err)
        }else {
            res.json(exercise)
        }
    })
}
delete_a_quiz = function (req, res) {
    QuizModel.deleteOne(req.params.id, function (err, exercise) {
        if(err){
            res.send(err)
        }else {
            res.json(exercise)
        }
    })
}

module.exports = function (app){

    app.route('/api/quiz')
        .get(list_all_quizzes)
        .post(create_a_quiz)
        .put(update_a_quiz)


    app.route('/api/quiz/:quizId')
        .get(read_a_quiz)
        .delete(delete_a_quiz)
    //let hier op de url zonder /
}
