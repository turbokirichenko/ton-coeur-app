<script>
  import Question from "/nav/question.png";
  import QuestionRed from "/nav/question-red.png";
  import Hearts from "/button/hearts.png";
  import { grades } from "../Shared/Config/rules";
  import WebApp from "@twa-dev/sdk";

  let { count, target, grade, open, state } = $props();
  let questionImg = $derived(state === "about" ? QuestionRed : Question);

  let avatar = { src: null };
  try {
    avatar.src = WebApp.initDataUnsafe.user.photo_url;
  } catch (err) {
    avatar.src = null;
  }
</script>

<nav class="nav-panel">
  <div class="nav-panel__buttons">
    <!--<button class="nav-img" onclick={() => open("archive")}>
      <img
        src={archiveImg}
        width="24px"
        height="24px"
        class="archive-img"
        alt="archive"
      />
    </button>-->
    <button class="nav-img" onclick={() => open("about")}>
      <img
        src={questionImg}
        width="24px"
        height="24px"
        class="question-img"
        alt="question"
      />
    </button>
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
    {#if avatar.src === null}
      <div class="avatar"></div>
    {:else}
      <img src={avatar.src} class="avatar" alt="avatar" />
    {/if}
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
    margin: 0;
    padding: 0;
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 20px;
    background: none;
  }
  .nav-img:hover {
    border: none;
  }
  .question-img {
    display: block;
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
