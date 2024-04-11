<script>
	import Analytics from '$lib/customComponent/Analytics.svelte';
	import Footer from '$lib/customComponent/Footer.svelte';
	import Header from '$lib/customComponent/Header.svelte';
	import 'open-props/buttons';
	import 'open-props/normalize';
	import 'open-props/style';
	import '../app.css';
</script>

<Analytics />

<div class="layout">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
	}

	main {
		padding-block: var(--size-9);
	}

	@media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}
</style>
