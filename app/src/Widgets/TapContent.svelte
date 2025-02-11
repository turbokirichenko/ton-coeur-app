<script>
  import { userData } from "../Entities/User";
</script>

<div class="tap-content no-select">
  <!-- svelte-ignore slot_element_deprecated -->
  <div class="tap-content__window">
    <slot name="content" />
  </div>
  <div class="tap-content__button">
    <!-- svelte-ignore slot_element_deprecated -->
    {#if userData.grade > 0}
      <slot name="button" />
    {/if}
  </div>
</div>

<style>
  .tap-content {
    width: 100%;
    height: 100%;
    display: flex;
    padding-top: 60px;
    flex-direction: column;
    justify-content: center;
    gap: 124px;
    align-items: center;
  }
  .tap-content__window {
    width: 260px;
    height: 360px;
    position: relative;
  }
  .tap-content__button {
    width: 260px;
    height: 81px;
    position: relative;
  }

  @media (max-height: 720px) {
    .tap-content {
      justify-content: space-around;
      gap: 0;
    }
  }

  @media (max-height: 400px) {
    .tap-content {
      padding-top: 0px;
    }
  }
</style>
