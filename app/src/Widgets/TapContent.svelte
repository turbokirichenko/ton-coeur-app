<script>
  import { userData } from "../Entities/User";
</script>

<div
  on:pointerdown={() => {
    userData.clicked++;
  }}
  class="tap-content"
>
  <div class="tap-content__window">
    <slot name="content" />
  </div>
  <div class="tap-content__button">
    <slot name="button" />
  </div>
</div>

<style>
  .tap-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 124px;
    align-items: center;
  }
  .tap-content__window {
    width: 260px;
    height: 360px;
  }
  .tap-content__button {
    width: 260px;
    height: 81px;
  }

  @media (max-height: 460px) {
    .tap-content {
      justify-content: space-around;
      gap: 0;
    }
  }
</style>
