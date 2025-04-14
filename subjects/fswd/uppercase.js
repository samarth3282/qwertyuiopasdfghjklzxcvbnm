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
    <title>Enhanced Directive Example</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
</head>

<body>
    <div id="app">
        <p ref="text">Hello! This Text Can Change!</p>
        <button @click="toUppercase"><strong>Uppercase</strong></button>
        <button @click="toLowercase"><strong>Lowercase</strong></button>
        <button @click="toOriginal"><strong>Original</strong></button>
    </div>

    <script>
        new Vue({
            el: '#app',
            data: {
                originalText: 'Hello! This Text Can Change!'
            },
            methods: {
                toUppercase() {
                    this.$refs.text.innerText = this.$refs.text.innerText.toUpperCase();
                },
                toLowercase() {
                    this.$refs.text.innerText = this.$refs.text.innerText.toLowerCase();
                },
                toOriginal() {
                    this.$refs.text.innerText = this.originalText;
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
