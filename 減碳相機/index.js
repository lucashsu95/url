// document.addEventListener("deviceready", onDeviceReady, false);
var bool = 0;
// function onDeviceReady() {
//   // Cordova is now initialized. Have fun!

//   console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
//   document.getElementById("deviceready").classList.add("ready");
// }

// Start click Btn
document.querySelectorAll(".btn").forEach((element, index) => {
  element.addEventListener("click", function () {
    console.log("index:", index);
    if (index) {
      document.querySelector(".on").classList.add("show");
      document.querySelector(".off").classList.remove("show");
      bool = 1;
    } else {
      document.querySelector(".on").classList.remove("show");
      document.querySelector(".off").classList.add("show");
      bool = 0;
      init();
    }

    console.log(bool);
  });
});

//close
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector("#footer").classList.remove("footer-active");
});

// video
const Lurl = "./my_model/";

const video = document.querySelector("#video");

let model, labelContainer, maxPredictions;

async function init() {
  const modelURL = Lurl + "model.json";
  const metadataURL = Lurl + "metadata.json";

  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  const constraints = {
    video: {
      facingMode: "environment",
    },
  };

  navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    video.srcObject = stream;

    setInterval(() => {
      if (bool) return "";
      predict();
    }, 1000);
  });

  labelContainer = document.getElementById("label-container");
}

async function predict() {
  console.log(bool);
  const prediction = await model.predict(video);
  let Lmax = ["", 0];
  for (let i = 0; i < maxPredictions; i++) {
    const classPrediction = [
      prediction[i].className,
      prediction[i].probability.toFixed(2),
    ];
    if (Lmax[1] < classPrediction[1]) {
      Lmax[0] = classPrediction[0];
      Lmax[1] = classPrediction[1];
    }
  }
  console.log(Lmax);
  if (Lmax[1] > 0.75) {
    labelContainer.innerHTML = `<span class='title'>${Lmax[0]}</span>
    <div class='content'>Every 1g will be discharged<span style="color:red;">${
      computers[Lmax[0]]
    }g</span>of carbon</div>`;
    document.querySelector("#footer").classList.add("footer-active");
    document.querySelector(".on").classList.add("show");
    document.querySelector(".off").classList.remove("show");
    bool = 1;
  }
}

const question = document.querySelector(".question");
const questionBox = document.querySelector(".questionBox");

console.log(question);

question.addEventListener("click", function () {
  questionBox.classList.toggle("active");
  console.log("hi");
});

const closeQuestionBox = document.querySelector(".closeQuestionBox");
closeQuestionBox.addEventListener("click", function () {
  questionBox.classList.remove("active");
});

const database = document.querySelector(".database");
const databaseBox = document.querySelector(".databaseBox");
const databaseList = document.querySelector(".database-list");

const computers = {
  Beef: 60,
  Chicken: 6,
  Corn: 1,
  Meters: 4,
  Lamb: 24,
  Peanuts: 25,
  Banana: 0.7,
  Fish: 3,
  tomatoes: 14,
  Shrimp: 12,
  Peas: 0.9,
  Pork: 7,
  Apple: 0.4,
  Eggs: 4.5,
  Wheat: 14,
  Nuts: 0.3,
  Mushrooms: 1.25,
  Citrus_fruits: 0.3,
  Vegetables: 0.4,
  Fungus: 1.25,
  Coffee: 0.4,
  // Cassava: 1,
  // Soy milk: 0.9,
  // cheese: 21,
  // Olive oil: 6,
  // Palm oil: 8,
  // Milk: 3,
};

for (const [key, value] of Object.entries(computers)) {
  const li = document.createElement("li");
  li.textContent = `${key} 1g = ${value}g of carbon emissions`;
  databaseList.appendChild(li);
}

database.addEventListener("click", () => {
  databaseBox.classList.toggle("active");
});
