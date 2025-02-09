<script>
  import Tap from "../Pages/Tap.page.svelte";
</script>

<main class="main-page">
  <div class="main-page__background_image"></div>
  <div class="main-page__content">
    <Tap />
  </div>
</main>

<style>
  .main-page {
    height: 100vh;
  }
  .main-page__background_image {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url("../../public/page/background--1.png"),
      linear-gradient(#6d22c3, #371162);
    background-size: 14rem;
    background-repeat: repeat;
    opacity: 1;
  }
</style>
