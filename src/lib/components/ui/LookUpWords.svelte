<script lang="ts">
	import { MainInput } from '$lib/components/ui/MainInput';
    import WordDefinitionComp from '$lib/components/ui/WordDefinitionResponse/WordDefinitionComp.svelte';
	import type { WordDefinitionResponse, Word } from '$lib/types/WordDefinition';
	import { getWord } from '$lib/api/getWord';
    import Button from '$lib/components/ui/button/button.svelte';
    import { recentWords } from '$lib/stores/SuperStore';
	let word: WordDefinitionResponse = [];
    // let timeoutId: NodeJS.Timeout;
    let wordToAdd: string;
    const onInput = async (e: Event) => {
        // clearTimeout(timeoutId);
        wordToAdd = (e.target as HTMLInputElement).value;
        if (wordToAdd === '') {
            word = [];
            return;
        }
        word = await getWord(wordToAdd);
        // console.log('We got the word', wordToAdd);
        // timeoutId = setTimeout(() => {
        //     console.log('Timeout called for word', wordToAdd);
        //     if ( 'title' in word || !word || word.length === 0) 
        //     {}
        //     else {
        //             recentWords.update((value) => {
        //             const isUnique = value.every((w) => w !== wordToAdd);
        //             if (isUnique) {
        //                 value.push(wordToAdd);
        //             }
        //             return value;
        //         });
        //     }
        // }, 3000);
    };

    const addWord = () => {
            if ( 'title' in word || !word || word.length === 0) 
            {}
            else {
                    recentWords.update((value) => {
                    const isUnique = value.every((w) => w !== wordToAdd);
                    if (isUnique) {
                        value.push(wordToAdd);
                    }
                    return value;
                });
            }
    };
    const addWordOnEnter = (e: Event) => {
            let keyPressd = e as KeyboardEvent;
            if (keyPressd.key !== 'Enter') return;
            if ( 'title' in word || !word || word.length === 0) 
            {}
            else {
                    recentWords.update((value) => {
                    const isUnique = value.every((w) => w !== wordToAdd);
                    if (isUnique) {
                        value.push(wordToAdd);
                    }
                    return value;
                });
            }
    };

</script>

<div class="justify-top relative flex min-h-screen flex-1 flex-col items-center p-4">
	<MainInput on:input={onInput} on:keydown={addWordOnEnter} placeholder="Type word here" class="" />
	<div class="flex flex-1 flex-col">
		{#if 'title' in word}
			<p class="mb-28 mt-10 flex-1 space-y-5 text-2xl font-bold text-destructive">
				No definition found
			</p>
		{:else if word.length > 0}
			<Button class="static m-auto my-5 max-w-sm px-12 py-6 text-2xl font-bold" on:click={addWord}>Add word</Button>
        <!-- {#if isPopupOpen}
            <p>Word added successfully</p>
        {/if} -->
			<WordDefinitionComp definition={word} />
		{:else}
			<p class="mb-28 mt-10 flex-1 space-y-5 text-2xl font-bold text-destructive">
				Type a word to get definition
			</p>
		{/if}
	</div>
</div>
