// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
//CRC

  divisor = input('Enter the divisor: ')

def bitwise_xor(a, divisor):
    return ''.join('0' if a[i] == divisor[i] else '1' for i in range(len(divisor)))

def sender_side_encoding(data):
    noz = len(divisor) - 1
    dividend = data + '0' * noz
    a = dividend[:noz + 1]
    
    for i in range(noz + 1, len(dividend)):
        if a[0] == '1':
            a = bitwise_xor(a, divisor)
        a = a[1:] + dividend[i]
    
    if a[0] == '1':
        a = bitwise_xor(a, divisor)
    
    a = a[1:]
    codeword = data + a
    return codeword

def receiver_side_checking(codeword):
    noz = len(divisor) - 1
    dividend = codeword
    a = dividend[:noz + 1]
    
    for i in range(noz + 1, len(dividend)):
        if a[0] == '1':
            a = bitwise_xor(a, divisor)
        a = a[1:] + dividend[i]
    
    if a[0] == '1':
        a = bitwise_xor(a, divisor)
    
    a = a[1:]
    return a != '0' * noz

if __name__ == "__main__":
    data = input("ENTER DATA STREAM: ")
    codeword = sender_side_encoding(data)
    print("Generated Codeword:", codeword)
    codeword = input('Enter the Recived Data: ')
    if not receiver_side_checking(codeword):
        print("NO BITS ARE CORRUPTED")
    else:
        print("FEW OF THE BITS ARE CORRUPTED")

  `;
  res.json({ code: codeString });
});

module.exports = router;
