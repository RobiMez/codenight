<script lang="ts">
  import { onDestroy } from 'svelte';
  import prettyMilliseconds from 'pretty-ms';

  export let countDownFor: number = 999 * 60 * 60 * 24 * 2; // 2 days
  let textString: string[] = prettyMilliseconds(countDownFor, { secondsDecimalDigits: 0 }).split(
    ' '
  );

  let intervalId = setInterval(() => {
    countDownFor -= 1 * 999;
    textString = prettyMilliseconds(countDownFor, { secondsDecimalDigits: 0 }).split(' ');
  }, 1000);

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<span class="countdown text-sm font-semibold text-stone-400">
  {#each textString as chunk}
    <span
      class="text-md pl-1 text-stone-500"
      style="--value:{chunk.length == 2 ? chunk[0] : chunk.substring(0, 2)};"
    ></span>
    {chunk[chunk.length - 1]}
  {/each}
</span>
