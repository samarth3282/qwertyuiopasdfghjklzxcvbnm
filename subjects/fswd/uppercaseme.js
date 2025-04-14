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
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            display: flex;
            height: 100vh;
            justify-content: center;
            align-items: center;
            background-color: #e3f2fd;
            margin: 0;
        }

        #app {
            background-color: #ffffff;
            padding: 30px 40px;
            border-radius: 20px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
            text-align: center;
            max-width: 400px;
            width: 100%;
        }

        p {
            margin-bottom: 20px;
            font-size: 22px;
            font-weight: 600;
            color: #37474f;
        }

        button {
            background-color: #6200ea;
            color: #ffffff;
            border: none;
            border-radius: 25px;
            padding: 12px 30px;
            margin: 10px;
            cursor: pointer;
            font-weight: 500;
            box-shadow: 0 4px 10px rgba(98, 0, 234, 0.3);
            transition: transform 0.2s ease, background 0.3s ease;
        }

        button:hover {
            background-color: #3700b3;
            transform: scale(1.05);
        }
    </style>
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
