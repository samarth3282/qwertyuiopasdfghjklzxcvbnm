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
