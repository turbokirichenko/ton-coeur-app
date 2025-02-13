<script>
  var { open } = $props();

  function onpointerup(event) {
    open("");
  }
</script>

<section {onpointerup} class="popup-window some-dark-2-container">
  <!-- svelte-ignore slot_element_deprecated -->
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
  .popup-window__content {
    width: 100%;
    height: 100%;
  }
  .some-dark-2-container {
    background-color: #000000e0;
    border-radius: 20px 20px 0 0;
  }
</style>
