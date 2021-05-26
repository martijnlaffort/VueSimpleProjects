module.exports = function (app){
    //app is being given from server.js
    const questionController = require('../Controllers/QuestionController')

    //the routes for /api/question without id
    app.route('/api/question')
        .get(questionController.list_all_questions)
        .post(questionController.create_a_question)

    //routes with the neccessary id
    app.route('/api/question/:id')
        .get(questionController.read_a_question)
        .delete(questionController.delete_a_question)
        .put(questionController.update_a_question)
}