<script>
	import Footer from '$lib/customComponent/Footer.svelte';
	import '../app.pcss';
</script>

<div class="  pb-8">
	<main class="sm:w-3/5 mx-auto w-11/12 pt-12 text-gray-700">
		<slot />
	</main>
	<Footer />
</div>
