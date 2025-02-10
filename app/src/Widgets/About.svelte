<script>
  import { pagesText } from "../Shared/Config/rules";
</script>

<section class="about">
  <header class="about__header">
    <h3>{pagesText.about.header}</h3>
  </header>
  <div class="about__content">
    <div class="about-text">
      <div class="about-text__text">
        <span class="about-span">{pagesText.about.text}</span>
      </div>
      <div class="about-text__sub">
        <span class="about-span">{pagesText.about.sub}</span>
      </div>
      <div class="about-text__list">
        <div class="about-list">
          {#each pagesText.about.list as topic}
            <p class="about-list__topic">{topic}</p>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .about {
    margin: auto;
    width: 100%;
    height: 100%;
    max-width: 480px;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .about__header {
    width: 100%;
    height: 30px;
  }
  .about__content {
    width: 100%;
  }
  .about-text {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    gap: 13px;
  }
  .about-span {
    text-align: left;
  }
  .about-text__text {
    text-align: left;
  }
  .about-text__sub {
    text-align: left;
  }
  .about-text__list {
    text-align: left;
  }
  .about-list {
    text-align: left;
  }
  .about-list__topic {
    font-size: 14px;
    text-align: left;
    line-height: 21px;
  }
</style>
