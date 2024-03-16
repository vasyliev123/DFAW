<script lang="ts">
	import LightSwitch from '$lib/components/ui/LightSwitch.svelte';
	import NiceTitle from '$lib/components/ui/NiceTitle.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import type { Collections } from '$lib/types/Collections';
	import { recentWords } from '$lib/stores/SuperStore';
	import Separator from '$lib/components/ui/separator/separator.svelte';
    import { selectedCollections } from '$lib/stores/SuperStore';
    export let collections: Collections[] = [];
	let words = $recentWords;
	console.log('words', words);
	recentWords.subscribe((value) => {
		words = value;
	});
</script>

<div class="flex-no-wrap sticky left-0 top-0 z-10 hidden h-screen w-fit border-r p-3 md:block">
	<div class="flex h-full max-w-72 flex-col items-center justify-center">
		<div class="flex-1">
			<div class="flex flex-col content-center justify-center">
				<h1 class="m-auto content-center justify-center text-xl font-bold text-foreground">
					Your collections
				</h1>
				<div class="collections my-1 space-x-1 space-y-1">
					{#each collections as collection}
                        <a href=""
                        on:click={
                            () => {
                                selectedCollections.update((value) => {
                                    if (value.includes(collection.id)) {
                                        return value.filter((v) => v !== collection.id);
                                    } else {
                                        return [...value, collection.id];
                                    }
                                });
                            }
                        }
                        id="{collection.id.toString()}">
                            <Badge 
                           
                                class="text-md h-8 rounded-sm border-primary bg-inherit font-normal text-foreground shadow-xl"
                                >{collection.title}</Badge
                            >
                    </a>
					{/each}
				</div>
				<div class="add-practice felx-col flex space-x-1">
					<Button class="w-full" variant="outline" href="/add-practice">Add</Button>
					<Button class="w-full" href="/practice">Practice</Button>
				</div>
				<Separator class="my-2" />
			</div>
			<div class="flex flex-col content-center justify-center">
				<h1 class="m-auto content-center justify-center text-2xl font-bold text-foreground">
					Recent words
				</h1>
				<div class="words my-1 space-x-1 space-y-1">
					{#each words as word}
						<Badge
                        class="text-lg h-8 rounded-sm border-primary bg-inherit font-semibold text-foreground shadow-xl"
                        >{word}</Badge>
					{/each}
				</div>
			</div>
		</div>
		<div class="m-auto flex flex-col content-center items-center justify-center">
			<LightSwitch />
			<div class="text-sm">
				Made by <a href="github.com/vasyliev123" class="text-primary">@vasyliev123</a> :3
			</div>
		</div>
	</div>
</div>
