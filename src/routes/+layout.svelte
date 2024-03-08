<script lang="ts">
    import '../app.pcss';
    import SidePanel from '$lib/components/ui/SidePanel.svelte';
    import { ModeWatcher } from "mode-watcher";
    import type { PageData } from './$types';
	import { Progress } from "$lib/components/ui/progress";
    import { navigating } from '$app/stores';
	import { loading } from '$lib/loading';
	import Loading from '$lib/components/ui/Loading.svelte';
    export let data: PageData;

	$: $loading = !!$navigating;
</script>

<div class="relative bg-background">
	<Loading />
    <ModeWatcher />
    <div class="flex flex-row">
        <SidePanel user={data.user}/>
        <div class="flex-1">
            <slot />
        </div>    
    </div>
</div>
