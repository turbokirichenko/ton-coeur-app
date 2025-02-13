<script>
  var { open } = $props();

  function onclick(event) {
    open("");
  }
</script>

<section class="popup-window some-dark-2-container">
  <button {onclick} class="btn-unset close-button">click me</button>
  <!-- svelte-ignore slot_element_deprecated -->
  <div class="popup-window__content">
    <slot name="content" />
  </div>
</section>

<style>
  .popup-window {
    position: relative;
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
    background-color: #000000f0;
    border-radius: 20px 20px 0 0;
  }
  .btn-unset {
    all: unset;
  }
  .close-button {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
  }
</style>
