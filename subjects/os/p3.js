// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `

//FOLE CONCATINATOR, WRITE TILL END , COMPARE FILE


  //COncat
  cat file1.txt file2.txt > file3.txt

echo "file1.txt and file2.txt have been concatenated into file3.txt."
echo "file1"
cat file1.txt
echo "file2"
cat file2.txt
echo "file3"
cat file3.txt

//wirte till end
Line_count=0
echo "Enter the lines of text (type 'end' to stop): " data. txt
while true; do
read line
[ "$line" = "end" ] && break
echo "$line" »> data.txt line_count=$((line_count+1))
done
echo "Total lines entered: $line_count" echo "Data saved in data. txt"



//compare file
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
