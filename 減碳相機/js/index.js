document.addEventListener('deviceready', onDeviceReady, false);
var bool = 0;
function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

document.querySelectorAll('.btn').forEach((element, index) => {
    element.addEventListener('click', function () {
        console.log('index:', index);
        if (index) {
            document.querySelector('.on').classList.add('show');
            document.querySelector('.off').classList.remove('show');
            bool = 1;
        } else {
            document.querySelector('.on').classList.remove('show');
            document.querySelector('.off').classList.add('show');
            bool = 0;
            init();
        }
        console.log(bool);
    })
})

//close
document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('#footer').classList.remove('footer-active');
})

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
            if (bool) return '';
            predict();
        }, 1000);
    });

    labelContainer = document.getElementById("label-container");
}

async function predict() {
    console.log(bool);
    const prediction = await model.predict(video);
    let Lmax = ['', 0];
    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction = [prediction[i].className, prediction[i].probability.toFixed(2)];
        if (Lmax[1] < classPrediction[1]) {
            Lmax[0] = classPrediction[0];
            Lmax[1] = classPrediction[1];
        }
    }
    console.log(Lmax);
    if (Lmax[1] > 0.75) {
        labelContainer.innerText = Lmax[0];
        document.querySelector('#footer').classList.add('footer-active');
        document.querySelector('.on').classList.add('show');
        document.querySelector('.off').classList.remove('show');
        bool = 1;
    }
}
