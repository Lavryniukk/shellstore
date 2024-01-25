<script lang="ts">
	import Header from '../modules/Header.svelte';
	import '../app.css';
</script>

<div class="max-w-[1400px] mx-auto">
	<Header />
	<main><slot /></main>
</div>
