<script>
    export let id = "background1";
    export let src = "/img/background1.png"
</script>

<img 
    id={id}
    src={src}
    width="100%"
    alt="background"
    draggable="false"
/>

<style>
    img {
        display: block;
        user-select: none !important;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
</style>