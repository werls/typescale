<script>
  import { typeScale, inputText } from "../stores.js";
</script>

<div class="bg-slate-300 p-3 mr-3">
  {#each $typeScale.headings as item}
    <div class="line-clamp-1" style="font-size: {item.size * .5}px">{$inputText}</div>
  {/each}
  <!-- <div style="font-size: {typeScale.body.size}px">{$inputText}</div> -->
  <!-- <LineOfType item={$typeScale.body}>{$inputText}</LineOfType> -->
</div>
