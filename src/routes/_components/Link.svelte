<script lang="ts">
  export let textString: string;
  export let link: string;
  export let hasNotification: boolean = false;
</script>

<li class="relative">
  {#if hasNotification}
    <div class="badge badge-xs absolute -right-1 top-1 h-1 w-1 border-none bg-stone-500 px-0"></div>
  {/if}
  <a href={link} class="hidden transition-all text-sm md:text-base hover:link hover:text-stone-700 sm:block"
    >{textString}</a
  >
  <slot />
</li>
