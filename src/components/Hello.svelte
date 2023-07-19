<script>
  export let text = 'default'
  export let handleClick
</script>

<button type="button" class="text-2xl hover:bg-red-500" on:click={handleClick}>
  SVELTE - Hello {text}
</button>