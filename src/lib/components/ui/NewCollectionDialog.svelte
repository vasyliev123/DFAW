<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { collections } from '$lib/stores/collections';
	import { formSchema, type FormSchema } from '../../../routes/collections/schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';


	export let data: SuperValidated<Infer<FormSchema>>;
	export let dialogOpen = false;

  
	const form = superForm(data, {
		validators: zodClient(formSchema),
		onResult: async (result) => {
			if (result.result.type === 'success') {
				const newCollection = result.result.data?.collection;
				collections.update((c) => [...c, newCollection]);
				dialogOpen = false;
			}
		}
	});
	const { form: formData, enhance } = form;
	 
</script>

<Dialog.Root bind:open={dialogOpen}>
	<Dialog.Trigger>Add Collection</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Add Collection?</Dialog.Title>
			<Dialog.Description>Create new collection to store new words</Dialog.Description>
		</Dialog.Header>
		<form method="POST" use:enhance>
			<Form.Field {form} name="title">
				<Form.Control let:attrs>
					<Form.Label>Title</Form.Label>
					<Input {...attrs} bind:value={$formData.title} />
				</Form.Control>
				<Form.Description>This is title for your new collection.</Form.Description>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Button>Create</Form.Button>
		</form>
	</Dialog.Content>
</Dialog.Root>
