<script>
  let { onpointerdown, onpointerup, onpointerleave, grade } = $props();
</script>

<div
  {onpointerdown}
  {onpointerleave}
  {onpointerup}
  class="tap-area level-{grade} disable-zoom"
></div>

<style>
  .tap-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .level-disable {
    animation-name: area-rounded, area-colored, area-movement;
    animation-duration: 2s, 2s, 10s;
    animation-fill-mode: forwards, forwards;
    animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1),
      cubic-bezier(0.19, 1, 0.22, 1), cubic-bezier(0.445, 0.05, 0.55, 0.95);
    animation-iteration-count: 1, 1, infinite;
    animation-delay: 1s, 1s, 3s;
  }

  .level-non {
    animation-name: area-move-and-scale;
    animation-duration: 30s;
    animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
    animation-iteration-count: infinite;
    animation-delay: 3s;
    opacity: 0;
  }

  .level-0,
  .level-1,
  .level-2,
  .level-3,
  .level-4,
  .level-5,
  .level-6 {
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .disable-zoom {
    touch-action: manipulation;
  }
</style>
