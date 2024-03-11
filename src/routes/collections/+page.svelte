<script lang="ts">
	import type { PageServerData } from './$types';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Table from '$lib/components/ui/table';
	import { collections } from '$lib/stores/collections';
	import NewCollectionDialog from '$lib/components/ui/NewCollectionDialog.svelte';
	export let data: PageServerData;
	let col = data.collections;
	collections.set(data.collections);
	collections.subscribe((value) => {
		col = value;
	});
	let table = true;
</script>

<div class="flex flex-col">
	<div class="mx-28 my-20 flex flex-col justify-center lg:mx-56">
		{#if table}
			<div class="m-3 flex flex-row justify-end space-x-5">
				<NewCollectionDialog data={data.form} />
				<!-- <Button class="font-semibold" on:click={addCollection}>Add Collection</Button> -->
				<Button on:click={() => (table = false)} size="icon" variant="outline"
					>

							<svg
						class="h-6 w-6 text-secondary-foreground"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-width="2"
							d="M9 8h10M9 12h10M9 16h10M5 8h0m0 4h0m0 4h0"
						/>
					</svg>

					</Button
				>
			</div>

			{#if col.length > 0}
				<Table.Root>
					<Table.Caption>
						<div class="flex flex-col justify-center space-y-3">
							<div class="text-2xl font-semibold">Your Collections, my Lord</div>
							<!-- <Button class="m-auto w-fit font-semibold" size="sm" on:click={addCollection}
								>Add Collection</Button
							> -->
						</div>
					</Table.Caption>
					<Table.Header>
						<Table.Row>
							<Table.Head class="flex-1">Title</Table.Head>
							<Table.Head class="text-right">Words</Table.Head>
							<Table.Head class="text-right"></Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{#each col as collection}
							<Table.Row>
								<Table.Cell class="flex-1">{collection.title}</Table.Cell>
								<Table.Cell class="text-right">asdas</Table.Cell>
								<Table.Cell class="text-right items-end flex justify-end">
									<form method="DELETE">
										<button type="submit">
									<svg
										class="h-6 w-6 ml-2 text-muted-foreground"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
										/>
									</svg>
								</button>
							</form>
								</Table.Cell>
								
							</Table.Row>
						{/each}
					</Table.Body>
				</Table.Root>
			{:else}
				<div class="text-4xl">You dont have any collections yet.</div>
			{/if}
		{:else}
			<div class="flex-flex-row">
				<Button size="lg">Add Collection</Button>
				<Button on:click={() => (table = true)} size="icon" variant="outline"
					><svg
						class="h-6 w-6 text-secondary-foreground"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							fill-rule="evenodd"
							d="M4.9 3C3.9 3 3 3.8 3 4.9V9c0 1 .8 1.9 1.9 1.9H9c1 0 1.9-.8 1.9-1.9V5c0-1-.8-1.9-1.9-1.9H5Zm10 0c-1 0-1.9.8-1.9 1.9V9c0 1 .8 1.9 1.9 1.9H19c1 0 1.9-.8 1.9-1.9V5c0-1-.8-1.9-1.9-1.9h-4Zm-10 10c-1 0-1.9.8-1.9 1.9V19c0 1 .8 1.9 1.9 1.9H9c1 0 1.9-.8 1.9-1.9v-4c0-1-.8-1.9-1.9-1.9H5Zm10 0c-1 0-1.9.8-1.9 1.9V19c0 1 .8 1.9 1.9 1.9H19c1 0 1.9-.8 1.9-1.9v-4c0-1-.8-1.9-1.9-1.9h-4Z"
							clip-rule="evenodd"
						/>
					</svg>
				</Button>
			</div>
		{/if}
	</div>
</div>
