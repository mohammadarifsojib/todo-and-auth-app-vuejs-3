import Swal from "sweetalert2";
import { useTodoStore } from "../stores/todos";

// Show alert functions
const showAlert = (icon = "success", title = "Signed in successfully") => {
	const Toast = Swal.mixin({
		toast: true,
		position: "top-end",
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener("mouseenter", Swal.stopTimer);
			toast.addEventListener("mouseleave", Swal.resumeTimer);
		},
	});

	Toast.fire({
		icon,
		title,
	});
};

// Show Confirm function
const showConfirmation = (id) => {
	Swal.fire({
		title: "Do you want to save the changes?",
		showDenyButton: true,
		showCancelButton: true,
		confirmButtonText: "Delete!",
		denyButtonText: `Don't delete`,
	}).then((result) => {
		if (result.isConfirmed) {
			const todoStore = useTodoStore();
			todoStore.actions.removeTodo(id);
			Swal.fire("Saved!", "", "Task is deleted!");
		} else if (result.isDenied) {
			Swal.fire("Your task is not deleted!", "", "info");
		}
	});
};

export { showAlert, showConfirmation };
