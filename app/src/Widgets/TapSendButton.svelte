<script>
  import Arrow from "/button/arrow.png";
  import Hearts from "/button/hearts.png";
  import { fly } from "svelte/transition";

  const flyOpts = { y: 150, duration: 1000 };
</script>

<button class="send-button some-dark-container" transition:fly={flyOpts}>
  <article class="send-button__left-slot">
    <img class="slot-image" src={Hearts} alt="hearts" />
  </article>
  <article class="send-button__middle-slot">
    <h3 class="send-gift-header">SEND GIFT</h3>
    <p class="send-gift-title">share your result</p>
  </article>
  <article class="send-button__right-slot">
    <img class="slot-image arrow-image-pad" src={Arrow} alt="send" />
  </article>
</button>

<style>
  .send-button {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    padding: 4px 16px 4px;
  }
  .send-button__left-slot {
    width: 42px;
    height: 43px;
  }
  .send-button__middle-slot {
    width: 110px;
    height: 43px;
  }
  .send-gift-title {
    color: #929292;
    margin-top: 8px;
  }
  .send-button__right-slot {
    width: 43px;
    height: 43px;
  }
  .slot-image {
    display: block;
    width: 100%;
    height: auto;
  }
  .arrow-image-pad {
    padding: 8px;
  }
</style>
