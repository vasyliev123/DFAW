<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex flex-col justify-center h-screen content-center items-center">
    
    <h1 class=" text-4xl font-bold text-destructive">{$page.status}</h1>
    <h1 class=" text-4xl font-bold text-destructive">Opsie...Something went wrong ;{'<'}</h1>
</div>