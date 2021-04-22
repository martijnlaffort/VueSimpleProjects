import { createWebHistory, createRouter } from "vue-router";
import TipCalculator from "./components/TipCalculator";
import ToDoList from "./components/ToDoList";
import Quiz from "./components/Quiz";

const routes = [
    {
        path: '/',
        name: 'Dashboard',
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
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
});