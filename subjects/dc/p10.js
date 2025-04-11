// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
  //HAMMINGCODE
  def calculate_parity_bits(data_bits):
    """Calculate and insert parity bits in the 7-bit Hamming Code (7,4)"""
    p1 = data_bits[0] ^ data_bits[1] ^ data_bits[3]
    p2 = data_bits[0] ^ data_bits[2] ^ data_bits[3]
    p3 = data_bits[1] ^ data_bits[2] ^ data_bits[3]
    
    # Final 7-bit Hamming Code: P1, P2, D1, P3, D2, D3, D4
    hamming_code = [p1, p2, data_bits[0], p3, data_bits[1], data_bits[2], data_bits[3]]
    
    return hamming_code

def detect_and_correct_error(received_bits):
    """Detect and correct single-bit error in received 7-bit Hamming Code"""
    p1 = received_bits[0] ^ received_bits[2] ^ received_bits[4] ^ received_bits[6]
    p2 = received_bits[1] ^ received_bits[2] ^ received_bits[5] ^ received_bits[6]
    p3 = received_bits[3] ^ received_bits[4] ^ received_bits[5] ^ received_bits[6]
    
    error_position = p1 * 1 + p2 * 2 + p3 * 4  # Binary to decimal position
    
    if error_position != 0:
        print(f"Error detected at position {error_position}")
        received_bits[error_position - 1] ^= 1  # Flip the incorrect bit
        print("Corrected Hamming Code:", received_bits)
    else:
        print("No error detected.")
    
    return received_bits

# Input 4-bit data from user
data_bits = list(map(int, input("Enter 4-bit data (space-separated): ").split()))
if len(data_bits) != 4:
    print("Error: Please enter exactly 4 bits.")
else:
    encoded_bits = calculate_parity_bits(data_bits)
    print("Encoded 7-bit Hamming Code:", encoded_bits)
    
    # Simulate transmission with a possible error
    received_bits = list(map(int, input("Enter received 7-bit data (space-separated): ").split()))
    if len(received_bits) != 7:
        print("Error: Please enter exactly 7 bits.")
    else:
        corrected_bits = detect_and_correct_error(received_bits)

  `;
  res.json({ code: codeString });
});

module.exports = router;
