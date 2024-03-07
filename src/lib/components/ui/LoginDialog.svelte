<script lang="ts">
    import { Button, buttonVariants } from "$lib/components/ui/button";
    import * as Dialog from "$lib/components/ui/dialog";
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";
    import * as Form from "$lib/components/ui/form";
    import { enhance } from "$app/forms";
    import LoginForm from "$lib/components/ui/LoginForm.svelte";

    export let loginFormData: any;
  </script>
   
  <Dialog.Root>
    <Dialog.Trigger class={buttonVariants({ variant: "outline" })}
      >Login</Dialog.Trigger
    >
    <Dialog.Content class="sm:max-w-[425px]">
      <Dialog.Header>
        <Dialog.Title>Login</Dialog.Title>
        <!-- <Dialog.Description>
          Make changes to your profile here. Click save when you're done.
        </Dialog.Description> -->
      </Dialog.Header>
	
        <LoginForm data={loginFormData}/>

    </Dialog.Content>
  </Dialog.Root>