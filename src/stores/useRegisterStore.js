import { defineStore } from "pinia";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { showAlert } from "../helpers/showAlert";
const useRegisterStore = defineStore("register", () => {
	// Define all Variables
	const route = useRouter();
	const vars = reactive({
		id: 1,
		username: "",
		email: "",
		password: "",
		cPassword: "",
		loggedIn: false,
		users: [],
		newUser: {},
	});

	// Functions

	// New user
	const newUser = (id) => {
		return {
			id: id ? id : vars.id,
			username: vars.username,
			email: vars.email,
			password: vars.password,
			loggedIn: vars.loggedIn,
		};
	};

	// Reset form fields
	const resetForm = () => {
		vars.username = "";
		vars.email = "";
		vars.password = "";
		vars.cPassword = "";
	};
	// Register
	const registerUser = () => {
		if (vars.username == "") {
			showAlert("error", "Name is required!");
		} else if (vars.email == "") {
			showAlert("error", "Email is required!");
		} else if (vars.email != vars.email.match("[a-z0-9]+@[a-z]+.[a-z]{2,3}")) {
			showAlert("error", "Invalid email address!");
		} else if (vars.password == "") {
			showAlert("error", "Password is required!");
		} else if (vars.password.length < 6) {
			showAlert("error", "Password must be at least 6 characters!");
		} else if (vars.cPassword == "") {
			showAlert("error", "Confirm password is required!");
		} else if (vars.password != vars.cPassword) {
			showAlert("error", "Passwords do not match!");
		} else {
			try {
				if (
					localStorage.getItem("users") &&
					JSON.parse(localStorage.getItem(`users`)).length > 0
				) {
					let existingUser = JSON.parse(localStorage.getItem(`users`));
					existingUser.filter((user) => {
						if (user.email === vars.email) {
							showAlert("error", "Email already exists!");
							return false;
						} else {
							let id = existingUser.length + 1;
							vars.id = id;
							existingUser.push({ ...newUser(id) });
							localStorage.setItem("users", JSON.stringify(existingUser));
							showAlert("success", "Registered Successfully!");
							resetForm();
							route.push({ name: "auth" });
						}
					});
				} else {
					vars.users.push({ ...newUser() });
					localStorage.setItem("users", JSON.stringify(vars.users));
					showAlert("success", "Registered Successfully!");
					resetForm();
					route.push({ name: "auth" });
				}
			} catch (error) {
				showAlert("error", "Something Went Wrong. Try Again!");
			}
		}
	};

	// Return all Variables

	return {
		vars,
		registerUser,
	};
});

export { useRegisterStore };
