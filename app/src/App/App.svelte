<script>
  import Tap from "../Pages/Tap.page.svelte";
  import View from "../Pages/View.page.svelte";
</script>

<main id="full-screen" class="main-page">
  <Tap />
</main>

<style>
  .main-page {
    height: 100vh;
    overflow-y: hidden;
    overflow-x: hidden;
  }
</style>
