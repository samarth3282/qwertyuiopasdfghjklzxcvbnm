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
    <style>
        * {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f5f5f5;
            padding: 20px;
        }

        .container {
            max-width: 600px;
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        h1 {
            font-size: 24px;
            margin-bottom: 10px;
            color: #333;
        }

        p {
            font-size: 16px;
            color: #666;
            margin-bottom: 15px;
        }

        ul {
            text-align: left;
            padding-left: 20px;
            margin-top: 10px;
        }

        li {
            font-size: 14px;
            color: #444;
            background: #f8f9fa;
            padding: 8px 12px;
            margin: 5px 0;
            border-radius: 6px;
            box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
        }

        li::before {
            content: "💾 ";
        }
        .command{
            transition: all 0.3s ease-in-out 0s;
        }
        .command:hover{
            cursor: pointer;
            background-color: #d3d3d3;
            color: black;
            transform: translateX(5px);
        }
    </style>
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
