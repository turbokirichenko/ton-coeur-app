<script lang="js">
  import { userData } from "../Entities/User";
  import NavPanel from "../Widgets/NavPanel.svelte";
  import TapContent from "../Widgets/TapContent.svelte";
  import TapLoveWindow from "../Widgets/TapLoveWindow.svelte";
  import TapSendButton from "../Widgets/TapSendButton.svelte";

  /** pop up mode
   * @type { false | 'archive' | 'about' | 'share' }
   */
  export const route = false;
</script>

<main class="tap-page">
  <header class="tap-page__header">
    <NavPanel count={userData.clicked} />
  </header>
  <section class="tap-page__content">
    <TapContent>
      <TapLoveWindow count={userData.clicked} slot="content" />
      <TapSendButton slot="button" />
    </TapContent>
  </section>
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
</style>
