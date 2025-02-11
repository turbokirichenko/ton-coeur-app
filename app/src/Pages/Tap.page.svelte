<script lang="js">
  import { userData } from "../Entities/User";
  import { router } from "../Shared/Lib/router.svelte";
  import About from "../Widgets/About.svelte";
  import Archive from "../Widgets/Archive.svelte";
  import NavPanel from "../Widgets/NavPanel.svelte";
  import PopupWindow from "../Widgets/PopupWindow.svelte";
  import TapContent from "../Widgets/TapContent.svelte";
  import TapLoveWindow from "../Widgets/TapLoveWindow.svelte";
  import TapSendButton from "../Widgets/TapSendButton.svelte";
  import { fly } from "svelte/transition";
  import HeartEffect from "../Widgets/HeartEffect.svelte";
  import Background from "../Widgets/Background.svelte";

  var flyTransitionParams = { y: 1000, duration: 1000 };
  var hearts = $state([]);

  function addHeart(props = { x: 0, y: 0, w: 64, h: 64 }) {
    hearts.push(props);
  }

  $effect(() => {
    hearts.shift();
  });
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
    <TapContent>
      <TapLoveWindow {addHeart} slot="content" />
      <TapSendButton slot="button" />
    </TapContent>
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
  <HeartEffect {hearts} />
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
