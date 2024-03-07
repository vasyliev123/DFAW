<script lang="ts">
    import { Button, buttonVariants } from "$lib/components/ui/button";
    import * as Dialog from "$lib/components/ui/dialog";
    import RegisterForm from "$lib/components/ui/RegisterForm.svelte";

    export let registerFormData: any;
  </script>
   
  <Dialog.Root>
    <Dialog.Trigger class={buttonVariants({ variant: "default" })}
      >Register</Dialog.Trigger
    >
    <Dialog.Content class="sm:max-w-[425px]">
      <Dialog.Header>
        <Dialog.Title>Register</Dialog.Title>
      </Dialog.Header>
	
        <RegisterForm data={registerFormData}/>

    </Dialog.Content>
  </Dialog.Root>