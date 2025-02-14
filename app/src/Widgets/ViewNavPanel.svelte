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
    <div class="count">
      <button class="nav-img scaling" {onclick}>
        <img src={Play} width="18px" height="18px" class="a-img" alt="share" />
      </button>
      <span class="count-text">make your own</span>
    </div>
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
  .count {
    min-width: 152px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0px;
    justify-content: flex-end;
    float: left;
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
  .a-img {
    display: block;
    position: absolute;
    width: 18px;
    height: 18px;
    top: 0;
    left: 0;
    z-index: 100;
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
