import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index.vue';
import MaxDoctor from './views/MaxDoctor.vue';

Vue.use(Router);

const router = new Router({
    mode: 'hash',
    routes: [{
            path: '/',
            component: Index
        },
        {
            path: '/maxdoctor',
            name: 'MaxDoctor',
            component: MaxDoctor,
            meta: {
                title: 'MaxDoctor'
            }
        }
    ]
});

router.beforeEach((to, from, next) => {

    let title = to.meta.title;

    if (title === undefined)
        title = "Avaliação Leonardo J. Menezes";

    document.title = title;

    next();

});

export default router;