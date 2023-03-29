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
    timeCount = setTimeout(() => {
      alert("找不到目標");
    }, 7000);
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
    clearTimeout(timeCount);
    labelContainer.innerHTML = `<span style="color:red;">${
      Lmax[0]
    }</span><br>每1g會排出<span style="color:red;">${
      computers[Lmax[0]]
    }</span>g的碳`;
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
  questionBox.classList.add("active");
  console.log("hi");
});


const closeQuestionBox = document.querySelector(".closeQuestionBox");
closeQuestionBox.addEventListener("click", function () {
  questionBox.classList.remove("active");
});

const computers = {
  小麥: 14,
  玉米: 1,
  米: 4,
  木薯: 1,
  牛肉: 60,
  羊肉: 24,
  蝦子: 12,
  豬肉: 7,
  雞肉: 6,
  魚肉: 3,
  蛋: 4.5,
  豆漿: 0.9,
  根莖類蔬菜: 0.4,
  豌豆: 0.9,
  黑木耳: 1.25,
  夏雪菇: 1.25,
  杏鮑菇: 1,
  鮑魚菇: 1,
  番茄: 14,
  香蕉: 0.7,
  蘋果: 0.4,
  柑橘類水果: 0.3,
  奶酪: 21,
  牛奶: 3,
  花生: 25,
  橄欖油: 6,
  棕櫚油: 8,
  堅果: 0.3,
};
