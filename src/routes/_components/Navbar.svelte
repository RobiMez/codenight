<script lang="ts">
  import { slide } from 'svelte/transition';
  import Link from './Link.svelte';
  import TimerDropout from './TimerDropout.svelte';
  import { House, HouseSimple, Question, Quotes, Ticket, UsersThree } from 'phosphor-svelte';
  let peekTimerDropout = false;
</script>

<div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="text-xl" href="#0">CodeNight</a>
  </div>
  <div class="flex-none">
    <div
      class="relative flex flex-col items-end gap-2 p-2
    "
    >
      <ul class="flex flex-row gap-5 px-1 text-stone-500">
        <Link textString="Home" link="#0">
          <House class="block sm:hidden" size="24" />
        </Link>
        <Link textString="Community" link="#0">
          <UsersThree class="block sm:hidden" size="24" />
        </Link>
        <button
          on:mouseover={() => {
            peekTimerDropout = true;
          }}
          on:focus={() => {
            peekTimerDropout = true;
          }}
          on:mouseout={() => {
            peekTimerDropout = false;
          }}
          on:blur={() => {
            peekTimerDropout = false;
          }}
        >
          <Link textString="Events" link="#0" hasNotification={true}>
            <Ticket class="block sm:hidden" size="24" />
          </Link>
        </button>
        <Link textString="Blog" link="#0">
          <Quotes class="block sm:hidden" size="24" />
        </Link>
        <Link textString="FAQ & Contact Us" link="#0">
          <Question class="block sm:hidden" size="24" />
        </Link>
      </ul>
      {#if peekTimerDropout}
        <div transition:slide class="absolute -bottom-8 left-0">
          <TimerDropout />
        </div>
      {/if}
    </div>
  </div>
</div>
