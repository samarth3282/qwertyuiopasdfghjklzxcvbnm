// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Geolocation API</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
</head>

<body>
    <div class="container">
        <div class="content">
            <header>
                <img src="./image.png" alt="GET YOUR LOCATION">
                <h1>User Location</h1>
            </header>
            <button onclick="getLocation()">Get Location</button>
            <p id="location"></p>
        </div>
    </div>

    <script>
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition, showError);
            } else {
                document.getElementById("location").innerText = "Geolocation is not supported by this browser.";
            }
        }

        function showPosition(position) {
    console.log(position);
    document.getElementById("location").innerText =
        \\\`Latitude: \\\${position.coords.latitude}, Longitude: \\\${position.coords.longitude}\\\`;
        }


        function showError(error) {
            let message = "";
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    message = "User denied the request for Geolocation.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    message = "Location information is unavailable.";
                    break;
                case error.TIMEOUT:
                    message = "The request to get user location timed out.";
                    break;
                case error.UNKNOWN_ERROR:
                    message = "An unknown error occurred.";
                    break;
            }
            document.getElementById("location").innerText = message;
        }
    </script>
</body>

</html>
`;
  res.json({ code: codeString });
});

module.exports = router;
