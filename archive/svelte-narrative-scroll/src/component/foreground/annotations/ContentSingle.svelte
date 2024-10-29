<script>
    export let contentType;
    export let id;
    export let imgPath = "/img/placeholder.jpg";
    export let top;
    export let left;
    export let width = 200;
    export let height = 200;
    export let alt = "Decoration";
</script>

<div class="content-wrapper"
    id={id}
    style="top: {top}px;
    left: {left}px;
    width: {width}px;
    height: {height}px;">
    <div class="content-header">Content here</div>
    <div class="content-body">
        {#if contentType === "img"}
            <img class="content-img" src={imgPath} alt={alt} draggable=false />
        {/if}
    </div>
</div>

<style>
    .content-wrapper {
        position: absolute;
        background-color: #f2f2f2;
        border-width: 2px;
        border-color: #FFFFFF #151515 #151515 #FFFFFF;
        border-style: solid;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
    .content-header {
        background-color: #0615a1;
        min-height: 40px;
        text-align: center;
        color: white;
        padding: 10px 0 0 0;
    }
    .content-img {
        max-width: 100%;
        max-height: 100%;
        display: block;
        margin:auto;
        object-fit:cover;
    }
</style>