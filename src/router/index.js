import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

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
        // meta: {
        //     needsAuth: true
        // }
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
        path: "/assessment/questions",
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
    {
        path: "/admin_dashboard",
        name: "admin_dashboard",
        component: () =>
            import ("../views/AdminDashboardView.vue"),
    },
    {
        path: "/admin_create_application",
        name: "admin_create_application",
        component: () =>
            import ("../views/AdminCreateApplication.vue"),
    },
    {
        path: "/admin_entries",
        name: "admin_entries",
        component: () =>
            import ("../views/AdminEntries.vue"),
    },
    {
        path: "/admin_compose_assessment",
        name: "admin_compose_assessment",
        component: () =>
            import ("../views/AdminComposeAssessment.vue"),
    },
    {
        path: "/admin_assessment_history",
        name: "admin_assessment_history",
        component: () =>
            import ("../views/AdminAssessmentHistory.vue"),
    },
    {
        path: "/admin_results",
        name: "admin_results",
        component: () =>
            import ("../views/AdminResults.vue"),
    },
    {
        path: "/admin_profiles_and_settings",
        name: "admin_profiles_and_settings",
        component: () =>
            import ("../views/AdminProfilesAndSettings.vue"),
    },
    {
        path: "/forgot_password",
        name: "forgotpassword_enter_email",
        component: () =>
            import ("../views/ForgotPasswordEmail.vue"),
    },
    {
        path: "/reset_password",
        name: "confirm_password",
        component: () =>
            import ("../views/ConfirmPassword.vue"),
    },
    {
        path: "/valtest",
        name: "valtest",
        component: () =>
            import ("../views/TestEmailValidation.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    if (localStorage.getItem("token") === null) {
        next({ name: 'login' });
    } else {
        next();
    }
})

export default router;