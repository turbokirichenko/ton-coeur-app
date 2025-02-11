<script>
  import { fade } from "svelte/transition";
  import { windowStateByGrade } from "../Shared/Config/rules";

  var { grade } = $props();
  var background = $derived(windowStateByGrade[grade].background);
</script>

{#key background}
  <div
    in:fade
    out:fade
    class="background-image"
    style:--gradient-left={background.linearGradient[0]}
    style:--gradient-right={background.linearGradient[1]}
    style:--background-url="url({background.url})"
  ></div>
{/key}

<style>
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: var(--background-url, url("/page/background-2.2.png")),
      linear-gradient(
        var(--gradient-left, #5e1fa5),
        var(--gradient-right, #250c42)
      );
    background-size: 14rem;
    background-repeat: repeat;
    opacity: 1;
  }
</style>
