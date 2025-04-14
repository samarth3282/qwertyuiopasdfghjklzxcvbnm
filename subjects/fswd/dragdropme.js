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
    <title>Drag and Drop API Demo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }

        #draggable {
            width: 100px;
            height: 100px;
            background-color: blue;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: grab;
            border-radius: 10px;
            margin: auto;
        }

        #dropzone {
            width: 200px;
            height: 200px;
            border: 2px dashed #333;
            margin: 30px auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            padding: 20px;
            font-size: 18px;
            color: #666;
        }

        #dropzone.dragover {
            border-color: green;
            background-color: #e0ffe0;
        }
    </style>
</head>

<body>

    <h2>Drag and Drop API Demo</h2>

    <div id="draggable" draggable="true">Drag Me</div>

    <div id="dropzone">Drop Here</div>

    <script>
        const draggable = document.getElementById("draggable");
        const dropzone = document.getElementById("dropzone");

        draggable.addEventListener("dragstart", (event) => {
            event.dataTransfer.setData("text/plain", "This is a draggable item");
            draggable.style.opacity = "0.5";
        });

        draggable.addEventListener("dragend", () => {
            draggable.style.opacity = "1";
        });

        dropzone.addEventListener("dragover", (event) => {
            event.preventDefault();
            dropzone.classList.add("dragover");
        });

        dropzone.addEventListener("dragleave", () => {
            dropzone.classList.remove("dragover");
            dropzone.removeChild(draggable);
        });

        dropzone.addEventListener("drop", (event) => {
            event.preventDefault();
            dropzone.classList.remove("dragover");
            dropzone.textContent = "Dropped!";
            dropzone.appendChild(draggable);
        });
    </script>

</body>

</html>
  `;
  res.json({ code: codeString });
});

module.exports = router;
