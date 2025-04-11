// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
//REVERSE, EMAIL , URL




  //reverse
  #!/bin/bash

echo "Enter a number:"
read num
reverse=0

while [ $num -gt 0 ]; do
    remainder=$((num % 10))
    reverse=$((reverse * 10 + remainder))
    num=$((num / 10))
done

echo "Reversed Number: $reverse"




//url and email
#!/bin/bash

is_valid_email() {

    # Valid Emails
    # https://my-site.org:8080/path/to/page?query=value

    # Invalid Emails
    # htt://example.com
    # http:/example.com
    # example_com

    email="$1"

    if echo "$email" | grep -q "@"; then
        username_part=$(echo "$email" | cut -d "@" -f 1)
        domain_part=$(echo "$email" | cut -d "@" -f 2)

        if echo "$domain_part" | grep -q "\."; then
            echo "Valid Email ID"
        else
            echo "Invalid Email ID"

        # if [[ "$email" =~ ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$ ]]; then
        #     echo "Valid Email ID"
        # else
        #     echo "Invalid Email ID"
        fi
    else
        echo "Invalid Email ID"
    fi
}

is_valid_url() {
    url="$1"

    if echo "$url" | grep -q "^http://"; then
        echo "Valid URL"
    elif echo "$url" | grep -q "^https://"; then
        echo "Valid URL"
    else
        echo "Invalid URL"

    #     if [[ "$url" =~ ^(https?://)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(:[0-9]{1,5})?(/.*)?$ ]]; then
    #     echo "Valid URL"
    # else
    #     echo "Invalid URL"
    fi
}

echo "Enter an email ID:"
read email
is_valid_email "$email"

echo "Enter a URL:"
read url
is_valid_url "$url"

  `;
  res.json({ code: codeString });
});

module.exports = router;
