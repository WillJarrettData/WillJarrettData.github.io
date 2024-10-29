<script>
    import { timeFormat } from "d3-time-format";
    export let yScale;
    export let padding;
    export let yTicks;
    export let chartWidth;

    const parseDate = timeFormat("%Y");
</script>

<g class="axis y-axis">
    {#each yTicks as tick}
        <g class="tick tick-{tick}" transform="translate(0, {yScale(tick)})">
            <line x1={padding.left} x2={chartWidth - padding.right - 20} />
            <text x={padding.left} y="-5">{parseDate(tick)}</text>
        </g>
    {/each}
</g>

<style>
    .tick text {
        font-family: "Space Mono", monospace;
		font-size: 8pt;
		fill: #999;
        user-select: none;
	}
    .y-axis text {
		text-anchor: start;
        user-select: none;
	}
	.y-label {
		font-size: 8pt;
		fill: #333;
        user-select: none;
	}
    .tick line {
        stroke: #ccc;
        stroke-dasharray: 2;
    }
</style>
