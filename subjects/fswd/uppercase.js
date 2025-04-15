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
    <title>Uppercase Text</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
</head>

<body>
    <div id="app">
        <p>{{ uppercaseText }}</p>
    </div>

    <script>
        new Vue({
            el: '#app',
            data: {
                originalText: 'Hello! This Text Can Change!'
            },
            computed: {
                uppercaseText() {
                    return this.originalText.toUpperCase();
                }
            }
        });
    </script>
</body>

</html>

`;
  res.json({ code: codeString });
});

module.exports = router;
