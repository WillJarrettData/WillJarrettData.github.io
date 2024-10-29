<script>
    import { chartTimelineSearchTerm, chartTimelineSelectedData } from "../../../lib/stores.js";
    let search = "";

    function handleSearch() {
        chartTimelineSearchTerm.set(search);
        chartTimelineSelectedData.set(null);
    }
    $: search = $chartTimelineSearchTerm;
</script>

<div id="search-container">
    <input
        id="search-bar"
        type="text"
        bind:value={search}
        placeholder="Search..."
        on:input={handleSearch}
        autocomplete="off"
    >

</div>

<style>
    #search-container {
        display: flex;
        padding: 10px 0 10px 0;
    }
    #search-bar {
        height: 40px;
        box-sizing: border-box;
        font-size: 16px;
    }
    #search-bar {
        border: 1px solid #ccc;
        border-radius: 5px 0 0 5px;
        padding: 0 10px;
        width: 100%;
    }
</style>