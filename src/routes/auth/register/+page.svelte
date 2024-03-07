<script lang="ts">
    import type { PageData } from "./$types";
    import RegisterForm from "$lib/components/ui/RegisterForm.svelte";
    export let data: PageData;

</script>
 
<RegisterForm data={data.form} />
