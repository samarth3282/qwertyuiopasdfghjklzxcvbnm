// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `

//FOLE CONCATENATOR, WRITE TILL END , COMPARE FILE


//CONCATENATOR
cat file1.txt file2.txt > file3.txt

echo "file1.txt and file2.txt have been concatenated into file3.txt."
echo "file1"
cat file1.txt
echo "file2"
cat file2.txt
echo "file3"
cat file3.txt

//WRITE TILL END
#!/bin/bash

line_count=0
file="data.txt"
echo "Enter the lines of text (type ' end ' anywhere to stop):"
>"$file"

stty -icanon -echo min 1 time 0

current_line=""

while true; do
    char=$(dd bs=1 count=1 2>/dev/null)

    if [ "$char" = "" ]; then
        echo
        echo "$current_line" >>"$file"
        current_line=""
        line_count=$((line_count + 1))
        continue
    fi

    printf "%s" "$char"

    current_line+="$char"

    if [ "$(echo "$current_line" | tail -c 6)" = " end " ]; then
        echo
        break
    fi
done

stty icanon echo

echo "Total lines entered: $line_count"
echo "Data saved in $file"s


//COMPARE FILE
echo "Comparing file1.txt and file2.txt:"
if cmp file1.txt file2.txt
then
echo "They are similar"
else
echo "They are different"
fi

  `;
  res.json({ code: codeString });
});

module.exports = router;
