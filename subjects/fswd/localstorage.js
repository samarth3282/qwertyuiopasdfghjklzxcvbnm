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
     <title>Local Storage Example</title>
     <link rel="stylesheet" href="Storage.css">

     <script>
          function saveName() {
               let name = document.getElementById("nameInput").value;
               localStorage.setItem("username", name);
               alert("Name saved!");
          }

          function showName() {
               let storedName = localStorage.getItem("username");
               if (storedName) {
                    document.getElementById("display").innerText = "Saved Name: " + storedName;
               } else {
                    document.getElementById("display").innerText = "No name found!";
               }
          }

          function removeName() {
               localStorage.removeItem("username");
               document.getElementById("display").innerText = "Name removed!";
          }
     </script>
</head>

<body>
     <div class="container">

          <input type="text" id="nameInput" placeholder="Enter your name">
          <button onclick="saveName()">Save Name</button>
          <button onclick="showName()">Show Name</button>
          <button onclick="removeName()">Remove Name</button>
          <p id="display"></p>
     </div>
</body>

</html>
`;
  res.json({ code: codeString });
});

module.exports = router;
