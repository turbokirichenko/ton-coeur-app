<script>
  import Tap from "../Pages/Tap.page.svelte";
  import View from "../Pages/View.page.svelte";
  import { fade } from "svelte/transition";

  var location = $state(window.location);
  var signature = $derived(searchParams(location.search));

  function searchParams(search) {
    var urlParams = new URLSearchParams(search);
    return urlParams.get("id");
  }
</script>

<main in:fade={{ duration: 3000 }} id="full-screen" class="main-page">
  {#if signature}
    <View />
  {:else}
    <Tap />
  {/if}
</main>

<style>
  .main-page {
    background-color: #000000;
    height: 100vh;
    overflow-y: hidden;
    overflow-x: hidden;
  }
</style>
