<script>
  import WebApp from "@twa-dev/sdk";
  import { userData } from "../Entities/User";
  import { share } from "../Shared/Plugins/share-api";
  import {
    SHARE_TEXT,
    SHARE_TITLE,
    TG_SHARE_API,
    TG_APP_LINK,
  } from "../Shared/Config/constant";
  var from = $state();
  from = getMyNickname();
  var to = $state("");
  var alertMessage = $state("");

  async function onclick(event) {
    alertMessage = "";
    if (to.length < 6) {
      alertMessage = "Min length of nickname is 5!";
      return;
    }
    if (from.length > 32 || to.length > 32) {
      alertMessage = "Max length of nickname is 32!";
      return;
    }
    if (to[0] !== "@") {
      to = `@${to}`;
    }
    const signature = await userData.gift(from, to);
    const params = `?startapp=${signature}`;
    const shareLink = `${TG_SHARE_API}${TG_APP_LINK}${params}`;
    console.log(signature);
    console.log(shareLink);
    try {
      WebApp.openTelegramLink(shareLink);
    } catch (err) {
      share(shareLink, SHARE_TITLE, SHARE_TEXT);
    }
  }

  function getMyNickname() {
    try {
      return `@${WebApp.initDataUnsafe.user.username}`;
    } catch (err) {
      return "-";
    }
  }
</script>

<div class="nickname-form">
  <div class="nickname-form__description"></div>
  <div class="nickname-form__inputs">
    <div class="postcard-footer">
      <article class="postcard-footer__from">
        <div class="gift-sign">
          <label for={from} class="gift-title">from:</label>
          <input
            name={from}
            required
            disabled
            value={from}
            class="input-mailer"
          />
        </div>
      </article>
      <article class="postcard-footer__to">
        <div class="gift-sign">
          <label for={to} class="gift-title">to:</label>
          <input
            name={to}
            bind:value={to}
            required
            placeholder="@nickname from telegram"
            class="input-mailer"
          />
        </div>
      </article>
    </div>
  </div>
  <div class="nickname-form__alert">
    {alertMessage}
  </div>
  <div class="nickname-form__confirm">
    <button {onclick} class="confirm-gift">confirm</button>
  </div>
</div>

<style>
  .nickname-form {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 190px;
    gap: 13px;
  }
  .nickname-form__alert {
    font-size: 11px;
  }
  .postcard-footer {
    position: relative;
    width: 190px;
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
    font-family: "Comfortaa", Arial, Helvetica, sans-serif;
    color: #f9f9f9;
    font-weight: 800;
    font-size: 11px;
  }
  .input-mailer {
    all: unset;
  }
  .input-mailer {
    text-align: right;
    width: 80%;
    background-color: #00000000;
    font-family: "Gloria Hallelujah", "Comfortaa", Arial, Helvetica, sans-serif;
    color: #f65a5f;
    font-weight: 800;
    font-size: 14px;
    border: none;
  }
  .input-mailer:active,
  .input-mailer:focus {
    border: none;
    font-weight: 900;
  }
  .input-mailer:disabled {
    background-color: #00000000;
  }
  .input-mailer::placeholder {
    font-family: "Gloria Hallelujah", "Comfortaa", Arial, Helvetica, sans-serif;
    color: #f65a5f80;
    font-size: 11px;
  }
  .confirm-gift {
    width: 186px;
    height: 40px;
    border-radius: 16px;
    background-color: #f07c93;
    font-family: "Comfortaa", Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #f9f9f9;
  }
</style>
