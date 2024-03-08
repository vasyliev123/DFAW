<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import Button from "$lib/components/ui/button/button.svelte";
    export let title: string;
    export let words: number;
   </script>

<a href="/collections/{title}">
  <Card.Root>
    <Card.Header>
      <Card.Title tag="h1">{title}</Card.Title>
    </Card.Header>
    <Card.Content>
      <p>Words: {words}</p>
    </Card.Content>
    <Card.Footer>
        <Button variant="outline">View</Button>
        <Button>Study</Button>
    </Card.Footer>
  </Card.Root>
</a>