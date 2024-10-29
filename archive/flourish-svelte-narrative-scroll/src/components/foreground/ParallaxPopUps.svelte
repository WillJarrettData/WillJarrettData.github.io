<script>
    import { onMount } from 'svelte';
    import DetailsCard from "./DetailsCard.svelte";
    import { random } from "../../lib/utils.js";

    export let id;
    export let data;
    export let userSelect;
    export let popupIds;

    let rect;
    let positions = [];
    let parallaxTop;
    let parallaxHeight;

    function calculateContainerBounds() {
        parallaxTop = rect.getBoundingClientRect().top + window.scrollY;
        parallaxHeight = rect.getBoundingClientRect().height;
    }

    function generateLeft() {
        return random(0, rect.getBoundingClientRect().width - 220, 0);
    }

    function generateTop() {
        return random(0, 100, 0);
    }

    $: constrainedAbsoluteY = (scrollY) => {
        return Math.min(
            Math.max(scrollY, parallaxTop), 
            parallaxTop + parallaxHeight
        ) - parallaxTop;
    }

    onMount(() => {
        calculateContainerBounds();
        positions = popupIds.map(() => ({
            top: generateTop(),
            left: generateLeft()
        }));
    });
</script>

<svelte:window on:resize="{()=>calculateContainerBounds()}" />

<div class="parallax-popups" id="{id}" bind:this={rect}>
    {#each popupIds as id, i}
        <DetailsCard
            parallax={true}
            d={data.find(d => d.id === id)}
            id={id}
            top={positions[i]?.top}
            left={positions[i]?.left}
            originalY={constrainedAbsoluteY}
            modifier={random(0.1, 0.4, 2)}
            {userSelect}
        />
    {/each}
</div>

<style>
    .parallax-popups {
        height: 100%;
    }
</style>
