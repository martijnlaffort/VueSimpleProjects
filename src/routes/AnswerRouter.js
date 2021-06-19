module.exports = function (app){
    //app is being given from server.js
    const answerController = require('../Controllers/AnswerController')

    //the routes for /api/answer without id
    app.route('/api/answer')
        .get(answerController.list_all_answers)
        .post(answerController.create_a_answer)

    //routes with the neccessary id
    app.route('/api/answer/:id')
        .get(answerController.read_a_answer)
        .delete(answerController.delete_a_answer)
        .put(answerController.update_a_answer)
}