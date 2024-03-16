<script lang="ts">
	import type { WordDefinition } from '$lib/types/WordDefinition';
	import AudioButton from '$lib/components/ui/audioButton/audioButton.svelte';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import { Separator } from '$lib/components/ui/separator';
	import { Badge } from '$lib/components/ui/badge';
	export let definition: WordDefinition = [];
</script>

<div class=" mb-28 mt-10">
	{#each definition as word}
		<div class="flex  max-w-4xl flex-col content-center">
			{#if word.phonetic}
				<div class="italics text-xl font-semibold text-gray-400">
					<p>{word.phonetic}</p>
				</div>
			{/if}
			{#each word.meanings as meaning}
				<div class="">
					<p class="font-sans text-xl font-semibold italic text-primary">{meaning.partOfSpeech}</p>

					<ol class="list-decimal space-y-5 pl-10 text-popover-foreground">
						{#each meaning.definitions as definition, i}
							<li class=" ">
								<div class="flex flex-col space-y-2 pl-10">
									<p class="font-sans text-lg font-medium">{definition.definition}</p>
									{#if definition.example}
										<p class="pl-10 font-sans font-light italic text-secondary-foreground">
											<span class="font-medium">Example: </span>
											{definition.example}
										</p>
									{/if}
									{#if definition.synonyms.length > 0}
										<div class="max-w-md pl-10 font-sans font-light italic">
											Synonyms:
											{#each definition.synonyms as synonym}
												<Badge variant="outline">{synonym}</Badge>
											{/each}
										</div>
									{/if}
								</div>
							</li>
						{/each}
					</ol>
				</div>
				<Separator />
			{/each}
		</div>
	{/each}
</div>
