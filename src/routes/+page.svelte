<script lang="ts">
	import { MainInput } from '$lib/components/ui/MainInput';
	import { getWord } from '$lib/api/getWord';
	import type { WordDefinitionResponse } from '$lib/types/WordDefinition';
	import WordDefinitionComp from '$lib/components/ui/WordDefinitionResponse/WordDefinitionComp.svelte';
	let word: WordDefinitionResponse = [];

	const onInput = async (e: Event) => {
		word = await getWord((e.target as HTMLInputElement).value);
	};
</script>

<div class="justify-top relative flex min-h-screen flex-col items-center p-4">

	<MainInput on:input={onInput} placeholder="Type word here" class="" />
	<div class="flex flex-1 flex-col content-center justify-center">
		{#if 'title' in word}
		<p class="flex-1 space-y-5 mt-10 mb-28 text-2xl font-bold text-destructive">No definition found</p>
		{:else}
			<WordDefinitionComp definition={word} />
		{/if}
	</div>
</div>
