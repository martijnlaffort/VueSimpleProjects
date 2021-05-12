module.exports = function (app){
    //app is being given from server.js
    const quizController = require('../Controllers/QuizController')

    //the routes for /api/quiz without id
    app.route('/api/quiz')
        .get(quizController.list_all_quizzes)
        .post(quizController.create_a_quiz)

    //routes with the neccessary id
    app.route('/api/quiz/:quizId')
        .get(quizController.read_a_quiz)
        .put(quizController.update_a_quiz)
        .delete(quizController.delete_a_quiz)
}