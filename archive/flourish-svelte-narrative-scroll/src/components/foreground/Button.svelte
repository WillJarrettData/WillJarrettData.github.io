<script>
    export let label;
    export let onClick;
    export let selected = false;
  </script>
  
<button
    class="button {selected ? 'selected' : ''}"
    on:click={onClick}
>
    {label}
</button>
  
<style>
    .button {
        font-family: "Space Mono", monospace;
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        padding: 0.5rem 1rem;
        cursor: pointer;
        border-color: #FFFFFF #151515 #151515 #FFFFFF;
        border-style: solid;
        user-select: none;
    }
  
    .button:hover {
        background-color: #e0e0e0;
    }
  
    .button:active {
        background: #cccccc;
    }
  
    .button.selected {
        background-color: #cccccc;
        border-color: #151515 #FFFFFF #FFFFFF #151515;
    }
  
    @media (min-width: 400px) {
        .button {
            flex: 0 1 auto;
            max-width: none;
        }
    }
</style>