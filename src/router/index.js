import { createRouter, createWebHistory } from "vue-router";
const HomeView = () => import("../views/HomeView.vue");
const TodoView = () => import("../views/TodoView.vue");
const AuthView = () => import("../views/AuthView.vue");
const RegisterView = () => import("../components/Register.vue");
const DashboardView = () => import("../views/DashboardView.vue");
const Profile = () => import("../views/UserProfileView.vue");
const NotFound = () => import("../views/NotFound.vue");
import { useLoginStore } from "../stores/useLoginStore";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/todo",
			name: "todo",
			component: TodoView,
		},
		{
			path: "/auth",
			name: "auth",
			component: AuthView,
			meta: { requiresAuth: false },
		},
		{
			path: "/register",
			name: "register",
			component: RegisterView,
			meta: { requiresAuth: false },
		},
		{
			path: "/dashboard",
			name: "dashboard",
			component: DashboardView,
			meta: { requiresAuth: true },
		},
		{
			path: "/profile",
			name: "profile",
			component: Profile,
			meta: {
				requiresAuth: true,
			},
		},
		{ path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
	],
});

router.beforeEach((to, from, next) => {
	const loginStore = useLoginStore();
	if (to.meta.requiresAuth && !loginStore.actions.getLoggedInUser()) {
		next({ name: "auth" });
	}
	if (!to.meta.requiresAuth && loginStore.actions.getLoggedInUser()) {
		next({ name: "dashboard" });
	}
	next();
});

export default router;
