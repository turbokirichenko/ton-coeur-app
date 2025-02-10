<script>
  import { fly } from "svelte/transition";
  import { imagesByGrade, windowStateByGrade } from "../Shared/Config/rules";
  import { userData } from "../Entities/User";
  import TapArea from "./TapArea.svelte";

  var { addHeart } = $props();
  var transformState = $state({ transform: false });
  var postcard = $derived(windowStateByGrade[userData.grade].postcard);

  /**
   * @param {PointerEvent & { currentTarget: EventTarget & HTMLDivElement }} event
   */
  function onpointerup(event) {
    transformState.transform = false;
  }

  /**
   * @param {PointerEvent & { currentTarget: EventTarget & HTMLDivElement }} event
   */
  function onpointerleave(event) {
    transformState.transform = false;
  }

  /**
   * @param {PointerEvent & { currentTarget: EventTarget & HTMLDivElement }} event
   */
  function onpointerdown(event) {
    userData.click();
    transformState.transform = true;
    addHeart({ x: event.clientX, y: event.clientY, w: 64, h: 64 });
  }
</script>

{#key userData.grade}
  <div
    in:fly={{ x: -100, duration: 1000 }}
    out:fly={{ x: 100, duration: 1000 }}
    class="tap-love-window some-dark-container {transformState.transform &&
      'transformed'}"
  >
    <div class="tap-love-window__header">
      <h3>{postcard.header}</h3>
    </div>
    <div class="tap-love-window__description">
      {#each postcard.description as text}
        <p>{text}</p>
      {/each}
    </div>
    <div class="tap-love-window__image">
      <div
        class="tap-love-image"
        style="background-image: url({imagesByGrade[userData.grade]})"
      ></div>
    </div>
  </div>
{/key}
<TapArea
  {onpointerdown}
  {onpointerleave}
  {onpointerup}
  grade={userData.grade}
/>

<style>
  .tap-love-window {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding-top: 23px;
  }
  .tap-love-window__header {
    width: 220px;
    height: 18px;
  }
  .tap-love-window__description {
    width: 220px;
    height: 52px;
  }
  .tap-love-window__image {
    width: 207px;
    height: 207px;
  }
  .tap-love-image {
    display: block;
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    margin: auto;
    pointer-events: none;
  }
  .transformed {
    transform: scale(0.98);
  }
</style>
