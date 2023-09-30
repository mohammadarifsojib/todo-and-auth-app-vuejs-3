<script setup>
	import { RouterLink } from "vue-router";
</script>
<template>
	<section class="bg-whit" style="background-color: #3085c3">
		<div class="px-4 mx-auto lg:px-6">
			<div class="mx-auto h-screen flex flex-col justify-center items-center">
				<h1
					class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600"
				>
					404
				</h1>
				<p
					class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl"
				>
					Something's missing.
				</p>
				<p class="mb-4 text-lg font-light text-white">
					Sorry, we can't find that page. You'll find lots to explore on the
					home page.
				</p>
				<RouterLink
					:to="{ name: 'home' }"
					class="inline-flex text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
					>Back to Homepage</RouterLink
				>
			</div>
		</div>
	</section>
</template>
