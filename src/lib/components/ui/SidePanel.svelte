<script lang="ts">
    import LightSwitch from "$lib/components/ui/LightSwitch.svelte";
    import NiceTitle from '$lib/components/ui/NiceTitle.svelte';
    import Button from "$lib/components/ui/button/button.svelte";
    import type { SessionUser } from "$lib/types/SessionUser";
    export let user: SessionUser;
</script>

<div class="hidden md:block stickyflex-no-wrap fixed h-screen z-10  border-r  left-0 top-0 w-fit p-3 content-center">
    <div class="flex flex-col items-center h-full max-w-40  ">
        <NiceTitle />
        <div class="flex-1 text-2xl flex flex-col items-center justify-top my-10  content-center m-auto font-semibold space-y-5">
            <LightSwitch />
            {#if user}
            <div>User Settings</div>
            <div>Collections</div>
            {:else}
            <div class=" flex flex-col items-center space-y-5  content-center">
                <Button href="/auth/login" class="w-full">Login</Button>
                <Button href="/auth/register" class="w-full">Register</Button>
            </div>
             
            {/if}
        </div>
        <div>
            <div>Made by Dmytro Vasyliev :3 Special thanks to <a href="https://github.com/meetDeveloper">meetDeveloper</a> for dictionary api</div>
        </div>

    </div>
</div>