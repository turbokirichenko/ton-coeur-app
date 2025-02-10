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
  import { fly } from "svelte/transition";
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
  {#if router.route === "archive"}
    <section
      transition:fly={{ y: 1000, duration: 1000 }}
      class="tap-page__popup"
    >
      <PopupWindow>
        <Archive slot="content" {items} />
      </PopupWindow>
    </section>
  {:else if router.route === "about"}
    <section
      transition:fly={{ y: 1000, duration: 1000 }}
      class="tap-page__popup"
    >
      <PopupWindow>
        <About slot="content" />
      </PopupWindow>
    </section>
  {:else if router.route === "share"}
    <section
      transition:fly={{ y: 1000, duration: 1000 }}
      class="tap-page__popup"
    >
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
