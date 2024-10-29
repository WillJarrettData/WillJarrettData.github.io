<script>
    import { timeParse } from 'd3-time-format';
    import { select, selectAll } from 'd3-selection';
    import { chartTimelineSelectedData, chartTimelineSearchTerm } from '../../../lib/stores.js';
    import { AccurateBeeswarm } from '../../../lib/utils.js';

    export let data;
    export let xScale;
    export let yScale;
    export let radiusScale;
    export let colorScale;

    let strokeWidth = "3px";
    const parseDate = timeParse("%Y-%m-%d");

    // group data by platform
    const platformsArray = [...new Set(data.map(d => d.platform))];

    // calculate beeswarm data
    let r = d => radiusScale(d.reach) + 1;
    let fn = d => yScale(parseDate(d.date));
    const beeswarmData = platformsArray.map(platform => {
        const dataForPlatform = data.filter(d => d.platform === platform);
        return new AccurateBeeswarm(dataForPlatform, r, fn)
            .calculateYPositions()
            .map(({ datum, x, y }) => ({ data: datum, x, y, platform }));
        
    });

    // hover and selection functions
    function mouseover(d) {
        let current_circle = select(`#circle-${d.id}`);
        current_circle
            .style('stroke', 'black')
            .style('stroke-width', strokeWidth);
    }

    function mouseout(d) {
        let current_circle = select(`#circle-${d.id}`);
        if (!current_circle.classed('selected')) {
            current_circle
                .style('stroke', 'none')
                .style('stroke-width', '0px');
        }
    }

    function selectData(d) {
        let current_circle = select(`#circle-${d.id}`);
        if (current_circle.classed('selected')) {
            chartTimelineSelectedData.set(null);
            return;
        } else {
            chartTimelineSelectedData.set(d);
            selectAll('.datapoint')
                .classed('selected', false)
                .style('stroke', 'none')
                .style('stroke-width', '0px')
                .style('opacity', 0.5);
            current_circle
                .classed('selected', true)
                .style('stroke', 'black')
                .style('stroke-width', strokeWidth)
                .style('opacity', 1);
        }
    }

    chartTimelineSelectedData.subscribe(value => {
        if (value === null) {
            selectAll('.datapoint')
                .classed('selected', false)
                .style('stroke', 'none')
                .style('stroke-width', '0px')
                .style('opacity', 0.8);
        }
    });

</script>

{#if data}
    {#each platformsArray as platform}
        {#each data.filter(d => d.platform === platform) as d, i}
            {#if xScale(d.platform) && beeswarmData.find(data => data[0].platform === platform)[i]}
                <circle 
                    role="button"
                    tabindex="0"
                    class="datapoint"
                    id={`circle-${d.id}`}
                    cx={xScale(d.platform) + beeswarmData.find(data => data[0].platform === platform)[i].y}
                    cy={yScale(parseDate(d.date))}
                    r={radiusScale(d.reach)}
                    fill={d.post_text.toLowerCase().includes($chartTimelineSearchTerm.toLowerCase()) ? colorScale(d.reach) : '#e8e8e8'}
                    cursor="pointer"
                    on:click={() => selectData(d)}
                    on:keydown={(e) => {
                        if (e.key === 'Enter') {
                            selectData(d);
                        }
                    }}
                    on:mouseover={() => mouseover(d)}
                    on:mouseout={() => mouseout(d)}
                    on:blur={() => mouseout(d)}
                    on:focus={() => mouseover(d)}
                />
            {/if}
        {/each}
    {/each}
{/if}

<style>
    circle:focus {
        outline: none;
    }

    circle {
        opacity: 0.8;
        transition: fill 0.2s;
    }
</style>
