import {createApp} from "vue";
import VueRouter from "vue-router";
import TipCalculator from "./components/TipCalculator";

createApp(VueRouter);
export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: TipCalculator
        }
    ]

})