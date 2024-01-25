<script lang="ts">
	type ButtonVariant = 'primary' | 'outline' | 'secondary' | 'ghost' | 'danger';
	type ButtonSize = 'sm' | 'md' | 'lg';
	export let variant: ButtonVariant = 'primary';
	export let disabled = false;

	export let size: ButtonSize = 'md';
	export let href: string | undefined = undefined;
</script>

{#if href}
	<a {href} class={`${variant} btn ${size}`}><slot /></a>
{:else}
	<button disabled class={` btn ${variant} ${size}`} on:click><slot /></button>
{/if}

<style>
	.btn {
		@apply outline-none inline-flex border-2 border-transparent box-border items-center transition-colors duration-100 justify-center gap-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sea-500;
	}
	.primary {
		@apply bg-sea-500 hover:opacity-90 text-sea-50;
	}
	.secondary {
		@apply bg-sea-100 text-sea-950;
	}

	.danger {
		@apply bg-red-500 text-sea-50;
	}
	.outline {
		@apply border-sea-500 hover:bg-sea-500 hover:text-sea-50 text-sea-950;
	}
	.ghost {
		@apply bg-transparent hover:bg-sea-100 text-sea-950;
	}

	.sm {
		@apply px-4 py-2 text-base;
	}
	.md {
		@apply px-6 py-3 text-lg;
	}
	.lg {
		@apply px-8 py-4 text-xl;
	}
</style>
