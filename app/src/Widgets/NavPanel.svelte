<script>
  import Archive from "/nav/archive.png";
  import ArchiveRed from "/nav/archive-red.png";
  import Question from "/nav/question.png";
  import QuestionRed from "/nav/question-red.png";
  import Hearts from "/button/hearts.png";
  import { router, navigate } from "../Shared/Lib/router.svelte";
  import { grades } from "../Shared/Config/rules";

  let { count, target, grade } = $props();

  let archiveImg = $derived(router.route === "archive" ? ArchiveRed : Archive);
  let questionImg = $derived(router.route === "about" ? QuestionRed : Question);

  function open(route) {
    router.route === route ? navigate("") : navigate(route);
  }
</script>

<nav class="nav-panel">
  <div class="nav-panel__buttons">
    <a href="#top" onclick={() => open("archive")}>
      <img src={archiveImg} class="archive-img nav-img" alt="archive" />
    </a>
    <a href="#top" onclick={() => open("about")}>
      <img src={questionImg} class="question-img nav-img" alt="question" />
    </a>
  </div>
  <div class="nav-panel__userinfo">
    <div class="count">
      {#if grade >= grades.length - 1}
        <span class="count-text green-text scaling">{count}</span>
      {:else}
        <span class="count-text">{count}</span>
        <span class="count-text">/</span>
        <span class="count-text red-text">{target}</span>
      {/if}
      <img class="count-img" src={Hearts} alt="count hearts" />
    </div>
    <div class="avatar"></div>
  </div>
</nav>

<style>
  .nav-panel {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    padding: 21px 22px;
  }
  .nav-img {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 20px;
  }
  .count {
    min-width: 152px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    justify-content: flex-end;
    float: left;
    background-color: #00000088;
    border-radius: 15px;
    height: 36px;
    padding: 0px 12px;
  }
  .count-text {
    display: block;
    font-size: 18px;
    line-height: 18px;
    font-weight: 800;
    text-align: center;
  }
  .red-text {
    color: #f23737;
  }
  .green-text {
    color: lime;
  }
  .count-img {
    display: block;
    width: 16px;
    height: auto;
  }
  .avatar {
    display: block;
    float: left;
    width: 36px;
    height: 36px;
    border-radius: 20px;
    margin-left: 16px;
    background-color: #f9f9f9;
  }
  .scaling {
    animation-name: scale;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
</style>
