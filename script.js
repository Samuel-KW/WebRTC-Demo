const videoElem = document.getElementById('video');
const startElem = document.getElementById('start');
const stopElem = document.getElementById('stop');

// Options for getDisplayMedia()
let displayMediaOptions = {
    video: {
        cursor: 'always' // motion
    },
    audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44100
    }
};

// Set event listeners for the start and stop buttons
startElem.addEventListener('click', function (evt) {
    startCapture();
});

stopElem.addEventListener('click', function (evt) {
    stopCapture();
});

async function startCapture() {
    try {

        videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
        dumpOptionsInfo();

    } catch (err) { console.error(err); }
}

function stopCapture(evt) {
    let tracks = videoElem.srcObject.getTracks();

    tracks.forEach(track => track.stop());
    videoElem.srcObject = null;
}
