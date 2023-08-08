import { createRouter, createWebHashHistory } from "vue-router";

import { supabase } from "./supabase";

import Landing from "./components/Landing.vue";
import Dashboard from "./components/dashboard/Index.vue";
import Overview from "./components/overview/index.vue";

import Profile from './components/account/Profile.vue';
import Monetization from './components/account/Monetization.vue';

import Auth from './components/auth/Index.vue';

import BuzzTv from "./components/buzzTv/index.vue";
import OwnedDisplays from "./components/buzzTv/ownedDisplays.vue";
import Display from "./components/buzzTv/display.vue";

import BuzzFi from "./components/buzzFi/index.vue";
import OwnedNodes from './components/buzzFi/ownedNodes.vue';
import Node from "./components/buzzFi/node.vue";

import BuzzEye from "./components/buzzEye/index.vue";
import OwnedEyes from './components/buzzEye/ownedEyes.vue';
import Eye from "./components/buzzEye/eye.vue";

const router = createRouter({

    history: createWebHashHistory(),

    routes: [
        { path: '/', component: Landing, name: 'landing' },
        {
            path: '/auth',
            component: Auth,
            name: 'auth'
        },
        {
            path: '/dashboard',
            component: Dashboard,
            meta: {
                requiresAuth: true,
            },
            children: [
                {
                    path: 'profile',
                    component: Profile,
                    name: 'profile',
                },
                {
                    path: 'monetization',
                    component: Monetization,
                    name: 'monetization',
                },
                {
                    path: '',
                    component: Overview,
                    name: 'overview'
                },
                {
                    path: 'tv',
                    component: BuzzTv,
                    name: 'buzztv',
                    children: [
                        {
                            path: '',
                            component: OwnedDisplays,
                            name: 'ownedDisplays',
                        },
                        {
                            path: 'display/:id',
                            component: Display,
                            name: 'viewDisplay',
                        },
                    ],
                },
                {
                    path: 'fi',
                    component: BuzzFi,
                    name: 'buzzfi',
                    children: [
                        {
                            path: '',
                            component: OwnedNodes,
                            name: 'ownedNodes',
                        },
                        {
                            path: 'node/:id',
                            component: Node,
                            name: 'viewNode',
                        },
                    ],
                },
                {
                    path: 'eye',
                    component: BuzzEye,
                    name: 'buzzeye',
                    children: [
                        {
                            path: '',
                            component: OwnedEyes,
                            name: 'ownedEyes',
                        },
                        {
                            path: 'eye/:id',
                            component: Eye,
                            name: 'viewEye',
                        },
                    ],
                },
            ]
        },
    ]
});

router.beforeEach(async (to, _from, next) => {

    // get current user info
    let currentUser;

    const { data: { session } } = await supabase.auth.getSession();
    
    if (session?.user) {
        currentUser = session?.user;
    };
    
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) next({ name: 'auth' });

    else if (!requiresAuth && currentUser) next({ name: 'overview' });

    else next();
})

export default router;