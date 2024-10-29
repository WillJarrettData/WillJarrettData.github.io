<script>
    import { scrollPositionStore } from "../../lib/stores.js";
    import { timeFormat, timeParse } from 'd3-time-format';

    export let parallax = false;
    export let d;
    export let id;
    export let top;
    export let left;
    export let modifier = 0;
    export let originalY;
    export let userSelect = "none";
    let y;

    const parseTime = timeParse("%H:%M");
    const parseDate = timeParse("%Y-%m-%d");
    const formatTime = timeFormat("%I:%M %p");
    const formatDate = timeFormat("%b %-d, %Y");

    $: if (parallax) {
        y = originalY($scrollPositionStore) * modifier;
    } else {
        y = originalY;
    }

    const imgPrefix = Flourish.static_prefix;

</script>

<div
    id={`details-card-${id}`}
    class="details-card-container"
    style="padding: {top}px 0 0 {left}px; opacity: {1 - modifier}"
>
    <div 
        class="details-card"
        style="transform: translateY({y}px);
        user-select: {userSelect};
        -webkit-user-select: {userSelect};
        -khtml-user-select: {userSelect};
        -moz-user-select: -moz-{userSelect};
        -o-user-select: {userSelect};
        pointer-events: {userSelect};"
    >
        {#if d}
            <div class="post-title">
                <span class="post-name"><a target='_blank' href='{d.user_link}'>{d.name}</a></span>
                <span class="post-handle">{d.handle}</span>
            </div>
            <p class="post-text">{d.post_text}</p>
            <img class="post-img" src={imgPrefix + "/img/" + d.img} alt="from social media" />
            <div class="post-datetime">
                <a target='_blank' href='{d.post_link}'>
                    <span>{formatTime(parseTime(d.time))}</span> · <span>{formatDate(parseDate(d.date))}</span>
                </a>
            </div>
        {/if}
    </div>
</div>

<style>
    .details-card {
        font-family: "Koopman", sans-serif;
        max-width: 200px;
        position: absolute;
        background-color: #fff;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: #0000001f 0px 0px 7px;
    }
    .details-card-container {
        /* transition: all .5s ease-in-out; */
        align-items: center;
        justify-content: center;
    }
    .post-text {
        max-width: 300px;
        line-height: 1.25;
        font-size: 9pt;
        margin: 5px 0 5px 0;
    }
    .post-title {
        display: flex;
        align-items: left;
        overflow: hidden;
    }
    .post-name {
        text-wrap: nowrap;
        font-weight: 700;
        font-size: 10pt;
    }
    .post-name a {
        color: #000;
        text-decoration: none;
    }
    .post-name a:hover {
        text-decoration: underline;
    }
    .post-handle {
        white-space: nowrap;
        font-size: 9pt;
        padding: 0 0 0 8px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .post-img {
        object-fit: cover;
        width: 100%;
        border-radius: 10px;
    }
    .post-datetime a {
        font-size: 9pt;
        color: #666;
        text-decoration: none;
    }
    .post-datetime a:hover {
        text-decoration: underline;
    }
</style>
