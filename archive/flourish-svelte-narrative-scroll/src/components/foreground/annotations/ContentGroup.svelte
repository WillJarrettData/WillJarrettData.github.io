<script>
    import Content from "./ContentSingle.svelte";
    import { animationTriggerStore } from "../../../lib/stores.js";
    import { fade } from "svelte/transition";

    export let contentType;
    export let id;
    export let data;
    export let delay = 300;
    let containerWidth, pageWidth;

    let ids = new Set();
    $: {
        ids = new Set([...ids, $animationTriggerStore]);
    }

    function leftPlacement(offset) {
        const elementWidth = 210;
        const buffer = 10;
        let targetLeft = (containerWidth / 2) + offset;
        if (targetLeft + elementWidth > containerWidth - buffer) {
            return containerWidth - elementWidth - buffer;
        } else if (targetLeft - (elementWidth / 2) < buffer) {
            return buffer;
        } else {
            return targetLeft - (elementWidth / 2);
        }
    }

</script>

<svelte:window bind:innerWidth={pageWidth} />

<div class="content-group-container" bind:clientWidth={containerWidth}>
    {#if contentType === "img" && ids.has(id)}
        {#each data as item, i}
            <div transition:fade={{ delay: i * delay, duration: 200 }}>
                <Content
                    {contentType}
                    id={item.id}
                    imgPath={item.imgPath}
                    alt={item.alt}
                    top={item.top}
                    left={leftPlacement(item.left)}
                ></Content>
            </div>
        {/each}
    {/if}
</div>

<style>
    .content-group-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
    }
</style>
