<script>
    import IntersectionObserver from "svelte-intersection-observer";
    import { onDestroy } from "svelte";
    import { animationTriggerStore } from "../../../lib/stores.js";

    export let id;
    export let iterationSpeed = 2;

    let container, heading, text;
    let animationFrame;
    let animationTriggered = false;

    const LETTERS = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split('');

    function animateText(element, originalText, iteration) {
        element.innerText = originalText
            .split("")
            .map((letter, index) => (index < iteration ? letter : LETTERS[Math.floor(Math.random() * LETTERS.length)]))
            .join("");
    }

    function runAnimation() {

        if (animationTriggered) return;
        animationTriggered = true;

        const headingText = heading?.innerText || '';
        const textText = text?.innerText || '';
        const maxIterations = Math.max(headingText.length, textText.length);
        let iteration = 0;

        const animate = () => {
            animateText(heading, headingText, iteration);
            animateText(text, textText, iteration);
            iteration += iterationSpeed;

            if (iteration <= maxIterations) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                animationTriggerStore.set(id);
                cancelAnimationFrame(animationFrame);
            }
        };

        animationFrame = requestAnimationFrame(animate);
    }

    onDestroy(() => animationFrame && cancelAnimationFrame(animationFrame));
</script>

<IntersectionObserver once element={container} on:intersect={() => runAnimation()}>
    <div class="annotation" bind:this={container}>
        <h1 bind:this={heading}><slot name="heading"></slot></h1>
        <p bind:this={text}><slot name="text"></slot></p>
    </div>
</IntersectionObserver>

<style>
    .annotation {
        position: relative;
        max-width: 500px;
        padding: 20px;
    }
    p, h1 {
        font-family: "Space Mono", monospace;
        color: #fff;
        padding: 0 20px;
    }
    h1 {
        padding-bottom: 20px;
        margin: 0;
        text-wrap-style: balance;
    }
</style>
