<script setup>
	import { RouterLink } from "vue-router";
	import { useLoginStore } from "../stores/useLoginStore";
	const loginStore = useLoginStore();
	import Sidebar from "./Sidebar.vue";
</script>
<template>
	<div class="antialiased bg-gray-50 dark:bg-gray-900">
		<nav
			class="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50"
		>
			<div class="flex flex-wrap justify-between items-center">
				<div class="flex justify-start items-center">
					<button
						data-drawer-target="drawer-navigation"
						data-drawer-toggle="drawer-navigation"
						aria-controls="drawer-navigation"
						class="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
					>
						<svg
							aria-hidden="true"
							class="w-6 h-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"
							></path>
						</svg>
						<svg
							aria-hidden="true"
							class="hidden w-6 h-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"
							></path>
						</svg>
						<span class="sr-only">Toggle sidebar</span>
					</button>
					<RouterLink
						:to="{ name: 'home' }"
						class="flex items-center justify-between mr-4 font-bold text-2xl"
					>
						Dashboard
					</RouterLink>
				</div>
				<div class="flex items-center lg:order-2 gap-3">
					<span class="text-sm italic"
						>Hi,
						<b>{{
							loginStore.actions.getUserData().username.toUpperCase()
						}}</b></span
					>
					<span
						@click="loginStore.actions.logout()"
						class="cursor-pointer bg-sky-500 border border-sky-500 rounded-lg py-1.5 px-3 text-sm text-white hover:bg-sky-400"
						>Sign out</span
					>
				</div>
			</div>
		</nav>
		<!-- Sidebar -->
		<Sidebar />
	</div>
</template>
