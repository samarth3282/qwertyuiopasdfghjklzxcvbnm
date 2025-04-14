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
    <style>
        * {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .container {
            background-color: #f4f4f4;
            height: 100vh;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .content {
            height: 300px;
            width: 300px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }

        header {
            display: flex;
            justify-content: space-between;
        }

        header img {
            height: 50px;
            width: auto;
        }

        header h1 {
            font-weight: 600;
            color: #333;
        }

        .container .content button {
            border: none;
            padding: 10px 20px;
            background-color: #007BFF;
            color: white;
            cursor: pointer;
            transition: all 0.3s ease 0s;
            border-radius: 5px;
        }

        .container .content button:hover {
            transform: translateY(-5px);
            background-color: #0056b3;
        }

        p{
            font-size: 18px;
            margin-top: 15px;
            color: #444;
        }
    </style>
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
