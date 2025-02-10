<script>
  import { imagesByGrade, pagesText } from "../Shared/Config/rules";

  /**
   * @type {{ items: null | {grade: number, avatar: string | null, date: number}[]}}
   */
  let { items = null } = $props();
</script>

<section class="archive">
  <header class="archive__header">
    <h3>{pagesText.archive.header}</h3>
  </header>
  <div class="archive__content">
    <div class="gift-history">
      {#if items}
        {#each items as item, i}
          <div class="gift">
            <div class="gift__image">
              <img
                class="gift-img"
                src={imagesByGrade[item.grade]}
                alt="gift"
              />
            </div>
            <div class="gift__avatar">
              {#if item.avatar}
                <img
                  class="gift-img avatar-img"
                  src={item.avatar}
                  alt="avatar"
                />
              {:else}
                <div class="avatar-img mock"></div>
              {/if}
            </div>
          </div>
        {/each}
      {:else}
        <div class="nothing-text">
          {#each pagesText.archive.text as topic}
            <p>{topic}</p>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</section>

<style>
  .archive {
    width: 100%;
    height: 100%;
  }
  .archive__content {
    height: 100%;
  }
  .gift-history {
    display: flex;
    height: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: flex-start;
    gap: 10px;
  }
  .gift {
    position: relative;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
  }
  .gift__image {
    position: absolute;
    width: 92px;
    height: 92px;
    top: calc(50% - 46px);
    left: calc(50% - 46px);
  }
  .gift__avatar {
    position: absolute;
    width: 38px;
    height: 38px;
    right: 0;
    bottom: 0;
  }
  .gift-img {
    display: block;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
  }
  .avatar-img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 100px;
    background-color: #f9f9f9;
  }
  .mock {
    display: block;
    width: 100%;
    height: 100%;
  }
  .nothing-text {
    max-width: 360px;
    margin: auto;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
