<script lang="ts">
  import type { WordDefinition } from "$lib/types/WordDefinition";
  import AudioButton from "$lib/components/ui/audioButton/audioButton.svelte";
  import { ScrollArea } from "$lib/components/ui/scroll-area";
  import { Separator } from "$lib/components/ui/separator";
  import { Badge } from "$lib/components/ui/badge";
  export let definition: WordDefinition = [];
</script>

<div class="flex-1  mt-10 mb-28">
        {#each definition as word}
            <div class="flex flex-col content-center h-full max-w-4xl">
             {#if word.phonetic }
                <div class="font-semibold italics text-gray-400 text-xl ">
                    <p>{word.phonetic}</p>
                </div>
            {/if}
            {#each word.meanings as meaning}
                <div class="">
                    <p class="text-primary font-semibold font-sans italic text-xl">{meaning.partOfSpeech}</p>

                    <ol class="list-decimal pl-10 space-y-5 text-popover-foreground ">
                        {#each meaning.definitions as definition, i}
                            <li class=" ">
                                <div class="flex flex-col space-y-2 pl-10">
                                    <p class="font-sans font-medium text-lg">{definition.definition}</p>
                                    {#if definition.example}
                                        <p class="font-sans font-light italic pl-10 text-secondary-foreground">
                                            <span class="font-medium">Example: </span>
                                            {definition.example}</p>
                                    {/if}
                                    {#if definition.synonyms.length > 0}
                                    <div class="font-sans font-light italic pl-10 max-w-md">Synonyms: 
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
                <Separator/>
            {/each}
        </div>
    {/each}
</div>
