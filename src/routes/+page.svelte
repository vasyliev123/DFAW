<script lang="ts">
	import MainInput from '$lib/components/ui/mainInpu/mainInput.svelte';
	import { getWord } from '$lib/api/getWord';
	import type { WordDefinitionResponse } from '$lib/types/WordDefinition';
	import WordDefinitionComp from '$lib/components/ui/WordDefinitionResponse/WordDefinitionComp.svelte';
	let word: WordDefinitionResponse = [];

	const onInput = async (e: Event) => {
		word = await getWord((e.target as HTMLInputElement).value);
	};
</script>

<div class="relative flex min-h-screen flex-col items-center justify-center p-4 ">
		<div class="static mt-28 max-w-md bg-gradient-to-r from-blue-600 to-indigo-600 pb-[2px] m-1">
			<MainInput on:input={onInput} placeholder="Type a word here" class=" max-w-md  text-4xl" />
		</div>
	
    {#if 'title' in word && 'message' in word && 'resolution' in word}
      <p class="flex-1 space-y-5 mt-10 mb-28 text-2xl font-bold text-destructive">No definition found</p>
    {:else}
		<WordDefinitionComp definition={word} />
	{/if}
</div>
