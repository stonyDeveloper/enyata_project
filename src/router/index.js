import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import ("../views/LogIn.vue"),
    },
    {
        path: "/signup",
        name: "signup",
        component: () =>
            import ("../views/SignUp.vue"),
    },
    {
        path: "/application",
        name: "application",
        component: () =>
            import ("../views/ApplicationView.vue"),
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: () =>
            import ("../views/DashboardView.vue"),
    },
    {
        path: "/assessment",
        name: "assessment",
        component: () =>
            import ("../views/AssessmentView.vue"),
    },
    {
        path: "/forgotpassword",
        name: "forgotpassword",
        component: () =>
            import ("../views/ForgotPasswordView.vue"),
    },
    {
        path: "/questions",
        name: "questions",
        component: () =>
            import ("../views/QuestionsView.vue"),
    },
    {
        path: "/assessment_completed",
        name: "assessment_completed",
        component: () =>
            import ("../views/AssessmentCompletedView.vue"),
    },
    {
        path: "/admin_login",
        name: "admin_login",
        component: () =>
            import ("../views/AdminLoginView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router