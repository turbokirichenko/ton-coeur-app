<script>
  import Share from "/button/share.png";
  import { share } from "../Shared/Plugins/share-api";
  import {
    SHARE_LINK,
    SHARE_TEXT,
    SHARE_TITLE,
  } from "../Shared/Config/constant";

  function onclick(event) {
    const link = SHARE_LINK;
    const title = SHARE_TEXT;
    const text = SHARE_TITLE;
    share(link, title, text);
  }
</script>

<nav class="nav-panel">
  <div class="nav-panel__buttons">
    <button class="nav-img" {onclick}>
      <img src={Share} width="24px" height="24px" class="a-img" alt="share" />
    </button>
  </div>
  <div class="nav-panel__userinfo">
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
    margin: 0;
    padding: 0;
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 20px;
    background: none;
  }
  .a-img {
    display: block;
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
