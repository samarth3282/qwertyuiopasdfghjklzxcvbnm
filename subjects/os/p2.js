// subjects/os/p2.js
const express = require("express");
const router = express.Router();

// GET /os/p2
router.get("/", (req, res) => {
  const codeString = `
//CALCULATOR

  //if
  #!/bin/bash

echo "Enter first number:"
read num1

echo "Enter second number:"
read num2

echo "Select operation:"
echo "1. Add"
echo "2. Subtract"
echo "3. Multiply"
echo "4. Divide"
read choice

if [ "$choice" -eq 1 ]; then
    result=$(echo "$num1 + $num2" | bc)
elif [ "$choice" -eq 2 ]; then
    result=$(echo "$num1 - $num2" | bc)
elif [ "$choice" -eq 3 ]; then
    result=$(echo "$num1 * $num2" | bc)
elif [ "$choice" -eq 4 ]; then
    result=$(echo "$num1 / $num2" | bc)
else
    echo "Invalid choice. Please select a valid operation."
    exit 1
fi

echo "Result = $result"






//switch

#!/bin/bash

echo "Enter first number:"
read num1

echo "Enter second number:"
read num2

echo "Select operation:"
echo "1. Add"
echo "2. Subtract"
echo "3. Multiply"
echo "4. Divide"
read choice

case $choice in
    1)
        result=$(echo "$num1 + $num2" | bc)
        ;;
    2)
        result=$(echo "$num1 - $num2" | bc)
        ;;
    3)
        result=$(echo "$num1 * $num2" | bc)
        ;;
    4)
        result=$(echo "$num1 / $num2" | bc -l)
        ;;
    *)
        echo "Invalid choice. Please select a valid operation."
        exit 1
        ;;
esac

echo "Result = $result"




  `;
  res.json({ code: codeString });
});

module.exports = router;
