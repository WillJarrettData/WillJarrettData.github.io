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
  "<p>All around the city subway ridership plummeted during the first two weeks of the Covid-19 outbreak. On average, stations saw a decrease of more than 50% in entries and exits between March 6th and March 20th, 2020. But as this map shows, the drop in ridership did not happen uniformly throughout the city.</p>";

let divChapter2 =
  "<h3>Pollution in Los Angeles</h3>" +
  '<img src="images/Pollution_LosAngeles.jpg">' +
  '<p class="imageCredit"><a href="https://unsplash.com/photos/I8dvywXBqS0">Andrea Leopardi</a></p>' +
  "<p>Income inequality certainly played a role in the uneven distribution of subway usage. By overlaying median household income and change in subway entries it becomes clear that those stations with less change are located in low-income areas, specially in the Bronx and outer Queens and Brooklyn.</p>";

let divChapter3 =
  "<h3>The epicenter of the outbreak</h3>" +
  '<img src="images/Chapter_3_Image.jpg">' +
  '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>Elmhurst Hospital Center has been identified as one of the hospitals most overwhelmed by the number of patients with COVID-19 it has received. Located in a low-middle-income area of the city, with a median household income of around $50,000, the hospital serves one of the most diverse and immigrant dense areas of the city. The three subway stations around the hospital have all seen relatively small change in their usage compare to the rest of the city.</p>";

let divChapter4 =
  "<h3 style='max-width:600px; margin-left:auto; margin-right:auto'>Overall collapse of subway usage</h3>" +
  '<div style="max-width:1200px; margin-left:auto; margin-right:auto"><img src="images/WeekdaySubway.svg"></div>' +
  "<p class='imageCredit' style='max-width:600px; margin-left:auto; margin-right:auto'><a href='https://qri.cloud/nyc-transit-data/turnstile_daily_counts_2020'>NYC Subway Turnstile Counts - 2020 (Qri)</a></p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>As can be seen in the chart above, subway usage collapsed abruptly right after the first COVID-19 case was documented in the city. It was in fact the declaration of a state of emergency, on March 7, 2020, that precipitated this near total drop in subway ridership.</p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>After a few weeks of the declaration of state of emergency, subway usage in the city reached its lowest point, almost 90% less than the same time period the year before. Since then, the number of people that use the subway has remained drastically low. Even after the city began its re-opening scheme on June 8, 2020, subway usage was still more than 70% below 2019 levels.</p>" +
  '<div style="max-width:600px; margin-left:auto; margin-right:auto"><iframe title="vimeo-player" src="https://player.vimeo.com/video/529512696" width="600" height="277.5" frameborder="0" allowfullscreen></iframe></div>' +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>This difference, however, varies across the city, with some parts of it seeing a much steeper decline and others witnessing a stronger recovery. Nevertheless, even a year after the pandemic first hit New York City, the number of daily subway commuters remains below 2019 levels.</p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>That being said, other transportation networks have fared differently. For example, after a similar decline right after the state of emergency was declared, Citibike has seen its number of users reach and even surpass 2019 levels. City buses, on the other hand, also remain underutilized compared to their usage pre-pandemic.</p>";

let divChapter5 =
  "<h3>The South Bronx, as Always</h3>" +
  '<img src="images/Chapter_4_Image.jpg">' +
  '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>The South Bronx, perennially marred in social injustice, has also been hard hit during the current COVID-19 outbreak. The area's three main neighborhoods, Mott Haven, Melrose and Port Morris are mostly home to low-income families that have been forced to continue going to work, risking their health and that of their loved ones. Similarly to Jackson Heights in Queens, the areas subway stations have seen a smaller decrease in use than the rest of the city. Median household income in this area oscillates between $15,000 and $30,000.</p>";

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
        center: [-119.4, 36.7],
        zoom: 5,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
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
        center: [-118.2437, 34],
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
          layer: "medianIncome",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "elmhurstHospital",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3,
      location: {
        center: [-118.2437, 34],
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
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "weekdayTrips",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter4,
      location: {
        center: [-73.886201, 40.744566],
        zoom: 16,
        zoomSmall: 14,
        pitch: 40,
        bearing: -7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "southBronx",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter5,
      location: {
        center: [-73.918037, 40.816093],
        zoom: 15,
        zoomSmall: 14,
        pitch: 40,
        bearing: 8,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
  ],
};