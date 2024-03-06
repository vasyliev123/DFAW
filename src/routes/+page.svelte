<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { getWord } from '$lib/api/getWord';
	import type { WordDefinitionResponse } from '$lib/types/WordDefinition';
	import WordDefinitionComp from '$lib/components/ui/WordDefinitionResponse/WordDefinitionComp.svelte';
	let word: WordDefinitionResponse = [];

	const onInput = async (e: Event) => {
		word = await getWord((e.target as HTMLInputElement).value);
	};
</script>

<div class="relative flex min-h-screen flex-col items-center justify-center p-4">

	<Input on:input={onInput} placeholder="Type word here" class="static max-w-md mt-32 text-4xl" />
    {#if 'title' in word && 'message' in word && 'resolution' in word}
      <p class="flex-1 space-y-5 mt-10 mb-28 text-2xl font-bold text-destructive">No definition found</p>
    {:else}
		<WordDefinitionComp definition={word} />
	{/if}
</div>
