import { ref, reactive, computed } from "vue";
import { defineStore } from "pinia";
import { showAlert } from "../helpers/showAlert";

export const useTodoStore = defineStore("counter", () => {
	const todoItem = ref("");
	const todos = ref([]);

	function addTodo() {
		if (todoItem.value === "") {
			showAlert("error", "Todo is required!");
			return false;
		}
		const existingTodo = todos.value.find(
			(todo) => todo.title === todoItem.value
		);
		if (existingTodo) {
			showAlert("error", "Todo already exists!");
			return false;
		}
		todos.value.push({
			id: todos.value.length + 1,
			title: todoItem.value,
			completed: false,
		});
		todoItem.value = "";
	}

	// Actions for Todos
	const actions = reactive({
		activeTodos: computed(() => {
			return todos.value.filter((todo) => todo.completed === false);
		}),
		completeTodos: computed(() => {
			return todos.value.filter((todo) => todo.completed === true).reverse();
		}),
		removeTodo: (id) => {
			todos.value = todos.value.filter((todo) => todo.id !== id);
		},
		toggleTodo: (id) => {
			todos.value = todos.value.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			});
		},
	});

	return {
		todoItem,
		actions,
		addTodo,
	};
});
