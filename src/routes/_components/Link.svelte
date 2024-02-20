<script lang="ts">
  export let textString: string;
  export let link: string;
  export let hasNotification: boolean = false;
</script>

<li class="relative">
  {#if hasNotification}
    <div
      class="badge badge-xs h-1 w-1 absolute -right-1 top-1 px-0 border-none bg-stone-500"
    ></div>
  {/if}
  <a href={link} class="transition-all hover:link hover:text-stone-700">{textString}</a>
</li>
