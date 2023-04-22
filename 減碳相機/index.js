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
    labelContainer.innerHTML = `<span style="color:red;font-size:90px;margin:0 auto;display:flex;justify-content:center">${
      Lmax[0]
    }</span>每1g會排出<span style="color:red;">${
      computers[Lmax[0]]
    }g</span>的碳`;
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

const computers = {
  牛肉: 60,
  雞肉: 6,
  玉米: 1,
  米: 4,
  羊肉: 24,
  花生: 25,
  香蕉: 0.7,
  魚肉: 3,
  番茄: 14,
  蝦子: 12,
  豌豆: 0.9,
  豬肉: 7,
  蘋果: 0.4,
  蛋: 4.5,
  小麥: 14,
  堅果: 0.3,
  香菇: 1.25,
  柑橘類水果: 0.3,
  根莖類蔬菜: 0.4,
  木耳: 1.25,
  咖啡: 0.2,
  // 木薯: 1,
  // 豆漿: 0.9,
  // 奶酪: 21,
  // 橄欖油: 6,
  // 棕櫚油: 8,
  // 牛奶: 3,
};
