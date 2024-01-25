<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<!-- programmatic dispatching -->

<button on:click> <slot /> </button>
