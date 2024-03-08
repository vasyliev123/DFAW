<script lang="ts">
    import type { PageData } from "./$types"
    import CollectionCard from "$lib/components/ui/CollectionCard.svelte";
    export let data: PageData;
 </script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 m-5">
    {#each data.collections as collection}
        <div class="">
            <CollectionCard title={collection.name} words={collection.words.length} />
        </div>
    {/each}
</div>

<!-- 
<div class="grid grid-cols-5 grid-rows-9 gap-4">
    <div >1</div>
    <div class="col-start-2 row-start-2">2</div>
    <div class="col-start-3 row-start-3">3</div>
    <div class="col-start-3 row-start-4">4</div>
    <div class="col-start-3 row-start-7">5</div>
    <div class="col-start-4 row-start-6">6</div>
    <div class="col-start-4 row-start-8">7</div>
    <div class="col-start-3 row-start-9">8</div>
    <div class="col-start-2 row-start-6">9</div>
    <div class="col-start-1 row-start-5">10</div>
</div> -->
    