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
    <title>Simple Drag and Drop</title>
    <style>
        #draggable {
            width: 100px;
            padding: 10px;
            background: #4CAF50;
            color: white;
            text-align: center;
            cursor: move;
            margin-bottom: 10px;
        }

        #dropzone {
            width: 200px;
            height: 100px;
            border: 2px dashed #ccc;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    </style>
</head>

<body>

    <h2>Simple Drag and Drop</h2>

    <div id="draggable" draggable="true">Drag Me</div>
    <div id="dropzone">Drop Here</div>

    <script>
        const draggable = document.getElementById("draggable");
        const dropzone = document.getElementById("dropzone");

        draggable.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text", "dragging");
        });

        dropzone.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        dropzone.addEventListener("drop", (e) => {
            e.preventDefault();
            dropzone.appendChild(draggable);
            dropzone.textContent = "";
        });
    </script>

</body>

</html>

  `;
  res.json({ code: codeString });
});

module.exports = router;
