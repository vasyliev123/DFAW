<script lang="ts">
    import { loading } from "$lib/loading";
</script>

{#if $loading}
    <!-- <div class="flex justify-center items-center h-screen">
        <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
    </div> -->
    <div class="w-full h-1 bg-blue-400 transition-all ease-out duration-1000   relative  ">

    </div>
{/if}