<script>
  import Archive from "../../public/nav/archive.png";
  import Question from "../../public/nav/question.png";
  import Hearts from "../../public/button/hearts.png";

  export let count;
</script>

<nav class="nav-panel">
  <div class="nav-panel__buttons">
    <img src={Archive} class="archive-img nav-img" alt="archive" />
    <img src={Question} class="question-img nav-img" alt="question" />
  </div>
  <div class="nav-panel__userinfo">
    <div class="count">
      <span class="count-text">{count}</span>
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
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
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
</style>
