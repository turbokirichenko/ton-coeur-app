<script>
  import { fly } from "svelte/transition";
  import Postcard from "./Postcard.svelte";
  import TapSendButton from "./TapSendButton.svelte";
  import TapArea from "./TapArea.svelte";
  import HeartEffect from "./HeartEffect.svelte";

  const flyIn = { x: -100, duration: 1000 };
  const flyOut = { x: 100, duration: 1000 };
  const viewMode = "tap";

  var { open, postcardInfo, listeners, grade, transform, hearts } = $props();
</script>

<div class="tap-content no-select">
  <div class="tap-content__window">
    {#key grade}
      <div
        in:fly={flyIn}
        out:fly={flyOut}
        class="motion {transform && 'transformed'}"
      >
        <Postcard {viewMode} {postcardInfo} />
      </div>
    {/key}
    <TapArea {listeners} {grade} />
  </div>
  <div class="tap-content__button">
    {#if grade > 0}
      <TapSendButton {open} />
    {/if}
  </div>
  <HeartEffect {hearts} />
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
    position: relative;
  }
  .motion {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
