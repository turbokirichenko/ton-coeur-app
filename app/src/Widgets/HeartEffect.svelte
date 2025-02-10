<script>
  import HeartFly from "/effect/vecteezy_red-heart-icon_45925862.png";
  import { fly } from "svelte/transition";
  const { hearts } = $props();
  const flyParams = { y: -150, duration: 500 };
</script>

{#each hearts as heart}
  <img
    out:fly={flyParams}
    src={HeartFly}
    class="heart"
    style:--width="{heart.w}px"
    style:--height="{heart.h}px"
    style:--top="calc({heart.y}px - {heart.h / 2}px)"
    style:--left="calc({heart.x}px - {heart.w / 2}px)"
    alt="heart fly"
  />
{/each}

<style>
  .heart {
    display: block;
    position: absolute;
    width: var(--width, 64px);
    height: var(--height, 64px);
    top: var(--top);
    left: var(--left);
  }
</style>
