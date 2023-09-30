<script setup>
	import Navbar from "../components/Navbar.vue";
	import { useLoginStore } from "../stores/useLoginStore.js";
	const loginStore = useLoginStore();
</script>
<template>
	<Navbar />
	<main class="p-4 md:ml-64 h-auto pt-20">
		<div class="flex justify-center items-center mt-20">
			<div class="relative border border-gray-300 border-dotted p-10">
				<div class="absolute -top-6 left-[37%] bg-gray-100 rounded-full p-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-10 h-10 text-sky-500"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>
				</div>
				<h1>Name: {{ loginStore.actions.getUserData().username }}</h1>
				<h1>Email: {{ loginStore.actions.getUserData().email }}</h1>
			</div>
		</div>
	</main>
</template>
