<script lang="ts">
	import SidePanel from '$lib/components/ui/SidePanel.svelte';
	import type { PageData } from './$types';
	import LookUpWords from '$lib/components/ui/LookUpWords.svelte';
	import { isPracticeMode } from '$lib/stores/SuperStore';
	export let data: PageData;

	// const addWord = async (e: Event) => {
	// 	console.log('word', words);
	// 	const wordAdded = await fetch('/api/words', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify(word[0] as Word)
	// 	});
	// 	if (wordAdded.ok) {
	// 		isPopupOpen = true;
	// 	}
	// };
</script>

<SidePanel collections={data.collections} />

{#if !isPracticeMode}
	<p>Practice mode</p>
{:else}
	<LookUpWords />
{/if}
