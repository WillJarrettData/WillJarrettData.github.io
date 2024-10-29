
<div class="outro">
    <hr class="divider" />
    <h3 class="outro-subtitle">More content</h3>
    <div class="column-container">
        <a class="outro-link" href="https://www.example.com/" target="_blank">
            <div class="column">
                <img class="outro-img" src="/img/img_1.jpg" alt="placeholder" />
                <h3 class="outro-header">Case study 2</h3>
                <p class="outro-text">Here is some text about this link. Here is some text about this link.</p>
            </div>
        </a>
        <a class="outro-link" href="https://www.example.com/" target="_blank">
            <div class="column">
                <img class="outro-img" src="/img/img_2.jpg" alt="placeholder" />
                <h3 class="outro-header">Case study 3</h3>
                <p class="outro-text">Here is some text about this link. Here is some text about this link.</p>
            </div>
        </a>
        <a class="outro-link" href="https://www.example.com/" target="_blank">
            <div class="column">
                <img class="outro-img" src="/img/img_3.jpg" alt="placeholder" />
                <h3 class="outro-header">Explore tool</h3>
                <p class="outro-text">Here is some text about this link. Here is some text about this link.</p>
            </div>
        </a>
    </div>
    <hr class="divider" />
    <p class="outro-methodology">Here is some text about the methodology. Here is some text about the methodology. Here is some text about the methodology. Here is some text about the methodology. Here is some text about the methodology. Here is some text about the methodology. Here is some text about the methodology. Here is some text about the methodology.</p>
</div>

<style>
    a {
        text-decoration: none;
    }

    .outro {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: left;
        min-height: 400px;
        width: 80%;
        margin: auto;
    }

    .outro-subtitle {
        font-family: "Space Mono", monospace;
        font-size: 14pt;
        color: #000000;
        margin-top: 0;
    }

    .outro-img {
        width: 100%;
        height: auto;
        max-height: 150px;
        object-fit: cover;
    }

    .outro-header {
        font-family: "Space Mono", monospace;
        font-size: 16pt;
        color: #000000;
        margin-top: 0;
    }

    .outro-text {
        font-family: "Space Mono", monospace;
        font-size: 12pt;
        color: #000000;
    }

    .outro-methodology {
        font-family: "Space Mono", monospace;
        font-size: 8pt;
        color: #666;
    }

    .column-container {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin-top: 0.5rem;
    }

    .column {
        flex: 1;
    }

    @media (max-width: 768px) {
        .outro {
            width: 95%;
        }

        .column-container {
            flex-direction: column;
        }
    }

    .divider {
        width: 100%;
        height: 1px;
        background-color: #999;
        margin: 20px 0 20px 0;
    }

</style>