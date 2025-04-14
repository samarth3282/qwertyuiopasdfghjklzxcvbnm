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
    <title>Custom Directive Example</title>
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
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            background-color: #6200ea;
            color: #ffffff;
            padding: 12px 20px;
            margin: 8px 0;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(98, 0, 234, 0.3);
            transition: transform 0.2s ease, background 0.3s ease;
        }

        li:hover {
            transform: scale(1.05);
            background-color: #3700b3;
        }
    </style>
</head>

<body>
    <div id="app">
        <ul v-list="items"></ul>
    </div>

    <script>
        Vue.directive('list', {
            bind(el, binding) {
                const ul = document.createElement('ul');

                binding.value.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    ul.appendChild(li);
                });

                el.appendChild(ul);
            }
        });

        new Vue({
            el: '#app',
            data: {
                items: ['Subject-1', 'Subject-2', 'Subject-3', 'Subject-4']
            }
        });

    </script>
</body>

</html>
`;
  res.json({ code: codeString });
});

module.exports = router;
