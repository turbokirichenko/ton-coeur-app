<script>
  import Postcard from "../Widgets/Postcard.svelte";
  import Background from "../Widgets/Background.svelte";
  import { windowStateByGrade, imagesByGrade } from "../Shared/Config/rules";
  const postcard = windowStateByGrade[2].postcard;
  const image = imagesByGrade[2];

  const postcardInfo = {
    ...postcard,
    image,
    fadeOpt: { duration: 2000 },
    from: "@drakulaForce",
    to: "@myprincess1234",
  };
</script>

<main class="view-page">
  <Background grade={2} />
  <header class="view-page__header"></header>
  <section class="view-page__content no-select">
    <Postcard viewMode="tap" {postcardInfo} />
  </section>
</main>

<style>
  .view-page {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .view-page__header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
  }
  .view-page__content {
    margin: auto;
    width: 260px;
    height: 360px;
    overflow: hidden;
    position: relative;
  }
</style>
