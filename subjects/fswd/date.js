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
