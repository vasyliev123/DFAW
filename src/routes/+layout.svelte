<script lang="ts">
	import '../app.pcss';
	import SidePanel from '$lib/components/ui/SidePanel.svelte';
	import { ModeWatcher } from "mode-watcher";
	import type { PageData } from './$types';
    export let data: PageData;
</script>

<div class="relative bg-background">
	<ModeWatcher />
	<SidePanel user={data.user}/>
	<slot />
</div>
