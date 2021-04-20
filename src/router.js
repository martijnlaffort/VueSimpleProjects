import { createWebHistory, createRouter } from "vue-router";
import TipCalculator from "./components/TipCalculator";
import ToDoList from "./components/ToDoList";

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
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
});