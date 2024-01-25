<script lang="ts">
	import Button from '../UI/Button.svelte';
	let isAuthorized = false;
</script>

<header class="flex justify-between p-2 jw-full h-14">
	<nav class="flex gap-4">
		<figure class="h-full border-2 rounded-full border-sea-500 bg-sea-700 aspect-square"></figure>
		<ul class="flex items-center h-full gap-2 text-base font-regular text-sea-950">
			<Button size="sm" variant="ghost" href="/">Home</Button>
			<Button size="sm" variant="ghost" href="/catalog">Catalog</Button>
			<Button size="sm" variant="ghost" href="/about">About us</Button>
		</ul>
	</nav>
	<section class="flex items-center">
		{#if isAuthorized}
			<Button size="sm">Sign out</Button>
		{:else}
			<div class="flex items-center h-full gap-2">
				<Button size="sm">Create account</Button>
				<Button size="sm" variant="ghost">Sign in</Button>
			</div>
		{/if}
	</section>
</header>
