<script lang="ts">
  import { CalendarCheck, ClockCountdown } from 'phosphor-svelte';
  import { fade, scale, slide } from 'svelte/transition';

  export let dateString = '24/7';
  export let timeTill = '24/7';
  export let title = 'none';
  export let disabledProject = false
  export let description = 'lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  let isHovered = false;

  let cardW = 0;
  let cardH = 0;

  let bgIcons: { x: number; y: number; rot: number; scale: number }[] = [];
  $: if (cardH > 0 && cardW > 0 && bgIcons.length === 0) {
    const bgIconsToApp = [
      { x: 90, y: -cardH / 4 - 45, rot: -20, scale: 0.9 },
      { x: 120, y: -cardH / 4 - 30, rot: 20, scale: 0.8 },
      { x: 80, y: -cardH / 4 - 20, rot: -125, scale: 0.7 },

      { x: -90, y: -cardH / 4 - 45, rot: -45, scale: 0.9 },
      { x: -120, y: -cardH / 4 - 30, rot: 60, scale: 0.8 },
      { x: -80, y: -cardH / 4 - 20, rot: -100, scale: 0.7 }
    ];
    bgIconsToApp.forEach((Ico) => {
      bgIcons.push(Ico);
      bgIcons = bgIcons;
    });
    console.log('ree', bgIcons);
  }

  $: console.log(cardH, cardW);
</script>

<div
  class="relative flex flex-col items-center justify-center gap-2 rounded-md border-2 border-transparent bg-stone-100 p-6 py-20 transition-all hover:border-stone-400"
  role="complementary"
  bind:clientHeight={cardH}
  bind:clientWidth={cardW}
  on:mouseenter={() => (isHovered = true)}
  on:mouseleave={() => (isHovered = false)}
>
  <span class="absolute -top-6 rounded-sm bg-stone-200 p-1 text-stone-900">
    <slot />
  </span>

  {#if bgIcons.length > 0}
    {#each bgIcons as item, i}
      <span
        class="absolute p-1 text-stone-800 transition-all duration-300 ease-in-out"
        style={`transform: translateX(${
          !isHovered ? (item.x < 0 ? -cardW / 2 + 32 : cardW / 2 - 32) : item.x
        }px) translateY(${
          !isHovered ? (item.y < 0 ? -cardH / 2 + 32 : cardH / 2 - 32) : item.y
        }px) rotate(${!isHovered ? 0 : item.rot}deg) scale(${
          !isHovered ? 1 : item.scale
        }); opacity : ${!isHovered ? 0 : 0.69}`}
      >
        <slot name="bg-icons" />
      </span>
    {/each}
  {/if}
  <div class="relative flex flex-col items-center justify-center gap-4">
    <h3 class="pt-4 text-2xl font-semibold text-stone-600">{title}</h3>
    {#key isHovered}
      <h5
        transition:scale|local={{ start: 0.98 , duration: 400}}
        class="absolute top-14 flex flex-row items-center justify-center gap-2 rounded-md {disabledProject ? "bg-stone-500" : "bg-stone-700"} p-1 px-2 text-xs text-stone-100"
      >
        {#if isHovered}
          <ClockCountdown weight="duotone" size="18" />
          {disabledProject ? "Stopped" : timeTill}
        {:else}
          <CalendarCheck weight="duotone" size="18" />
          {dateString}
        {/if}
      </h5>
    {/key}
  </div>

  <p class="px-2 pb-12 pt-9 text-center font-light">
    {description}
  </p>
</div>
