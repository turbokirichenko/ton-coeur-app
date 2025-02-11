<script>
  import Tap from "../Pages/Tap.page.svelte";
  import { userData } from "../Entities/User";
  import Background from "../Widgets/Background.svelte";
</script>

<main id="full-screen" class="main-page">
  <div class="main-page__background-image">
    <Background grade={userData.grade} />
  </div>
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
  .main-page__background-image {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
</style>
