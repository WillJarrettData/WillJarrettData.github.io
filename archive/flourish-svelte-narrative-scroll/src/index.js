import App from './App.svelte';

export var data = {};

export var state = {
    source: "Lots of places",
    source_url: "https://www.google.com/"
};

let app;

export function draw() {
  state.data = data.misinfo;
  app = new App({
    target: document.body,
    props: state
  });

  update();

  const appContainer = document.getElementsByTagName('main')[0];
  if (appContainer) {
    const resizeObserver = new ResizeObserver(setHeight);
    resizeObserver.observe(appContainer);
  }
}

export function update() {
  app.$set(state);
  setHeight();
}

function setHeight() {
  const appContainer = document.getElementsByTagName('main')[0];
  if (appContainer) {
    const height = appContainer.getBoundingClientRect().height;
    Flourish.setHeight(height);
  }
}
