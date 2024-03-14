<script>
	import Header from '$lib/customComponent/Header.svelte';
	import '../app.pcss';
</script>

<div class="h-screen overflow-hidden bg-slate-50">
	<Header />
	<main class="mx-auto w-3/5 pt-12 text-gray-500">
		<slot />
	</main>
</div>
