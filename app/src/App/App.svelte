<script>
  import Tap from "../Pages/Tap.page.svelte";
  import { userData } from "../Entities/User";
  import { windowStateByGrade } from "../Shared/Config/rules";
  import { fade } from "svelte/transition";

  const background = $derived(windowStateByGrade[userData.grade].background);
</script>

<main id="full-screen" class="main-page">
  {#key userData.grade}
    <div
      in:fade
      out:fade
      class="main-page__background_image"
      style:--gradient-left={background.linearGradient[0]}
      style:--gradient-right={background.linearGradient[1]}
      style:--background-url="url({background.url})"
    ></div>
  {/key}
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
    background-image: var(--background-url, url("/page/background-2.2.png")),
      linear-gradient(
        var(--gradient-left, #5e1fa5),
        var(--gradient-right, #250c42)
      );
    background-size: 14rem;
    background-repeat: repeat;
    opacity: 1;
  }
</style>
