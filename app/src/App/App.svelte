<script>
  import Tap from "../Pages/Tap.page.svelte";
</script>

<main id="full-screen" class="main-page">
  <div class="main-page__background_image"></div>
  <div class="main-page__content">
    <Tap />
  </div>
</main>

<style>
  .main-page {
    height: 100vh;
    overflow-y: hidden;
    overflow-x: hidden;
  }
  .main-page__background_image {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url("/page/background-2.2.png"),
      linear-gradient(#5e1fa5, #250c42);
    background-size: 14rem;
    background-repeat: repeat;
    opacity: 1;
  }
</style>
