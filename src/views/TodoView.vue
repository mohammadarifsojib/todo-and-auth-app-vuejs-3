<script setup>
	import { RouterLink } from "vue-router";
	import { showConfirmation } from "../helpers/showAlert";
	import { useTodoStore } from "../stores/todos";
	const todoStore = useTodoStore();
</script>
<template>
	<div
		class="container mx-auto px-10 h-screen flex flex-col justify-start items-center gap-10 mt-10"
	>
		<RouterLink
			:to="{ name: 'home' }"
			class="bg-sky-500 border border-sky-500 rounded-lg text-sm px-3 py-1.5 text-white hover:bg-transparent hover:text-sky-500 transition-all duration-200"
			>Home</RouterLink
		>
		<div
			class="border border-gray-200 p-5 md:p-10 w-full md:w-[70%] lg:w-[50%] flex flex-row justify-center items-center gap-5"
		>
			<input
				class="w-full border border-gray-800 px-3 py-1 text-black rounded-md focus:outline-none placeholder:text-sm placeholder:text-gray-500"
				type="text"
				placeholder="Add Todo Item"
				v-model="todoStore.todoItem"
			/>
			<button
				@click="todoStore.addTodo()"
				class="bg-blue-500 px-3 py-1 text-white rounded-md"
			>
				Save
			</button>
		</div>
		<!-- Todo Items -->
		<div
			v-if="todoStore.actions.activeTodos.length > 0"
			class="border border-gray-200 p-5 md:p-10 w-full md:w-[70%] lg:w-[50%]"
		>
			<div class="mb-5">
				<h1 class="text-xl md:text-3xl">Todo Items</h1>
				<hr />
			</div>
			<div
				class="flex gap-2 mb-3"
				v-for="todo in todoStore.actions.activeTodos"
				:key="todo.id"
			>
				<input
					type="checkbox"
					:id="`checkbox-${todo.id}`"
					@change="todoStore.actions.toggleTodo(todo.id)"
					:value="`${todo.completed}`"
				/>
				<label :for="`checkbox-${todo.id}`"> {{ todo.title }} </label>
				<button
					class="ml-auto text-sm border border-sky-500 rounded-sm px-2 py-1 hover:bg-sky-500 hover:text-white hover:transition-all duration-200"
					@click="showConfirmation(todo.id)"
				>
					Delete
				</button>
			</div>
		</div>
		<!-- No Todo Items -->
		<div
			v-else
			class="border border-gray-200 p-5 md:p-10 w-full md:w-[70%] lg:w-[50%] text-center"
		>
			<h1 class="text-xl md:text-3xl">No Todo Items Added Yet!</h1>
		</div>

		<!-- Complete Todo Items -->
		<div
			v-if="todoStore.actions.completeTodos.length > 0"
			class="border border-gray-200 p-5 md:p-10 w-full md:w-[70%] lg:w-[50%]"
		>
			<div class="mb-5">
				<h1 class="text-xl md:text-3xl">Completed Todo Items</h1>
				<hr />
			</div>
			<div
				class="flex gap-2 mb-3"
				v-for="todo in todoStore.actions.completeTodos"
				:key="todo.id"
			>
				<input
					type="checkbox"
					:id="`checkbox-${todo.id}`"
					@change="todoStore.actions.toggleTodo(todo.id)"
					:value="`${todo.completed}`"
					:checked="todo.completed"
				/>
				<label
					:for="`checkbox-${todo.id}`"
					:class="`${todo.completed ? 'line-through decoration-red-500' : ''}`"
				>
					{{ todo.title }}
				</label>
				<button
					class="ml-auto text-sm border border-sky-500 rounded-sm px-2 py-1 hover:bg-sky-500 hover:text-white hover:transition-all duration-200"
					@click="showConfirmation(todo.id)"
				>
					Delete
				</button>
			</div>
		</div>
	</div>
</template>
