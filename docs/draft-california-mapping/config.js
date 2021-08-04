let topTitleDiv = "<h4>Wednesday 4th August 2021</h4>";

let titleDiv =
  "<h1>Gas plants that emit harmful pollutants are focused in disadvantaged communities.</h1>";

let bylineDiv = "<p>By Will Jarrett, Eromo Egbejule, and Harrison Connery</p>";

let descriptionDiv =
  '<p>Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants.</p>' +
  '<p>Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants.</p>' +
  '<p>Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants.</p>' +
  '<p>Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants.</p>' +
  '<p>Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants.</p>';

let footerDiv =
  '<p>This story is based on <a href="https://ampd.epa.gov/ampd/">EPA power plant data</a> and California’s <a href="https://oehha.ca.gov/calenviroscreen/report/calenviroscreen-30">CalEnviroScreen</a>.</p>' +
  '<p><a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://willjarrettdata.github.io/">Will Jarrett Data</a></p>';

  let divChapter1 =
  "<h3>Gas power and political power</h3>" +
  '<img src="images/GasPlant_SantaClara.jpg">' +
  '<p class="imageCredit"><a href="https://unsplash.com/photos/bv2pvCGMtzg">American Public Power Association</a></p>' +
  '<p>Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants.</p>';

let divChapter2 =
  "<h3>Pollution in Los Angeles</h3>" +
  '<img src="images/Pollution_LosAngeles.jpg">' +
  '<p class="imageCredit"><a href="https://unsplash.com/photos/I8dvywXBqS0">Andrea Leopardi</a></p>' +
  '<p>Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants.</p>';

let divChapter3 =
  "<h3>Thousands live close to Magnolia</h3>" +
  '<img src="images/MagnoliaPowerPlant.jpg">' +
  '<p class="imageCredit"><a href="https://www.google.com/earth/download/gep/agree.html?hl=en-GB">Google Earth Pro</a></p>' +
  '<p>Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants.</p>' +
  '<p>Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants.</p>';
 
let divChapter4 =
  '<img style="margin:0;" src="images/Magnolia.jpg">' +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants.</p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants.</p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants.</p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants.</p>" +
  '<div style="margin-left:200; margin-right:200;"><img src="images/GasPlantUnitBuilds.svg"></div>' +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants.</p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants.</p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>Opening copy all about power plants. Opening copy all about power plants. Opening copy all about power plants.</p>";

var config = {
  style: "mapbox://styles/willjarrett/ckrwbjcka1p1p18qgvx2lnldy",
  accessToken:
    "pk.eyJ1Ijoid2lsbGphcnJldHQiLCJhIjoiY2tyd2NrcGxhMGZkeTJvb2U1djdjcWhjciJ9.ZW7zFyP-Ye5TDLa1hXmXQg",
  showMarkers: false,
  markerColor: "#3FB1CE",
  theme: "light",
  use3dTerrain: false,
  topTitle: topTitleDiv,
  title: titleDiv,
  subtitle: "",
  byline: bylineDiv,
  description: descriptionDiv,
  footer: footerDiv,
  chapters: [
    {
      id: "overallMap",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter1,
      location: {
        center: [-123, 36.7],
        zoom: 5,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "gasPlantData",
          opacity: 1,
          duration: 100,
        },
      ],
      onChapterExit: [
        {
          layer: "gasPlantData",
          opacity: 0,
          duration: 100,
        },
      ],
    },
    {
      id: "LosAngeles",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter2,
      location: {
        center: [-118.315, 34],
        zoom: 9,
        zoomSmall: 14,
        pitch: 40,
        bearing: -7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "gasPlantData",
          opacity: 1,
          duration: 100,
        },
      ],
      onChapterExit: [
        {
          layer: "gasPlantData",
          opacity: 0,
          duration: 100,
        },
      ],
    },
    {
      id: "AESAlamitos",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3,
      location: {
        center: [-118.3166, 34.177],
        zoom: 16,
        zoomSmall: 20,
        pitch: 0,
        bearing: -20,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "gasPlantData",
          opacity: 0,
          duration: 100,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "satellite",
      alignment: "full",
      chapterDiv: divChapter4,
    },
  ],
};