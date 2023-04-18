import { createRouter, createWebHashHistory } from "vue-router";
import Landing from "./components/Landing.vue";
import Dashboard from "./components/Dashboard.vue";
import Overview from "./components/overview/index.vue";
import BuzzTv from "./components/buzzTv/index.vue";
import BuzzFi from "./components/buzzFi/index.vue";
import BuzzEye from "./components/buzzEye/index.vue";

const router = createRouter({

    history: createWebHashHistory(),

    routes: [
        { path: '/', component: Landing },
        {
            path: '/dashboard',
            component: Dashboard,
            children: [
                {
                    path: '',
                    component: Overview,
                    name: 'overview',
                },
                {
                    path: 'tv',
                    component: BuzzTv,
                    name: 'buzztv'
                },
                {
                    path: 'fi',
                    component: BuzzFi,
                    name: 'buzzfi'
                },
                {
                    path: 'eye',
                    component: BuzzEye,
                    name: 'buzzeye'
                },
            ]
        },
    ]
});

export default router;