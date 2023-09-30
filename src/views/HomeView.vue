<script setup>
	import { RouterLink } from "vue-router";
	const btnClass = () => {
		return `text-white text-xl md:text-3xl font-bold border border-blue-500 rounded-lg px-5 md:px-10 py-4 md:py-8 hover:bg-transparent hover:text-black transition-all duration-200`;
	};
</script>

<template>
	<div
		class="container mx-auto px-10 h-screen flex flex-col lg:flex-row justify-center items-center gap-20"
		style="background-color: #3085c3"
	>
		<RouterLink
			:to="{ name: 'todo' }"
			style="background-color: #5cd2e6"
			:class="btnClass()"
			>Todo App</RouterLink
		>
		<RouterLink
			:to="{ name: 'auth' }"
			style="background-color: #5cd2e6"
			:class="btnClass()"
			>Authentication App</RouterLink
		>
	</div>
</template>
