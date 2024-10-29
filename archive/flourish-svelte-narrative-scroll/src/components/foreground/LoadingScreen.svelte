
<div class="container">
    <p class="subtitle"><span class="loader"></span> <span class="text">Loading…</span></p>
</div>

<style>
    .text {
        padding: 0 0 0 20px;
    }
    .container {
        position: absolute;
        transition: all 0.5s;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background-color: #000;
        color: #fff;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
    
    .subtitle {
        display: flex;
        align-items: center;
        font-family: "Pixelify Sans", sans-serif;
        font-weight: 400;
        font-size: 36pt;
        margin: 0;
    }
    
    .loader {
        width: 48px;
        height: 48px;
        border: 10px solid;
        border-color: #ffffff transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 2s linear infinite;
        margin-left: 10px; 
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
