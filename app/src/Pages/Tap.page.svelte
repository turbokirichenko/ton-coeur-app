<script lang="js">
  import { userData } from "../Entities/User";
  import { router } from "../Shared/Lib/router.svelte";
  import { windowStateByGrade, imagesByGrade } from "../Shared/Config/rules";
  import About from "../Widgets/About.svelte";
  import Archive from "../Widgets/Archive.svelte";
  import NavPanel from "../Widgets/NavPanel.svelte";
  import PopupWindow from "../Widgets/PopupWindow.svelte";
  import TapContent from "../Widgets/TapContent.svelte";
  import { fly } from "svelte/transition";
  import Background from "../Widgets/Background.svelte";

  var flyTransitionParams = { y: 1000, duration: 1000 };
  var hearts = $state([]);
  var transform = $state(false);
  const postcardInfo = $derived({
    ...windowStateByGrade[userData.grade].postcard,
    image: imagesByGrade[userData.grade],
    from: "@drakulaForce",
    to: "@myprincess1234",
  });

  function addHeart(props = { x: 0, y: 0, w: 64, h: 64 }) {
    hearts.push(props);
  }

  $effect(() => {
    hearts.shift();
  });

  /**
   * @param {PointerEvent & { currentTarget: EventTarget & HTMLDivElement }} event
   */
  function onpointerup(event) {
    transform = false;
  }
  /**
   * @param {PointerEvent & { currentTarget: EventTarget & HTMLDivElement }} event
   */
  function onpointerleave(event) {
    transform = false;
  }
  /**
   * @param {PointerEvent & { currentTarget: EventTarget & HTMLDivElement }} event
   */
  function onpointerdown(event) {
    userData.click();
    transform = true;
    addHeart({ x: event.clientX, y: event.clientY, w: 64, h: 64 });
  }

  /**
   *
   * @param { HTMLDivElement } element
   */
  function listeners(element) {
    element.addEventListener("pointerdown", onpointerdown);
    element.addEventListener("pointerup", onpointerup);
    element.addEventListener("pointerleave", onpointerleave);
  }
</script>

<main class="tap-page">
  <Background grade={userData.grade} />
  <header class="tap-page__header">
    <NavPanel
      count={userData.clicked}
      target={userData.target}
      grade={userData.grade}
    />
  </header>
  <section class="tap-page__content">
    <TapContent
      {listeners}
      {transform}
      {postcardInfo}
      grade={userData.grade}
      {hearts}
    />
  </section>
  {#if router.route === "archive"}
    <section transition:fly={flyTransitionParams} class="tap-page__popup">
      <PopupWindow>
        <Archive slot="content" items={null} />
      </PopupWindow>
    </section>
  {:else if router.route === "about"}
    <section transition:fly={flyTransitionParams} class="tap-page__popup">
      <PopupWindow>
        <About slot="content" />
      </PopupWindow>
    </section>
  {:else if router.route === "share"}
    <section transition:fly={flyTransitionParams} class="tap-page__popup">
      <PopupWindow />
    </section>
  {/if}
</main>

<style>
  .tap-page {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .tap-page__header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
  }
  .tap-page__content {
    margin: auto;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .tap-page__popup {
    position: absolute;
    width: 96vw;
    max-width: 560px;
    height: max(380px, calc(100vh - 96px));
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 0;
  }
</style>
