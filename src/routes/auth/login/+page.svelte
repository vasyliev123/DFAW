<script lang="ts">
    import type { PageData } from "./$types";
    import LoginForm from "$lib/components/ui/LoginForm.svelte";
    export let data: PageData;

</script>

<LoginForm data={data.form} />
