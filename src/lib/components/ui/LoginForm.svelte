<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { formSchema, type loginFormSchema } from '$lib/loginFormSchema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import * as Card from '$lib/components/ui/card';
	export let data: SuperValidated<Infer<loginFormSchema>>;
	import { goto } from '$app/navigation';
		let _errors: string | undefined = undefined;
 
 const form = superForm(data, {
	 validators: zodClient(formSchema),
 onResult: (result) => {
   if (result.result.type === 'success')
   {console.log("success");
   goto('/');}
   else if (result.result.type === 'failure') {
	 console.log(result.result);
	 _errors = result.result.data?.errors;
   }
 }
 });

	const { form: formData, enhance } = form;
</script>

<div class="flex h-screen content-center justify-center">
	<Card.Root class="h-fit m-auto">
		<Card.Header>
			<Card.Title>Login into Your account</Card.Title>
 		</Card.Header>
		<Card.Content>
			<form method="POST" class="m-auto space-y-3" use:enhance>
				<Form.Field {form} name="email">
					<Form.Control let:attrs>
						<Form.Label>Email</Form.Label>
						<Input {...attrs} bind:value={$formData.email} />
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field {form} name="password">
					<Form.Control let:attrs>
						<Form.Label>Password</Form.Label>
						<Input {...attrs} bind:value={$formData.password} />
					</Form.Control>
					<!-- <Form.Description>This is your public display name.</Form.Description> -->
					<Form.FieldErrors />
				</Form.Field>
				<Form.Button class=" text-md mt-4 min-w-full font-semibold">Submit</Form.Button>
			</form>
			{#if _errors} 
			<span class="text-destructive">{_errors}</span>
   
		{/if}
		</Card.Content>
    <Card.Footer>
      <p>Don't have an account? <a href="/auth/register" class="text-primary underline">Register</a></p>
    </Card.Footer>
	</Card.Root>
</div>
