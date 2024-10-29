<script>
    import { timeFormat } from "d3-time-format";
    export let xScale;
    export let padding;
    export let xTicks;

    const parseDate = timeFormat("%Y");
</script>

<g class="axis x-axis">
    {#each xTicks as tick}
        <g class="tick" transform="translate({xScale(tick)},0)">
            <!-- <line y1={padding.top - height} y2={height - padding.bottom} /> -->
            <text y={0 + padding.top - 20}>{tick}</text>
        </g>
    {/each}
</g>

<style>
    .tick text {
        font-family: "Space Mono", monospace;
		font-size: 8pt;
		fill: #999;
        text-anchor: middle;
        user-select: none;
	}
</style>