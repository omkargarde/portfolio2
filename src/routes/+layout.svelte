<script>
	import Footer from '$lib/customComponent/Footer.svelte';
	import Header from '$lib/customComponent/Header.svelte';
	import '../app.pcss';
</script>

<div class="  pb-8">
	<!-- <Header /> -->
	<main class="sm:w-3/5 sm:mx-auto mx-8 w-11/12 pt-12 text-gray-700">
		<slot />
	</main>
	<Footer />
</div>
