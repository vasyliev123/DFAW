<script lang="ts">
    import LightSwitch from "$lib/components/ui/LightSwitch.svelte";
    import NiceTitle from '$lib/components/ui/NiceTitle.svelte';
    import Button from "$lib/components/ui/button/button.svelte";
    import type { SessionUser } from "$lib/types/SessionUser";
    import * as Drawer from "$lib/components/ui/drawer";
    import { loading } from "$lib/loading";
    export let user: SessionUser;
</script>

<div class="hidden md:block   flex-no-wrap  sticky h-screen z-10  border-r  left-0 top-0 w-fit p-3 content-center">
    <div class="flex flex-col items-center h-full max-w-40  ">
        <NiceTitle />
        <div class="flex-1 text-2xl flex flex-col items-center justify-top my-10  content-center m-auto font-semibold space-y-5">
            <LightSwitch />
            {#if user}
            <Button href="/settings" variant="outline" class="w-full" on:click={()=>$loading = true}>My Preferences</Button>
            <Button href="/collections" variant="outline" class="w-full" on:click={()=>$loading = true}>My Collections</Button>
            <Button href="/auth/logout" variant="outline" class="w-full" on:click={()=>$loading = true}>Logout</Button>
            <!-- <Drawer.Root>
                <Drawer.Trigger>Collections</Drawer.Trigger>
                <Drawer.Content>
                  <Drawer.Header>
                    <Drawer.Title>Your collections</Drawer.Title>
                    <Drawer.Description>This action cannot be undone.</Drawer.Description>
                  </Drawer.Header>
                  <Drawer.Footer>
                    <Button>Submit</Button>
                    <Drawer.Close>Cancel</Drawer.Close>
                  </Drawer.Footer>
                </Drawer.Content>
              </Drawer.Root> -->
            {:else}
            <div class=" flex flex-col items-center space-y-5  content-center">
                <p class="text-md text-accent-foreground">To create collection login or create an account</p>
                <Button href="/auth/login" class="w-full" on:click={()=>$loading = true}>Login</Button>
                <Button href="/auth/register" class="w-full" on:click={()=>$loading = true}>Register</Button>
            </div>
             
            {/if}
        </div>
        <div>
            <div>Made by Dmytro Vasyliev :3 Special thanks to <a href="https://github.com/meetDeveloper">meetDeveloper</a> for dictionary api</div>
        </div>

    </div>
</div>