<script setup>
	import { ref } from "vue";
	import { RouterLink } from "vue-router";
	import { useLoginStore } from "../stores/useLoginStore";
	const loginStore = useLoginStore();

	const singInimg = ref(`./signin-image.jpg`);
	const iconClass = () => {
		return `w-4 h-4 text-gray-800 dark:text-white absolute left-0 top-1`;
	};
</script>

<template>
	<div
		style="background-color: #3085c3"
		class="h-screen flex justify-center items-center"
	>
		<div
			class="container mx-auto w-8/12 lg:w-6/12 bg-white shadow-lg rounded-lg p-5 lg:p-20 text-center"
		>
			<div class="grid grid-cols-1 md:grid-cols-2 align-middle items-center">
				<div class="lg:p-5 text-center space-y-5 order-2 md:order-1">
					<img
						class="hidden md:block w-full"
						:src="singInimg"
						alt="Sign Up Image"
					/>
					<div>
						<RouterLink
							:to="{ name: 'register' }"
							class="underline underline-offset-4 decoration-sky-500 hover:underline-offset-8 transition-all"
							>Create an Account</RouterLink
						>
					</div>
				</div>
				<form
					@submit.prevent="loginStore.actions.loginUser"
					class="lg:pl-10 space-y-10 order-1 md:order-2 text-left"
				>
					<h1 class="text-4xl font-bold mb-10">Sign In</h1>
					<div class="relative">
						<input
							class="relative w-full pl-6 border-b border-b-gray-200 focus:outline-none focus:placeholder:text-black focus:border-b-gray-500 placeholder:text-gray-400 placeholder:text-sm"
							type="text"
							placeholder="Your Email"
							v-model="loginStore.user.email"
						/>
						<svg
							:class="iconClass()"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 16"
						>
							<path
								d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
							/>
							<path
								d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
							/>
						</svg>
					</div>
					<div class="relative">
						<input
							class="relative w-full pl-6 border-b border-b-gray-200 focus:outline-none focus:placeholder:text-black focus:border-b-gray-500 placeholder:text-gray-400 placeholder:text-sm"
							type="password"
							placeholder="Password"
							v-model="loginStore.user.password"
						/>
						<svg
							:class="iconClass()"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 16 20"
						>
							<path
								d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z"
							/>
						</svg>
					</div>
					<button
						type="submit"
						class="bg-sky-500 border border-sky-500 rounded-lg py-2 px-5 text-white hover:bg-transparent hover:text-sky-500 transition-all"
					>
						Login
					</button>
				</form>
			</div>
			<RouterLink
				:to="{ name: 'home' }"
				class="inline-block mt-5 md:mt-0 text-center border border-sky-500 rounded-lg text-sm px-3 py-1.5 text-sky-500 hover:bg-sky-500 hover:text-white transition-all duration-200"
				>Home</RouterLink
			>
		</div>
	</div>
</template>
