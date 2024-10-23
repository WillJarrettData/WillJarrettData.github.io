import * as d3 from "d3";

export var data = {};

export var state = {
  text_box_color: "white",
  text_box_background_color: "rgba(189, 0, 54, 0.843)"
}

export function update() {
  var steps = document.getElementsByClassName("step-inner");
  for (var i = 0; i < steps.length; i++) {
    steps[i].style.color = state.text_box_color;
    steps[i].style.backgroundColor = state.text_box_background_color;
  }
  console.log("update")
}

export function draw() {
  var main = d3.select("main");
  var scrolly = main.select("#scrolly");
  var figure = scrolly.select("#figure");
  var article = scrolly.select("article");
  var step = article.selectAll(".step");
  var video = figure.select("#video").node();

  // set video src
  video.src = Flourish.static_prefix + "/video/HoL-Scrolly-telling_FULL.mp4";

  var scroller = scrollama();

  // timestamp data
  var timestamps = [
      { start: 3, end: 10 },
      { start: 11, end: 25 },
      { start: 25, end: 35 },
      { start: 35, end: 40 }
  ];

  // scrollama event handlers
  function handleStepEnter(response) {

      video.pause(); // pause the video, if it's playing
    var currentTimestamps = timestamps[response.index]; 

    if (currentTimestamps) {
      video.currentTime = currentTimestamps.start;
      if (response.direction === "down") { // if scrolling down
        video.play();
        video.ontimeupdate = function () {
          if (video.currentTime >= currentTimestamps.end) {
            video.pause();
          }
        }
      }
    };
  }

  function init() {
      scroller
          .setup({
              step: "#scrolly article .step",
              offset: 1,
              debug: false
          })
          .onStepEnter(handleStepEnter);
  }

  init();

  update();
}
