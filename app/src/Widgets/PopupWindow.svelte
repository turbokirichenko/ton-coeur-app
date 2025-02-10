<script>
  import { navigate } from "../Shared/Lib/router.svelte";
</script>

<section
  onpointerup={() => navigate("")}
  class="popup-window some-dark-2-container"
>
  <div class="popup-window__content">
    <slot name="content" />
  </div>
</section>

<style>
  .popup-window {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 22px 24px;
  }
  .some-dark-2-container {
    background-color: #000000d0;
    border-radius: 20px 20px 0 0;
  }
</style>
