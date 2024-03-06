<script lang="ts">
    import LightSwitch from "$lib/components/ui/LightSwitch.svelte";
    import NiceTitle from '$lib/components/ui/NiceTitle.svelte';

</script>

<div class="hidden xl:block stickyflex-no-wrap fixed h-screen z-10  border-r  left-0 top-0 w-fit p-3">
    <div class="flex flex-col items-center justify-center h-full max-w-40  ">
        <div class="flex-1">
            <NiceTitle />
            <LightSwitch />
            <div>User Settings</div>
            <div>Collections</div>
        </div>
        <div>
            <div>Made by Dmytro Vasyliev :3 Special thanks to <a href="https://github.com/meetDeveloper">meetDeveloper</a> for dictionary api</div>
        </div>

    </div>
</div>