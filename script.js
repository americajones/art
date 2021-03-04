var toggleBox = document.querySelector(".toggle");
var galleryBox = document.querySelector(".gallery");
var picBox = document.querySelector(".pic-box");
var bg = document.querySelector("body");
var clickname = document.querySelector(".main");

//if toggle clicked, change bg colors
function nightDayToggle() {
  console.log("yo");
  bg.classList.toggle("day-background");
  galleryBox.classList.toggle("day-background");
}

toggleBox.addEventListener("click", function () {
  nightDayToggle();
});

const mainImages = [
  {
    name: "nightmare magazine",
    url: "images/nightmare.jpg",
    description: "digi cover",
    year: "2017",
    tagged: ["cover", "published"],
  },

  {
    name: "quantum nothing",
    url: "images/msaugust.jpg",
    description: "digi editorial piece",
    year: "2019",
    tagged: ["portfolio", "editorial", "msj"],
  },
  {
    name: "heliophagus 1",
    url: "images/5.jpg",
    description: "digi",
    year: "2020",
    tagged: ["fanart"],
  },
  {
    name: "off the shelf",
    url: "images/eclipsed.png",
    description: "digi editorial piece",
    year: "2019",
    tagged: ["portfolio", "editorial", "msj"],
  },
  {
    name: "the day i saved the science fair",
    url: "images/msj3.jpg",
    description: "digi editorial piece",
    year: "2019",
    tagged: ["portfolio", "editorial", "msj"],
  },
  {
    name: "heros",
    url: "images/IMG_5191.jpg",
    description: "digi poster",
    year: "2019",
    tagged: ["portfolio", "fanart"],
  },
  {
    name: "heliophagus",
    url: "images/2.jpg",
    description: "digi gift",
    year: "2019",
    tagged: ["portfolio", "cover"],
  },
  {
    name: "possess",
    url: "images/possess.jpg",
    description: "digi private commission",
    year: "2019",
    tagged: ["painting"],
  },
  {
    name: "dummy box",
    url: "images/dummybox.jpg",
    description: "digi Netrunner Illustration",
    year: "2016",
    tagged: ["portfolio", "painting", "netrunner"],
  },
  {
    name: "for steph",
    url: "images/IMG_1858.jpg",
    description: "gift",
    year: "2019",
    tagged: ["portfolio", "sketchbook"],
  },
  {
    name: "juicy peach",
    url: "images/IMG_7496.jpg",
    description: "digi poster",
    year: "2019",
    tagged: ["portfolio", "fanart"],
  },
  {
    name: "hannibal poster",
    url: "images/hannibal2low.jpg",
    description: "digi poster",
    year: "2017",
    tagged: ["fanart"],
  },
  {
    name: "offering",
    url: "images/image12.jpg",
    description: "digi",
    year: "2016",
    tagged: ["painting"],
  },
  {
    name: "MSJ cover metal squid",
    url: "images/MSJautumn2018.jpg",
    description: "digi cover",
    year: "2018",
    tagged: ["cover"],
  },

  {
    name: "MSJ cover rust portrait",
    url: "images/IMG_7543.jpg",
    description: "cover",
    year: "2016",
    tagged: ["cover"],
  },
  {
    name: "MSJ cover bunny blobs",
    url: "images/IMG_7541.jpg",
    description: "cover",
    year: "2017",
    tagged: ["cover"],
  },
  {
    name: "MSJ cover autopsy",
    url: "images/IMG_7542.jpg",
    description: "cover",
    year: "2016",
    tagged: ["cover"],
  },
  {
    name: "snowflake war journal",
    url: "images/IMG_7544.png",
    description: "digi cover",
    year: "2017",
    tagged: ["cover"],
  },
  {
    name: "fitting in",
    url: "images/IMG_7545.jpg",
    description: "digi cover",
    year: "2017",
    tagged: ["cover"],
  },
  {
    name: "stamp bird",
    url: "images/IMG_8399.jpg",
    description: "trad stamp",
    year: "2021",
    tagged: ["carved"],
  },
  {
    name: "stamp bird2",
    url: "images/IMG_8403.jpg",
    description: "trad stamp",
    year: "2021",
    tagged: ["carved"],
  },
  {
    name: "for nadia",
    url: "images/IMG_6570.jpg",
    description: "trad stamp",
    year: "2020",
    tagged: ["carved"],
  },
  {
    name: "self portrait",
    url: "images/IMG_2738.jpg",
    description: "trad stamp",
    year: "2019",
    tagged: ["carved"],
  },
  {
    name: "succ",
    url: "images/IMG_0003.jpg",
    description: "trad oil",
    year: "2019",
    tagged: ["painting"],
  },
  {
    name: "for mom",
    url: "images/IMG_1413.jpg",
    description: "trad oil",
    year: "2019",
    tagged: ["painting"],
  },
  {
    name: "stamp weeb",
    url: "images/IMG_6667.jpg",
    description: "trad stamp",
    year: "2021",
    tagged: ["carved"],
  },
  {
    name: "twice",
    url: "images/16.jpg",
    description: "digi",
    year: "2020",
    tagged: ["sketchbook"],
  },
  {
    name: "tamaki",
    url: "images/tama.jpg",
    description: "digi",
    year: "2020",
    tagged: ["sketchbook"],
  },
  {
    name: "lil devil",
    url: "images/IMG_1748.jpg",
    description: "digi",
    year: "2020",
    tagged: ["sketchbook"],
  },
  {
    name: "drool",
    url: "images/IMG_1863.jpg",
    description: "digi",
    year: "2020",
    tagged: ["sketchbook"],
  },
  {
    name: "fight",
    url: "images/32.jpg",
    description: "digi",
    year: "2017",
    tagged: ["sketchbook"],
  },
  {
    name: "dead",
    url: "images/goshis3full.jpg",
    description: "digi",
    year: "2017",
    tagged: ["sketchbook"],
  },
  {
    name: "stare",
    url: "images/image6.png",
    description: "digi",
    year: "2017",
    tagged: ["sketchbook"],
  },
];

//main page filters:
function displayMain() {
  picBox.textContent = "";
  const portfolio = mainImages.filter(function (e) {
    if (e.tagged.includes("portfolio")) {
      return e;
    }
  });
  portfolio.forEach((pic) => {
    var imageBox = document.createElement("img");
    imageBox.classList.add("pic");
    imageBox.src = pic.url;
    picBox.append(imageBox);
  });
}
//load on main page only
if (document.title == "America Jones Portfolio") {
  displayMain();
}
if (document.title == "America Jones Archive") {
  displayAll();
}

var coversDiv = document.querySelector(".covers");
var stampsDiv = document.querySelector(".stamps");
var torialsDiv = document.querySelector(".editorials");

function displayCovers() {
  picBox.textContent = "";
  const covers = mainImages.filter(function (e) {
    if (e.tagged.includes("cover")) {
      return e;
    }
  });
  covers.forEach((pic) => {
    var imageBox = document.createElement("img");
    imageBox.classList.add("pic");
    imageBox.src = pic.url;
    picBox.append(imageBox);
  });
}

function displayStamps() {
  picBox.textContent = "";
  const stamps = mainImages.filter(function (e) {
    if (e.tagged.includes("carved")) {
      return e;
    }
  });
  stamps.forEach((pic) => {
    var imageBox = document.createElement("img");
    imageBox.classList.add("pic");
    imageBox.src = pic.url;
    picBox.append(imageBox);
  });
}

function displayTories() {
  picBox.textContent = "";
  const torials = mainImages.filter(function (e) {
    if (e.tagged.includes("editorial")) {
      return e;
    }
  });
  torials.forEach((pic) => {
    var imageBox = document.createElement("img");
    imageBox.classList.add("pic");
    imageBox.src = pic.url;
    picBox.append(imageBox);
  });
}

clickname.addEventListener("click", function () {
  displayMain();
});
coversDiv.addEventListener("click", function () {
  displayCovers();
});
stampsDiv.addEventListener("click", function () {
  displayStamps();
});
torialsDiv.addEventListener("click", function () {
  displayTories();
});

//archive filters:

function displayAll() {
  picBox.textContent = "";
  //add div class .pic
  for (var i = 0; i < mainImages.length; i++) {
    var imageBox = document.createElement("img");
    imageBox.classList.add("pic");
    imageBox.src = mainImages[i].url;
    picBox.append(imageBox);
  }
}

function displayDigital() {
  picBox.textContent = "";
  const torials = mainImages.filter(function (e) {
    if (e.description.includes("digi")) {
      return e;
    }
  });
  torials.forEach((pic) => {
    var imageBox = document.createElement("img");
    imageBox.classList.add("pic");
    imageBox.src = pic.url;
    picBox.append(imageBox);
  });
}
function displayTraditional() {
  picBox.textContent = "";
  const torials = mainImages.filter(function (e) {
    if (e.description.includes("trad")) {
      return e;
    }
  });
  torials.forEach((pic) => {
    var imageBox = document.createElement("img");
    imageBox.classList.add("pic");
    imageBox.src = pic.url;
    picBox.append(imageBox);
  });
}
function displaySketches() {
  picBox.textContent = "";
  const covers = mainImages.filter(function (e) {
    if (e.tagged.includes("sketchbook")) {
      return e;
    }
  });
  covers.forEach((pic) => {
    var imageBox = document.createElement("img");
    imageBox.classList.add("pic");
    imageBox.src = pic.url;
    picBox.append(imageBox);
  });
}
