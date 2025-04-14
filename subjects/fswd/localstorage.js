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
    <title>Local Storage</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
</head>

<body>
    <div class="container">
        <h1>Control Your Local Storage With Console!</h1>
        <p>Press <strong>F12</strong> to open DevTools. Then go to the console tab and execute these commands:</p>
        <ul>
            <li class="command">Storage.set("username", "JohnDoe");</li>
            <li class="command">Storage.set("cart", { items: 3 });</li>
            <li class="command">console.log(Storage.get("username"));</li>
            <li class="command">Storage.remove("username");</li>
            <li class="command">Storage.clear();</li>
        </ul>
    </div>

    <script>
        const Storage = {
            set: (key, value) => {
                localStorage.setItem(key, JSON.stringify(value));
            },

            get: (key) => {
                const data = localStorage.getItem(key);
                return data ? JSON.parse(data) : null;
            },

            remove: (key) => {
                localStorage.removeItem(key);
            },

            clear: () => {
                localStorage.clear();
            },
        };

        document.querySelectorAll(".command").forEach((item)=>{
            item.addEventListener("click", ()=>{
                const command = item.textContent.trim();
                eval(command);
            })
        })
    </script>
</body>

</html>
`;
  res.json({ code: codeString });
});

module.exports = router;
