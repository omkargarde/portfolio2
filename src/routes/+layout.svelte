<script>
	import Footer from '$lib/customComponent/Footer.svelte';
	import Header from '$lib/customComponent/Header.svelte';
	import '../app.pcss';
</script>

<div class=" bg-slate-50 pb-8">
	<Header />
	<main class="mx-auto w-3/5 pt-12 text-gray-700">
		<slot />
	</main>
	<Footer />
</div>
