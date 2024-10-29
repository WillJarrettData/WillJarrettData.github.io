<script>
    import Button from "./Button.svelte";
    import { narrativeStore } from "../../lib/stores.js";
  
    function handleIdChange(id) {
        narrativeStore.set(id);
    }
</script>
  
<div class="button-container">
    <Button
        label="Case study 2"
        onClick={() => handleIdChange('narrative1')}
        selected={$narrativeStore === 'narrative1'}
    />
    <Button
        label="Case study 3"
        onClick={() => handleIdChange('narrative2')}
        selected={$narrativeStore === 'narrative2'}
    />
    <Button
        label="Explore"
        onClick={() => handleIdChange('narrative3')}
        selected={$narrativeStore === 'narrative3'}
    />
</div>
  
<style>
    .button-container {
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
        padding: 50px 0;
    }
</style>
  