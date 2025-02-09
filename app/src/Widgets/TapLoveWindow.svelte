<script>
  import { imagesByGrade, grades } from "../Shared/Config/rules";
  let { count } = $props();
  let imageIndex = $derived(getImageIndex(count));

  function getImageIndex(cnt) {
    let detected = 0;
    grades.find((value, index) => {
      console.log(detected, count, value);
      if (cnt < value) {
        detected = index - 1;
        return true;
      }
      return false;
    });
    console.log(detected);
    return detected;
  }
</script>

<div class="tap-love-window some-dark-container">
  <div class="tap-love-window__header">
    <h3>There is the RED heart</h3>
  </div>
  <div class="tap-love-window__description">
    <p>you tap 100,345 and</p>
    <p>this gift almost be the</p>
    <p>wonderful in my memory</p>
  </div>
  <div class="tap-love-window__image">
    {#if imageIndex > 0}
      <img class="tap-love-image" src={imagesByGrade[imageIndex]} alt="heart" />
    {/if}
  </div>
</div>

<style>
  .tap-love-window {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding-top: 23px;
  }
  .tap-love-window__header {
    width: 220px;
    height: 18px;
  }
  .tap-love-window__description {
    width: 220px;
    height: 52px;
  }
  .tap-love-window__image {
    width: 207px;
    height: 207px;
  }
  .tap-love-image {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: auto;
  }
</style>
