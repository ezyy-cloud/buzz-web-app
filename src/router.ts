import { createRouter, createWebHashHistory } from "vue-router";
import Landing from "./components/Landing.vue";

const router = createRouter({

    history: createWebHashHistory(),

    routes: [
        { path: '/', component: Landing },
    ]
});

export default router;