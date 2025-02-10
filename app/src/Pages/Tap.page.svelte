<script lang="js">
  import { userData } from "../Entities/User";
  import { router } from "../Shared/Lib/router.svelte";
  import { items } from "../Shared/Lib/items-mock.svelte";
  import About from "../Widgets/About.svelte";
  import Archive from "../Widgets/Archive.svelte";
  import NavPanel from "../Widgets/NavPanel.svelte";
  import PopupWindow from "../Widgets/PopupWindow.svelte";
  import TapContent from "../Widgets/TapContent.svelte";
  import TapLoveWindow from "../Widgets/TapLoveWindow.svelte";
  import TapSendButton from "../Widgets/TapSendButton.svelte";
</script>

<main class="tap-page">
  <header class="tap-page__header">
    <NavPanel count={userData.clicked} target="1200" />
  </header>
  <section class="tap-page__content">
    <TapContent>
      <TapLoveWindow count={userData.clicked} slot="content" />
      <TapSendButton slot="button" />
    </TapContent>
  </section>
  {#if router.route}
    <section class="tap-page__popup">
      {#if router.route === "archive"}
        <PopupWindow>
          <Archive slot="content" {items} />
        </PopupWindow>
      {:else if router.route === "about"}
        <PopupWindow>
          <About slot="content" />
        </PopupWindow>
      {:else if router.route === "share"}
        <PopupWindow />
      {/if}
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
  }
  .tap-page__popup {
    position: absolute;
    width: 96vw;
    max-width: 380px;
    height: max(380px, calc(100vh - 96px));
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 0;
  }
</style>
