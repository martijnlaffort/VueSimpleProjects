import { createWebHistory, createRouter } from "vue-router";
import TipCalculator from "./components/TipCalculator";
import ToDoList from "./components/ToDoList";
import Quiz from "./components/Quiz";
import SingleQuiz from "./components/SingleQuiz";
import Home from "./components/Home";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/tipcalculator',
        name: 'TipCalculator',
        component: TipCalculator
    },
    {
        path: '/todolist',
        name: 'ToDoList',
        component: ToDoList
    },
    {
        path: '/quiz',
        name: 'Quiz',
        component: Quiz
    },
    {
        path: '/quiz/:quizId/singlequiz',
        name: 'SingleQuiz',
        props: true,
        component: SingleQuiz,
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
});