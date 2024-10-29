<script>
    // imports
    import { onMount } from "svelte";
	import { chartTimelineSearchTerm, chartTimelineExploreStore, scrollPositionStore, balloonJourneyLoadedStore } from "./lib/stores.js";

    import BackgroundMerge from "./components/background/BackgroundMerge.svelte"
    import BackgroundColor from "./components/background/BackgroundColor.svelte"

    import LoadingScreen from "./components/foreground/LoadingScreen.svelte"
    import Balloon from "./components/foreground/Balloon.svelte"
    import ChartTimeline from "./components/foreground/chart-timeline/ChartTimeline.svelte";
    import ParallaxPopUps from "./components/foreground/ParallaxPopUps.svelte";
    import Text from "./components/foreground/annotations/Text.svelte";
    import ContentGroup from "./components/foreground/annotations/ContentGroup.svelte";
    import Intro from "./components/foreground/Intro.svelte";
    import Outro from "./components/foreground/Outro.svelte";

    import Scroller from "./components/layout/Scroller.svelte";
    import SearchBar from "./components/foreground/chart-timeline/SearchBar.svelte";

    // variables
    export let data;
    let pageWidth;
    let pageHeight;
    let scrollY;
    let backgroundColors = {
        "color0": "rgb(255, 255, 255)",
        "color1": "rgb(100, 66, 238)",
        "color2": "rgb(255, 255, 255)",
        "color3": "rgb(0, 0, 0)"
    }
	let id = "chart01";
    const imgPrefix = Flourish.static_prefix;

    onMount(() => {
        balloonJourneyLoadedStore.set(true);
    });

    // config
    $: scrollPositionStore.set(scrollY);

    const threshold = 0.65;
    const actions = {
        chart: {
            chart01: { searchTerm: "", explore: true },
            chart02: { searchTerm: "wind", explore: true },
			chart03: { searchTerm: "climate", explore: true },
            chart04: { searchTerm: "", explore: true },
			chart05: { searchTerm: "", explore: true },
        }
    };
    
	$: {
		chartTimelineSearchTerm.set(actions['chart'][id]['searchTerm']);
		chartTimelineExploreStore.set(actions['chart'][id]['explore']);
    }

</script>

<svelte:window
    bind:scrollY
    bind:innerWidth={pageWidth}
    bind:innerHeight={pageHeight}
/>

<main>

    {#if !$balloonJourneyLoadedStore}
        <LoadingScreen />
    {:else}

        <div id="whole-page">

            <Intro />

            <div id="balloon-journey">
                
                <Balloon />

                <BackgroundMerge
                    startColor={backgroundColors["color0"]}
                    endColor={backgroundColors["color1"]}
                    height={4000}
                />

                <BackgroundColor color={backgroundColors["color1"]} height={1500} >

                    <div class="columns-container">
                        <div class="column-50 top">
                            <Text id={'content-group-1'}>
                                <span slot="heading">Example Heading 1</span>
                                <span slot="text">
                                    Lots of lovely text here. Lots of lovely text here. Lots of lovely text here. Lots of lovely text here. Lots of lovely text here. Lots of lovely text here. Lots of lovely text here. Lots of lovely text here. Lots of lovely text here.
                                <br /><br />
                                    Lots of lovely text here. Lots of lovely text here. Lots of lovely text here. Lots of lovely text here. Lots of lovely text here. Lots of lovely text here. Lots of lovely text here. Lots of lovely text here. Lots of lovely text here.
                                </span>
                            </Text>
                        </div>

                        <div class="column-50 bottom">
                                <ContentGroup
                                    contentType={"img"}
                                    id={"content-group-1"}
                                    delay={500}
                                    data={[
                                        {
                                            id: "placeholder1",
                                            imgPath: imgPrefix + "/img/placeholder.jpg",
                                            alt: "Placeholder",
                                            top: 0,
                                            left: -120
                                        },
                                        {
                                            id: "placeholder2",
                                            imgPath: imgPrefix + "/img/placeholder.jpg",
                                            alt: "Placeholder",
                                            top: 100,
                                            left: 120
                                        },
                                        {
                                            id: "placeholder3",
                                            imgPath: imgPrefix + "/img/placeholder.jpg",
                                            alt: "Placeholder",
                                            top: 250,
                                            left: -120
                                        },
                                        {
                                            id: "placeholder4",
                                            imgPath: imgPrefix + "/img/placeholder.jpg",
                                            alt: "Placeholder",
                                            top: 350,
                                            left: 120
                                        }
                                    ]}
                                />
                        </div>
                    </div>
                
                </BackgroundColor>

                <BackgroundColor color={backgroundColors["color1"]} height={1500} >

                    <div class="columns-container">
                        <div class="column-50 bottom">
                                <ContentGroup
                                    contentType={"img"}
                                    id={"content-group-2"}
                                    delay={500}
                                    data={[
                                        {
                                            id: "placeholder1",
                                            imgPath: imgPrefix + "/img/placeholder.jpg",
                                            alt: "Placeholder",
                                            top: 0,
                                            left: -120
                                        },
                                        {
                                            id: "placeholder2",
                                            imgPath: imgPrefix + "/img/placeholder.jpg",
                                            alt: "Placeholder",
                                            top: 100,
                                            left: 120
                                        },
                                        {
                                            id: "placeholder3",
                                            imgPath: imgPrefix + "/img/placeholder.jpg",
                                            alt: "Placeholder",
                                            top: 250,
                                            left: -120
                                        },
                                        {
                                            id: "placeholder4",
                                            imgPath: imgPrefix + "/img/placeholder.jpg",
                                            alt: "Placeholder",
                                            top: 350,
                                            left: 120
                                        }
                                    ]}
                                />
                        </div>

                        <div class="column-50 top">
                            <Text id={"content-group-2"}>
                                <span slot="heading">Example Heading 2</span>
                                <span slot="text">
                                    Lots of lovely text here. Lots of lovely text here. Lots of lovely text here. Lots of lovely text here. Lots of lovely text here. Lots of lovely text here. Lots of lovely text here. Lots of lovely text here. Lots of lovely text here.
                                <br /><br />
                                    Lots of lovely text here. Lots of lovely text here. Lots of lovely text here. Lots of lovely text here. Lots of lovely text here. Lots of lovely text here. Lots of lovely text here. Lots of lovely text here. Lots of lovely text here.
                                </span>
                            </Text>
                        </div>
                    </div>

                </BackgroundColor>

                <BackgroundColor color={backgroundColors["color1"]} height={2000}>
                        <ParallaxPopUps
                            {data}
                            id={"parallax-popups-01"}
                            userSelect={"none"}
                            popupIds={["23", "43", "40", "4", "58", "100", "99", "113", "82", "117", "123", "81", "86", "406", "23", "43", "40", "4", "58", "100", "99", "113", "82", "117", "123", "81", "86", "406"]}
                        />
                </BackgroundColor>

                <BackgroundMerge
                    startColor={backgroundColors["color1"]}
                    endColor={backgroundColors["color2"]}
                    height={3000}
                />

                <Scroller
                    bind:id={id}
                    {threshold}
                    splitscreen={true}
                    backgroundColor={backgroundColors["color2"]}
                >

                    <div slot="background">
                        <figure>
                            <div class="col-wide height-full">
                                <ChartTimeline
                                    data={data.map(d => d.name === "Robert Reyes" ? d : null).filter(d => d)}
                                />
                            </div>
                        </figure>
                    </div>

                    <div slot="foreground">
                        <section data-id="chart01" class="scroller-section">
                            <div class="col-medium">
                                <p>
                                    Here is some text that explains the view of the first chart. Here is some text that explains the view of the first chart. Here is some text that explains the view of the first chart.
                                </p>
                            </div>
                        </section>
                        <section data-id="chart02" class="scroller-section">
                            <div class="col-medium">
                                <p>
                                    Here is some text that explains the view of the second chart. Here is some text that explains the view of the second chart. Here is some text that explains the view of the second chart.
                                </p>
                            </div>
                        </section>
                        <section data-id="chart03" class="scroller-section">
                            <div class="col-medium">
                                <p>
                                    Here is some text that explains the view of the third chart. Here is some text that explains the view of the third chart. Here is some text that explains the view of the third chart.
                                </p>
                            </div>
                        </section>
                        <section data-id="chart04" class="scroller-section">
                            <div class="col-medium">
                                <p>
                                    Here is some text that explains the view of the fourth chart. Here is some text that explains the view of the fourth chart. Here is some text that explains the view of the fourth chart.
                                </p>
                                <SearchBar />
                            </div>
                        </section>
                        <section data-id="chart05" class="scroller-section" />
                    </div>
                </Scroller>

                <BackgroundMerge
                    startColor={backgroundColors["color2"]}
                    endColor={backgroundColors["color3"]}
                    height={2000}
                />

                <BackgroundMerge
                    startColor={backgroundColors["color3"]}
                    endColor={backgroundColors["color2"]}
                    height={2000}
                />

            </div>

            <Outro />

        </div>
    {/if}

</main>

<style>
    main {
        position: relative;
        width: 100%;
        height: 100%;
        overflow:auto;
    }

    .columns-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        position: relative;
    }

    .column-50 {
        display: flex;
        justify-content: center;
        width: 50%;
        position: relative;
    }

    @media (max-width: 700px) {
        .column-50 {
            width: 100%;
            margin-bottom: 20px;
        }
        .top {
            order: 1;
        }
        .bottom {
            order: 2;
        }
    }

    .scroller-section {
        pointer-events: none;
    }
    
</style>
