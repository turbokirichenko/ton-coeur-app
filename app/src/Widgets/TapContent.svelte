<script>
  import { userData } from "../Entities/User";
  import { grades } from "../Shared/Config/rules";
  import { fly } from "svelte/transition";
  import HeartFly from "../../public/effect/vecteezy_red-heart-icon_45925862.png";

  const heartQueue = $state([]);

  function addToQueue(event) {
    const [x, y] = [event.clientX, event.clientY];
    heartQueue.push({ x, y });
  }

  $effect(() => {
    heartQueue.shift();
  });
</script>

<div
  onpointerdown={(event) => {
    userData.clicked++;
    addToQueue(event);
  }}
  class="tap-content no-select"
>
  <!-- svelte-ignore slot_element_deprecated -->
  <div class="tap-content__window">
    <slot name="content" />
  </div>
  <div class="tap-content__button">
    <!-- svelte-ignore slot_element_deprecated -->
    {#if userData.clicked > grades[1]}
      <slot name="button" />
    {/if}
  </div>
  {#each heartQueue as heart}
    <img
      out:fly={{ y: -150, duration: 1000 }}
      src={HeartFly}
      class="heart"
      style="top: calc({heart.y}px - 32px); left: calc({heart.x}px - 32px)"
      alt="heart fly"
    />
  {/each}
</div>

<style>
  .tap-content {
    width: 100%;
    height: 100%;
    display: flex;
    padding-top: 60px;
    flex-direction: column;
    justify-content: center;
    gap: 124px;
    align-items: center;
  }
  .tap-content__window {
    width: 260px;
    height: 360px;
    position: relative;
  }
  .tap-content__button {
    width: 260px;
    height: 81px;
  }
  .heart {
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    top: var(--top);
    left: var(--left);
  }

  @media (max-height: 720px) {
    .tap-content {
      justify-content: space-around;
      gap: 0;
    }
  }

  @media (max-height: 400px) {
    .tap-content {
      padding-top: 0px;
    }
  }
</style>
