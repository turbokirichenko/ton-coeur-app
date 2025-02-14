<script>
  import Tap from "../Pages/Tap.page.svelte";
  import View from "../Pages/View.page.svelte";
  import WebApp from "@twa-dev/sdk";
  import { fade } from "svelte/transition";

  var signature = $state(null);

  function searchParams(search) {
    var urlParams = new URLSearchParams(search);
    return urlParams.get("startapp") ?? null;
  }
  try {
    WebApp.enableClosingConfirmation();
    console.log("startapp", WebApp.initDataUnsafe.start_param);
    signature =
      WebApp.initDataUnsafe.start_param || searchParams(window.location.search);
  } catch (err) {
    signature = searchParams(window.location.search);
  }
</script>

<main in:fade={{ duration: 3000 }} id="full-screen" class="main-page">
  <section class="main-page__content">
    {#if signature}
      <View {signature} />
    {:else}
      <Tap />
    {/if}
  </section>
</main>

<style>
  .main-page {
    background-color: #000000;
    height: 100vh;
    overflow-y: hidden;
    overflow-x: hidden;
  }
  .main-page__content {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>
