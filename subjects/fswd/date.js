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
    <title>Custom Directive for Date and Time Formatting</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
    <style>
        body {
            display: flex;
            height: 100vh;
            justify-content: center;
            align-items: center;
            background-color: #e3f2fd;
            margin: 0;
            font-family: 'Poppins', sans-serif;
        }

        #app {
            background-color: #ffffff;
            padding: 40px 50px;
            border-radius: 20px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
            text-align: center;
            width: 350px;
        }

        h1 {
            color: #3f51b5;
            margin-bottom: 20px;
            font-size: 24px;
        }

        p {
            background-color: #6200ea;
            color: #ffffff;
            padding: 15px;
            border-radius: 8px;
            font-weight: bold;
            box-shadow: 0 4px 10px rgba(98, 0, 234, 0.3);
            transition: transform 0.3s ease, background 0.3s ease;
        }

        p:hover {
            transform: scale(1.05);
            background-color: #3700b3;
        }
    </style>
</head>

<body>
    <div id="app">
        <h1>Current Date & Time</h1>
        <p v-format-date="currentDate"></p>
        <p>Hours: {{ hours }}</p>
        <p>Minutes: {{ minutes }}</p>
        <p>Seconds: {{ seconds }}</p>
    </div>

    <script>
        // Define the custom directive named 'format-date'
        Vue.directive('format-date', {
            inserted: function (el, binding) {
                const date = binding.value;
                const formattedDate = formatDate(date); // Format the date
                el.textContent = formattedDate; // Display the formatted date
            }
        });

        // Create a new Vue instance
        new Vue({
            el: '#app',
            data: {
                currentDate: new Date().toISOString(),
                hours: new Date().getHours(),
                minutes: new Date().getMinutes(),
                seconds: new Date().getSeconds()
            },
            mounted() {
                setInterval(() => {
                    const now = new Date();
                    this.currentDate = now.toISOString();
                    this.hours = now.getHours();
                    this.minutes = now.getMinutes();
                    this.seconds = now.getSeconds();
                }, 1000);
            }
        });

        // Helper function to format the date
        function formatDate(dateString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('en-US', options);
        }
    </script>
</body>

</html>
`;
  res.json({ code: codeString });
});

module.exports = router;
