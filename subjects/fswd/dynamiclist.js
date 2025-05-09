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
