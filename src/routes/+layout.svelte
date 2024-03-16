<script>
	import '../app.pcss';
	import SidePanel from '$lib/components/ui/SidePanel.svelte';
	import { ModeWatcher } from "mode-watcher";
</script>

<div class="relative bg-background">
	<ModeWatcher />
	<div class="flex flex-row">
			<slot/>
	</div>
 
</div>
