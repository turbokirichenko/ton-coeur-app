<script>
  import Postcard from "./Postcard.svelte";
  import TapArea from "./TapArea.svelte";
  import HeartEffect from "./HeartEffect.svelte";
  import Star from "../../public/button/star.png";
  import WebApp from "@twa-dev/sdk";

  var { postcardInfo } = $props();
  var hearts = $state([]);
  var flyParams = { y: -200, duration: 1000 };
  var transform = $state(false);

  function addHeart(props = { x: 0, y: 0, w: 64, h: 64 }) {
    hearts.push(props);
  }

  $effect(() => {
    hearts.shift();
  });

  setInterval(() => {
    addHeart(genHeart());
  }, 1000);

  function genHeart() {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      w: 64,
      h: 64,
    };
  }

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

  /**
   *
   */
  function onclick() {
    try {
      //WebApp.shareToStory();
    } catch (err) {
      console.error(err);
    }
  }
</script>

<section class="view-space no-select">
  {#if postcardInfo.grade > 0 && postcardInfo.grade !== 404}
    <button class="un-btn view-space__placeholder">
      <div class="placeholder some-dark-container">
        <img src={Star} alt="star" width="48px" height="48px" />
        <div class="placeholder__text">
          <p>
            <strong class="strong">{postcardInfo.from}</strong>
            made
            <strong class="strong">{postcardInfo.clicked}</strong>
            clicks to give this gift. Share it in the
            <strong class="strong">story</strong>
          </p>
        </div>
      </div>
    </button>
    <TapArea {listeners} grade={postcardInfo.grade} />
    <HeartEffect {hearts} {flyParams} />
  {/if}
  <div class="view-space__content">
    <div class="motion">
      <Postcard viewMode="tap" {postcardInfo} />
    </div>
  </div>
  <div class="view-space__foreground"></div>
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
    gap: 20px;
  }
  .un-btn {
    all: unset;
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
  }
  .placeholder__text > p {
    font-size: 12px;
    line-height: 14px;
    text-align: left;
  }
  .strong {
    font-weight: 800;
    font-size: 10.5px;
    color: #f9f9f9;
  }
  .view-space__content {
    display: block;
    position: relative;
    width: 260px;
    height: 411px;
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
