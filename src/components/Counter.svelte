<script>
  import {counterReadable} from "../stores/counter.store.js"
</script>

<button type="button" class="text-2xl hover:bg-red-500" on:click={$counterReadable.increment}>
  SVELTE - count {$counterReadable.count}
</button>