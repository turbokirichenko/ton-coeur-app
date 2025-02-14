<script>
  import Play from "/button/play.png";
  import WebApp from "@twa-dev/sdk";
  var { clear } = $props();

  function onclick(event) {
    clear();
  }

  let avatar = $state({ src: null });
  try {
    avatar.src = WebApp.initDataUnsafe.user.photo_url;
  } catch (err) {
    avatar.src = null;
  }
</script>

<nav class="nav-panel">
  <div class="nav-panel__buttons">
    <button class="un-btn count" {onclick}>
      <img
        class="nav-img scaling"
        src={Play}
        width="18px"
        height="18px"
        alt="share"
      />
      <span class="count-text">make your own</span>
    </button>
  </div>
  <div class="nav-panel__userinfo">
    {#if avatar.src === null}
      <div class="avatar"></div>
    {:else}
      <img
        src={avatar.src}
        width="36px"
        height="36px"
        class="avatar"
        alt="avatar"
      />
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
  .un-btn {
    all: unset;
    cursor: pointer;
  }
  .count {
    position: absolute;
    top: 22px;
    left: 21px;
    z-index: 100;
    min-width: 152px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2px;
    justify-content: flex-end;
    background-color: #00000088;
    border-radius: 15px;
    height: 36px;
    padding: 0px 12px;
  }
  .nav-img {
    margin: 0;
    padding: 0;
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 20px;
    background: none;
    position: relative;
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
