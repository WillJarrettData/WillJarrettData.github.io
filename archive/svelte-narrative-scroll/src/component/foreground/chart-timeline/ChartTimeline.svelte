<script>
	import IntersectionObserver from "svelte-intersection-observer";
	import DetailsCard from "../DetailsCard.svelte";
	import { balloonPositionStore, chartTimelineSelectedData } from "../../../lib/stores";
	import { onMount } from 'svelte';
	import { scaleSqrt, scaleTime, scaleOrdinal } from 'd3-scale';
	import { timeParse } from 'd3-time-format';
	import { extent } from 'd3-array';
	
	import Circles from './Circles.svelte';
	import XAxis from './XAxis.svelte';
	import YAxis from './YAxis.svelte';

	export let data;

	let svg;
	let chartTimeline;
	let chartWidth = 0;
	let chartHeight = 0;
	const padding = { top: 50, right: 10, bottom: 20, left: 10 };

	let platforms, chunkOfDistance, xScale, yScale, radiusScale, colorScale, xTicks, yTicks;
	const parseDate = timeParse("%Y-%m-%d");
	let isInitialized = false;

	onMount(() => {
		chartWidth = chartTimeline.getBoundingClientRect().width;
		chartHeight = chartTimeline.getBoundingClientRect().height;

		// Set platforms and chunk distance
		platforms = [...new Set(data.map(d => d.platform))];
		chunkOfDistance = chartWidth / platforms.length;

		// Set up scales
		xScale = scaleOrdinal()
			.domain(platforms)
			.range(platforms.map((d, i) => i * chunkOfDistance + padding.left + chunkOfDistance / 2));

		yScale = scaleTime()
			.domain(extent(data, d => parseDate(d.date)))
			.range([padding.top, chartHeight - padding.bottom]);

		const minReach = Math.min(...data.map(d => d.reach));
		const maxReach = Math.max(...data.map(d => d.reach));
		const maxRadius = Math.min(chartWidth, chartHeight) / 45;

		radiusScale = scaleSqrt()
			.domain([minReach, maxReach])
			.range([1, maxRadius]);

		colorScale = scaleOrdinal()
			.domain(["not_happening", "not_humans", "not_bad", "solutions_wont_work", "scientists_unreliable"])
			.range(['#EF9679', '#FBAE3A', '#B0D67B', '#7EC5E3', '#D195C1']);

		// Set up ticks
		xTicks = platforms;
		yTicks = chartWidth > 180 ? yScale.ticks(6) : yScale.ticks(3);

		isInitialized = true;
	});

	function handleBalloonPosition(e) {
		if (e.detail.isIntersecting) {
			balloonPositionStore.set({left: 10, top: 10});
		} else {
			balloonPositionStore.set({left: 50, top: 20});
		}
		
	}
	
</script>

<div bind:this={chartTimeline} class="chart">
	{#if isInitialized}
		<IntersectionObserver element={svg} on:observe={(e) => handleBalloonPosition(e)}>
			<svg bind:this={svg} style="height: {chartHeight}px; width: {chartWidth}px;">
				<YAxis {yScale} {yTicks} {chartWidth} {padding} />
				<XAxis {xScale} {xTicks} {padding} />
				<Circles {xScale} {yScale} {radiusScale} {colorScale} {data} />
			</svg>
		</IntersectionObserver>
	{/if}

	{#if $chartTimelineSelectedData}
		<DetailsCard
			d={$chartTimelineSelectedData}
			id={`popup-${$chartTimelineSelectedData.id}`}
			top={10}
			left={document.getElementById(`circle-${$chartTimelineSelectedData.id}`).cx.baseVal.value - 100}
			originalY={document.getElementById(`circle-${$chartTimelineSelectedData.id}`).cy.baseVal.value}
		/>
	{/if}
</div>

<style>
	svg {
		width: 100%;
		float: left;
	}
	.chart {
		width: 100%;
		height: 100vh;
	}
</style>
