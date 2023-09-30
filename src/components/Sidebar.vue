<script setup>
	import { RouterLink } from "vue-router";
</script>
<template>
	<!-- Sidebar -->

	<aside
		class="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
		aria-label="Sidenav"
		id="drawer-navigation"
	>
		<div class="overflow-y-auto py-5 px-3 h-full bg-white">
			<ul class="mt-2 space-y-2 border-gray-200">
				<li>
					<RouterLink
						:to="{ name: 'profile' }"
						class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
						:class="$route.path == '/profile' ? 'bg-gray-100' : ''"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
						<span class="ml-3">Profile</span>
					</RouterLink>
				</li>
			</ul>
		</div>
	</aside>
</template>
