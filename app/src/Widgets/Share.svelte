<script>
  import NicknameForm from "./NicknameForm.svelte";
</script>

<section class="share">
  <div class="share__title">
    <h3>Preparing gift...</h3>
  </div>
  <div class="share__description">
    <p>
      Please enter the <strong class="strong">nickname</strong> of the person
      who will <strong class="strong">receive</strong> the gift
    </p>
  </div>
  <div class="share__form">
    <div class="share-form">
      <NicknameForm />
    </div>
  </div>
</section>

<style>
  .share {
    display: flex;
    flex-direction: column;
    gap: 13px;
    align-items: center;
  }
  .share__title {
    width: 240px;
  }
  .share__description {
    width: 210px;
  }
  .share__form {
    height: 360px;
  }
  .strong {
    font-weight: bold;
    color: #f9f9f9;
  }
</style>
