<script>
    import NarrativeButtons from "./NarrativeButtons.svelte";


</script>

<div class="intro">
    <div class="intro-text-container">
        <h3 class="intro-subtitle">Case study 1</h3>
        <h2 class="intro-headline">HEADLINE HERE</h2>
        <p class="intro-text">Some interesting intro copy here. Some interesting intro copy here. Some interesting intro copy here. Some interesting intro copy here. Some interesting intro copy here. Some interesting intro copy here.</p>
    </div>
    <NarrativeButtons />
</div>

<style>
    .intro {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 400px;
        text-align: center;
    }

    .intro-subtitle {
        font-family: "Space Mono", monospace;
        font-size: 14pt;
        color: #000000;
        margin: 1rem;
        padding: 100px 0 0 0;
        max-width: 500px;
    }

    .intro-headline {
        font-family: "Tiny5", sans-serif;
        font-size: 36pt;
        font-weight: 400;
        color: #000000;
        margin: 1rem;
        max-width: 500px;
    }

    .intro-text {
        font-family: "Space Mono", monospace;
        font-size: 12pt;
        color: #000000;
        margin: 1rem;
        max-width: 500px;
    }
</style>
