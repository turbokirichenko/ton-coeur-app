<script>
  import { TG_ORIGIN } from "../Shared/Config/constant";

  var { viewMode = "view", postcardInfo } = $props();
</script>

<div class="postcard some-dark-container">
  <div class="postcard__header">
    <h3>{postcardInfo.header}</h3>
  </div>
  <div class="postcard__description">
    {#each postcardInfo.description as text}
      <p>{text}</p>
    {/each}
  </div>
  <div class="postcard__image">
    <div
      class="postcard-image animation-{postcardInfo.animation}"
      style="background-image: url({postcardInfo.image})"
    ></div>
  </div>
  {#if viewMode === "view" && postcardInfo.from && postcardInfo.to}
    <div class="postcard__footer">
      <footer class="postcard-footer">
        <article class="postcard-footer__from">
          <div class="gift-sign">
            <p class="gift-title">from:</p>
            <p class="gift-mailer">
              <a
                class="a-link"
                href={`${TG_ORIGIN}${postcardInfo.from.substr(1)}`}
                target="_blank"
                >{postcardInfo.from}
              </a>
            </p>
          </div>
        </article>
        <article class="postcard-footer__to">
          <div class="gift-sign">
            <p class="gift-title">to:</p>
            <p class="gift-mailer">
              <a
                class="a-link"
                href={`${TG_ORIGIN}${postcardInfo.to.substr(1)}`}
                target="_blank"
                >{postcardInfo.to}
              </a>
            </p>
          </div>
        </article>
      </footer>
    </div>
  {/if}
</div>

<style>
  .postcard {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    gap: 13px;
    padding-top: 23px;
  }
  .postcard__header {
    width: 220px;
    height: 18px;
  }
  .postcard__description {
    width: 220px;
    height: 42px;
  }
  .postcard__image {
    position: relative;
    width: 207px;
    height: 207px;
  }
  .animation-beat {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation-name: heartbeat;
    animation-duration: 2s;
    animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
    animation-iteration-count: infinite;
  }
  .animation-fly {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation-name: fly;
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
  .animation-scale {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation-name: scale;
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
  .postcard-image {
    display: block;
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    margin: auto;
    pointer-events: none;
  }
  .postcard-footer {
    position: relative;
    bottom: 18px;
    width: 186px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .postcard-footer__from,
  .postcard-footer__to {
    height: 28px;
  }
  .gift-sign {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    border-bottom: dotted 3px #f9f9f9aa;
  }
  .gift-title {
    color: #f9f9f9;
    font-weight: 800;
    font-size: 11px;
  }
  .gift-mailer {
    font-family: "Gloria Hallelujah", "Comfortaa", Arial, Helvetica, sans-serif;
    color: #f65a5f;
    font-weight: 800;
    font-size: 14px;
  }
  .a-link {
    font-weight: bold;
    color: #f65a5f;
    text-decoration: inherit;
    transition: color 0.25s;
    transition: font-size 0.25s;
    font-family: "Gloria Hallelujah", "Comfortaa", Arial, Helvetica, sans-serif;
  }
  .a-link:hover {
    color: #fcd9ec;
    font-size: 15px;
  }
</style>
