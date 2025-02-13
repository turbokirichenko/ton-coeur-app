<script>
  import Postcard from "./Postcard.svelte";
  import TapArea from "./TapArea.svelte";
  import HeartEffect from "./HeartEffect.svelte";
  import Star from "../../public/button/star.png";

  var { postcardInfo } = $props();
  var hearts = $state([]);
  var transform = $state(false);

  function addHeart(props = { x: 0, y: 0, w: 64, h: 64 }) {
    hearts.push(props);
  }

  $effect(() => {
    hearts.shift();
  });

  /**
   * @param {PointerEvent & { currentTarget: EventTarget & HTMLDivElement }} event
   */
  function onpointerdown(event) {
    transform = true;
    addHeart({ x: event.clientX, y: event.clientY, w: 64, h: 64 });
  }

  /**
   *
   * @param { HTMLDivElement } element
   */
  function listeners(element) {
    element.addEventListener("pointerdown", onpointerdown);
  }
</script>

<section class="view-space no-select">
  <div class="view-space__placeholder">
    <div class="placeholder some-dark-container">
      <img src={Star} alt="star" width="48px" height="48px" />
      <div class="placeholder__text">
        <p>
          To get it, <strong class="strong">{postcardInfo.clicked}</strong>
          clicks were made! Good news to share that in your story!
        </p>
      </div>
    </div>
  </div>
  <div class="view-space__content">
    <div class="motion">
      <Postcard viewMode="tap" {postcardInfo} />
    </div>
  </div>
  <div class="view-space__foreground"></div>
  <TapArea {listeners} grade={postcardInfo.grade} />
  <HeartEffect {hearts} />
</section>

<style>
  .view-space {
    position: relative;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
  .view-space__placeholder {
    display: block;
    width: 260px;
    height: 80px;
  }
  .placeholder {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
  .placeholder__text {
    width: 70%;
    height: 52px;
  }
  .placeholder__text > p {
    font-size: 12px;
    line-height: 16px;
    text-align: left;
  }
  .strong {
    font-weight: 800;
    font-size: 13px;
    color: #f9f9f9;
  }
  .view-space__content {
    display: block;
    position: relative;
    width: 260px;
    height: 360px;
  }
  .motion {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
