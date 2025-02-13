<script>
  import Background from "../Widgets/Background.svelte";
  import { windowStateByGrade } from "../Shared/Config/rules";
  import ViewContent from "../Widgets/ViewContent.svelte";
  import ViewNavPanel from "../Widgets/ViewNavPanel.svelte";
  import { userData } from "../Entities/User";
  const { signature } = $props();
</script>

{#await userData.validate(signature) then result}
  <main class="view-page">
    <Background background={windowStateByGrade[result.grade].background} />
    <section class="view-page__content">
      <ViewContent
        postcardInfo={{
          ...windowStateByGrade[result.grade].postcard,
          fadeOpt: { duration: 2000 },
          clicked: result.count,
          from: result.from,
          to: result.to,
          grade: result.grade,
        }}
      />
    </section>
    <header class="view-page__header">
      <ViewNavPanel />
    </header>
  </main>
{:catch}
  <div>
    <h3>404</h3>
  </div>
{/await}

<style>
  .view-page {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .view-page__header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
  }
  .view-page__content {
    margin: auto;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
</style>
