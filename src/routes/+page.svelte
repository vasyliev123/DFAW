<script lang="ts">
	import MainInput from '$lib/components/ui/mainInpu/mainInput.svelte';
	import type { WordDefinitionResponse } from '$lib/types/WordDefinition';
	import WordDefinitionComp from '$lib/components/ui/WordDefinitionResponse/WordDefinitionComp.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { getWord } from '$lib/api/getWord';
	import Progress from '$lib/components/ui/progress/progress.svelte';
 	let word: WordDefinitionResponse = [];
	let wordToAdd: string = '';
	let addRes: Response;
	let buttonCLicked = false;
	let isLoading = false; 
	const onInput = async (e: Event) => {
		buttonCLicked = false;
		const _word = (e.target as HTMLInputElement).value;
		wordToAdd = _word;
		isLoading = true; 
		word = await getWord(_word);
		isLoading = false; 
	};

	const addWordToCollection = async () => {
		
		const defaultCollection = 1;
		addRes = await fetch(`/api/words?collectionId=1&word=${wordToAdd}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		buttonCLicked = true;
	};
</script>

 

<div class="justify-top relative flex min-h-screen flex-col items-center p-4">
	<div class="static m-1 mt-16 max-w-md bg-gradient-to-r from-blue-600 to-indigo-600 pb-[2px]">
		<MainInput
			on:input={onInput}
			placeholder="Type a word here"
			class="wordToAdd max-w-md  text-4xl"
		/>
	</div>

	<div class="flex flex-1 flex-col content-center justify-center">
		{#if isLoading}
			<div class="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-primary"></div>
		{:else if 'title' in word}
			<p class="mb-28 mt-10 flex-1 space-y-5 text-2xl font-bold text-destructive">
				{word.title}
			</p>
		{:else if word.length > 0}
			
			{#if buttonCLicked}
				<Button
				class="static m-auto my-5 max-w-sm px-12 py-6 text-2xl font-bold"
				on:click={addWordToCollection}
				variant="outline">
				Already in collection
				</Button>
			{:else}
				<Button
				class="static m-auto my-5 max-w-sm px-12 py-6 text-2xl font-bold"
				on:click={addWordToCollection}
				variant="outline">
				Add to collection
				</Button>
			{/if}
			<!-- {#if addRes}
				<p class="text-2xl font-bold text-primary">
					{addRes.status === 200 ? 'Word added' : 'Error'}
				</p>
			{/if} -->
			<WordDefinitionComp definition={word} />
		{/if}
	</div>
</div>
