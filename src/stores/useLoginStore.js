import { reactive } from "vue";
import { useRouter } from "vue-router";
import { defineStore } from "pinia";
import { showAlert } from "../helpers/showAlert";

const useLoginStore = defineStore("loginStore", () => {
	const route = useRouter();
	const user = reactive({
		email: "",
		password: "",
	});

	const actions = reactive({
		loginUser: () => {
			if (user.email == "") {
				showAlert("error", "Email is required!");
			} else if (
				user.email != user.email.match("[a-z0-9]+@[a-z]+.[a-z]{2,3}")
			) {
				showAlert("error", "Invalid email address!");
			} else if (user.password == "") {
				showAlert("error", "Password is required!");
			} else {
				try {
					if (
						localStorage.getItem("users") &&
						JSON.parse(localStorage.getItem("users")).length > 0
					) {
						const users = JSON.parse(localStorage.getItem("users"));
						users.filter((exuser) => {
							if (
								exuser.email == user.email &&
								exuser.password == user.password
							) {
								exuser.loggedIn = true;
								localStorage.setItem("loggedInUser", JSON.stringify(exuser));
								showAlert("success", "Logged in successfully!");
								route.push({ name: "dashboard" });
							} else {
								showAlert("error", "Invalid email or password!");
							}
						});
					} else {
						showAlert("error", "Invalid email or password!");
					}
				} catch (error) {
					showAlert("error", "Something went wrong!");
				}
			}
		},
		logout: () => {
			localStorage.removeItem("loggedInUser");
			showAlert("success", "Logged out successfully!");
			actions.resetForm();
			route.push({ name: "auth" });
		},
		getUserData: () => {
			if (localStorage.getItem("loggedInUser")) {
				return JSON.parse(localStorage.getItem("loggedInUser"));
			}
		},
		getLoggedInUser: () => {
			return JSON.parse(localStorage.getItem("loggedInUser"))?.loggedIn;
		},
		resetForm: () => {
			user.email = "";
			user.password = "";
		},
		passwordMatch: (password) => {
			const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
			if (loggedUser.password == password) {
				return true;
			} else {
				showAlert("error", "Password not match!");
			}
		},
	});

	return { user, actions };
});

export { useLoginStore };
