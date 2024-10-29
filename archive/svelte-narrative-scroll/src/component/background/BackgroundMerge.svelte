<script>
    import { onMount } from 'svelte';
    import { rgbStringToObject, interpolateColor } from '../../lib/utils.js';
    export let startColor = "rgb(255, 255, 255)";
    export let endColor = "rgb(0, 0, 0)";
    export let height = 2000;

    let canvas;
    let windowWidth;

    onMount(() => {
        generatePixels();
    });
    
    function generatePixels() {
        let pixelsWidth = canvas ? canvas.clientWidth : 0;
        const ctx = canvas.getContext('2d');
        // pixels in each row, depends on window width
        const grid = windowWidth < 768 ? 50 : 150;
        const pW = Math.floor(pixelsWidth / grid) + 1;
        const pH = pW;
        const rows = Math.floor(height / pH); // number of rows

        // adjust canvas height to fit all rows
        const totalHeight = rows * pH;
        canvas.width = pixelsWidth;
        canvas.height = totalHeight;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // draw each pixel as a filled rectangle
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < grid; j++) {

                let randomScale = Math.random() * (-0.2 + (0.4 * (i / (rows - 1))));
                let randomExtraJuice = (Math.random() - 1) / 10;
                let randomFactor = (randomScale - randomExtraJuice);

                let baseFactor = i / rows;
                let finalFactor = Math.min(1, Math.max(0, baseFactor + randomFactor));

                // interpolate between startColor and endColor
                const interpolatedColor = interpolateColor(rgbStringToObject(startColor), rgbStringToObject(endColor), finalFactor);

                ctx.fillStyle = `rgb(${interpolatedColor.r}, ${interpolatedColor.g}, ${interpolatedColor.b})`;
                ctx.fillRect(j * pW, i * pH, pW, pH);
            }
        }
    }

</script>

<div class="canvas-container">
    <canvas
        id="pixelCanvas"
        bind:this={canvas}
        bind:clientWidth={windowWidth}
    ></canvas>
</div>

<slot></slot>

<style>
    canvas {
        width: 100%;
        display: block;
        z-index:-1000;
    }
    
    .canvas-container {
        height: 100%; 
    }
</style>
