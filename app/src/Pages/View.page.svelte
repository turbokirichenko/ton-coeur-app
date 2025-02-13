<script>
  import Background from "../Widgets/Background.svelte";
  import {
    windowStateByGrade,
    imagesByGrade,
    grades,
  } from "../Shared/Config/rules";
  import ViewContent from "../Widgets/ViewContent.svelte";
  import ViewNavPanel from "../Widgets/ViewNavPanel.svelte";
  const grade = 2;
  const postcard = windowStateByGrade[grade].postcard;
  const image = imagesByGrade[grade];

  const postcardInfo = {
    ...postcard,
    clicked: grades[grade],
    grade,
    image,
    fadeOpt: { duration: 2000 },
    from: "@drakulaForce",
    to: "@myprincess1234",
  };
</script>

<main class="view-page">
  <Background grade={postcardInfo.grade} />
  <section class="view-page__content">
    <ViewContent {postcardInfo} />
  </section>
  <header class="view-page__header">
    <ViewNavPanel />
  </header>
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
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
</style>
