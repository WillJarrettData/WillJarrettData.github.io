<script>
    export let color = 'rgb(0, 0, 0)';
    export let height = 2000;
</script>

<div 
    class="background-color"
    style="background-color: {color}; width: 100%; height: {height}px;"
>
<slot></slot>
</div>
