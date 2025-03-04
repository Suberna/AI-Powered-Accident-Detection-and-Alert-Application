// This is to dynamically display the logged-in username. You can set this based on session data or other methods.
document.getElementById('user-name').innerText = localStorage.getItem('username') || "User";

function startEmergency() {
    // Disable the button to prevent further clicks
    document.getElementById("emergency-btn").disabled = true;

    // Get the current location and time
    navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const timestamp = new Date().toISOString().slice(0, 19).replace("T", " ");

        // Collect emergency data
        const emergencyData = {
            latitude: latitude,
            longitude: longitude,
            timestamp: timestamp,
            alertMessage: "Emergency Alert: Immediate help required!"
        };

        // Simulate sending the emergency alert (you can replace this with actual API calls)
        console.log("Sending Emergency Data:", emergencyData);

        // Send the data to the backend or emergency service
        sendNotification(emergencyData);

        // Display success message
        document.getElementById("success-message").style.display = "block";
        
        // Generate report after 1 second (to ensure DOM updates)
        setTimeout(() => {
            generateReport(emergencyData);
        }, 1000);

        displayMap(latitude, longitude);

    }, function(error) {
        alert("Unable to fetch location. Please try again.");
    });
}

// Placeholder function to simulate sending notification (API call or SMS service)
function sendNotification(emergencyData) {
    // In a real-world scenario, you can use an API or SMS service here
    console.log("Notification Sent: ", emergencyData);
}

// Generate the report with accident details and map
function generateReport(emergencyData) {
    const reportOutput = document.getElementById('report-output');
    const precautionsOutput = document.getElementById('precautions-output');

    if (!reportOutput || !precautionsOutput) {
        console.error("Error: Report or Precautions section not found.");
        return;
    }

    console.log("Generating report...");
    
    // Simulated accident type (This can be dynamic based on backend processing)
    
    const accidentType = "Vehicle Collision";
    // Fix Image Path
    const accidentImagePath = "Accident-img.jpg";
    const reportSummary = `
        <strong>Accident Type:</strong> Vehicle Collision<br>
        <strong>GPS Location:</strong> ${emergencyData.latitude}, ${emergencyData.longitude}<br>
        <strong>Timestamp:</strong> ${emergencyData.timestamp}<br>
        <strong>Image:</strong> <img src="${accidentImagePath}" onerror="this.style.display='none';" width="200">
    `;
    // Display the report details
    reportOutput.innerHTML = reportSummary;

    // Simulate precautionary steps
    const precautions = `
        <strong>Precautions to Follow:</strong><br>
        1. Call for help immediately. <br>
        2. If safe, move people away from danger. <br>
        3. Wait for an ambulance and avoid causing further accidents.
    `;
    precautionsOutput.innerHTML = precautions;
    console.log("Report and precautions updated.");

    // Display the map with the accident location
    displayMap(emergencyData.latitude, emergencyData.longitude);
}

// Function to display Google Map with accident location
function displayMap(lat, long) {
    const mapElement = document.getElementById('google-map');
    const map = new google.maps.Map(mapElement, {
        center: { lat: lat, lng: long },
        zoom: 14
    });

    const marker = new google.maps.Marker({
        position: { lat: lat, lng: long },
        map: map,
        title: "Accident Location"
    });
    // Provide a clickable link for users to open Google Maps
    const mapUrl = `https://www.google.com/maps?q=${lat},${long}`;
    mapElement.innerHTML += `<p><a href="${mapUrl}" target="_blank">View on Google Maps</a></p>`;


}

// Handle file upload
function handleFileUpload() {
    const fileInput = document.getElementById("file-input");
    const file = fileInput.files[0];

    if (file) {
        // Simulate sending the image to the backend for processing
        console.log("File uploaded:", file);
        alert("File uploaded successfully!");
    }
}

// Load Google Maps API (Replace with your API key)
function loadGoogleMaps() {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initialize`;
    document.body.appendChild(script);
}

// Initialize Google Maps
function initialize() {
    console.log("Google Maps API Loaded");
}

loadGoogleMaps();
