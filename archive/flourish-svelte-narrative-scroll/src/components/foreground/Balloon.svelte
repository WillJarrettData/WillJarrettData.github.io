<script>
    import { narrativeStore, balloonPositionStore } from "../../lib/stores.js";
    import { onMount } from 'svelte';

    const canvasWidth = 500;
    const canvasHeight = 500;
    const spriteWidth = 500;
    const spriteHeight = 500;

    let windowHeight;

    let canvas;
    let ctx;
    let animationId;
    let frameX = 0;
    let frameCount = 0;
    const staggerFrames = 25;

    // load balloon img based on narrative
    const balloonImage = new Image();
    $: balloonImage.src = `${Flourish.static_prefix}/img/balloonImages_${$narrativeStore}.png`;

    function cancelAnimation() {
        if (animationId) {
            cancelAnimationFrame(animationId); 
        }
    }

    function startAnimation() {
        function animate() {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(
                balloonImage,
                frameX * spriteWidth, 0, spriteWidth, spriteHeight,
                0, 0, spriteWidth, spriteHeight
            );

            frameCount++;
            if (frameCount % staggerFrames === 0) { // reset at end of loop
                frameX = frameX < 3 ? frameX + 1 : 0;
            }
            if (frameCount > staggerFrames * 4) { // reset framecount to stop infinite climb
                frameCount = 0;
            }

            animationId = requestAnimationFrame(animate);
        }
        animate();
    }

    onMount(() => {
        console.log('making balloon')
        ctx = canvas.getContext('2d');
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        frameCount = 0;

        balloonImage.onload = function () {
            cancelAnimation();
            startAnimation();
        };
    });

</script>

<svelte:window bind:innerHeight={windowHeight} />

<canvas
    id="canvas1"
        bind:this={canvas}
        style="left: {$balloonPositionStore.left}%;
        top: {$balloonPositionStore.top}%;"
    >
</canvas>

<style>
    #canvas1 {
        transition: all 1s ease-in-out;
        border: 0;
        background-color: transparent;
        position: sticky;
        transform: translate(-50%, 0%);
        width: 120px;
        height: 120px;
        z-index: 1000;
        pointer-events: none;
    }
</style>
