<script lang="ts">
    import LightSwitch from "$lib/components/ui/LightSwitch.svelte";
    import NiceTitle from '$lib/components/ui/NiceTitle.svelte';
    import Button from "$lib/components/ui/button/button.svelte";

</script>

<div class="hidden md:block sticky flex-no-wrap h-screen z-10  border-r  left-0 top-0 w-fit p-3">
    <div class="flex flex-col items-center justify-center h-full max-w-40">
        <div class="flex-1">
            <NiceTitle />
            <div class="flex-1 text-2xl flex flex-col items-center justify-top my-10  content-center m-auto font-semibold space-y-5">
                <LightSwitch />
                <Button href="/collections" variant="outline" size="lg">Collections</Button>
                <Button variant="outline" size="lg">Preferences</Button>
            </div>
        </div>
        <div>
            <div class="text-sm">Made by <a href="github.com/vasyliev123" class="text-primary">@vasyliev123</a> :3</div>
        </div>

    </div>
</div>