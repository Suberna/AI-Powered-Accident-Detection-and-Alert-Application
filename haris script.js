const contactLink = document.getElementById('contact-link');
const contactModal = document.getElementById('contact-modal');
const modalOverlay = document.getElementById('modal-overlay');
const cameraButton = document.getElementById('camera-button');
const gpsButton = document.getElementById('gps-button');
const cameraStream = document.getElementById('camera-stream');
const liveVideo = document.getElementById('live-video');
const captureButton = document.getElementById('capture-button');
const uploadButton = document.getElementById('upload-button');
const cancelCamera = document.getElementById('cancel-camera');
const gpsOptions = document.getElementById('gps-options');
const gpsCoordinates = document.getElementById('gps-coordinates');
const openMapButton = document.getElementById('open-map');
const cancelGpsButton = document.getElementById('cancel-gps');
const fileInput = document.getElementById('file-input');

let cameraStreamInstance;
let currentLatitude, currentLongitude;

/* Event listeners for modal, camera, GPS, etc. */
