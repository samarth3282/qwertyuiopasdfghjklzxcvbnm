// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
  //HAMMINGCODE
#include <iostream>
#include <vector>
#include <cmath>

using namespace std;

// Function to calculate parity bit
int calculate_parity_bit(const vector<int>& bits, int position) {
    int parity = 0;
    for (int i = 0; i < bits.size(); i++) {
        if (i + 1 & position) {
            parity ^= bits[i];
        }
    }
    return parity;
}

// Function to encode data using Hamming Code
vector<int> hamming_encode(const vector<int>& data) {
    int m = data.size(); // Data length
    int r = 0;

    // Calculate the number of parity bits (r)
    while (pow(2, r) < (m + r + 1)) {
        r++;
    }

    vector<int> encoded(r + m); // Encoded data
    int j = 0, k = 0;

    // Place data bits in the encoded vector
    for (int i = 0; i < r + m; i++) {
        if ((i + 1) & (i)) {
            encoded[i] = data[j++];
        }
    }

    // Calculate parity bits
    for (int i = 0; i < r; i++) {
        int parity_position = pow(2, i) - 1;
        encoded[parity_position] = calculate_parity_bit(encoded, parity_position + 1);
    }

    return encoded;
}

// Function to decode Hamming code and correct errors if any
vector<int> hamming_decode(vector<int>& encoded) {
    int n = encoded.size();
    int r = 0;

    // Calculate the number of parity bits
    while (pow(2, r) < n) {
        r++;
    }

    int error_position = 0;

    // Check and find the error bit position
    for (int i = 0; i < r; i++) {
        int parity_position = pow(2, i) - 1;
        int calculated_parity = calculate_parity_bit(encoded, parity_position + 1);
        if (calculated_parity != 0) {
            error_position += parity_position + 1;
        }
    }

    // If there is an error, correct it
    if (error_position > 0) {
        cout << "Error detected at position: " << error_position << endl;
        encoded[error_position - 1] ^= 1; // Flip the erroneous bit
    }

    vector<int> decoded;

    // Extract original data from the decoded vector
    int j = 0;
    for (int i = 0; i < n; i++) {
        if ((i + 1) & (i)) {
            decoded.push_back(encoded[i]);
        }
    }

    return decoded;
}

int main() {
    vector<int> data = {1, 0, 1, 1}; // Input data

    // Hamming encoding
    vector<int> encoded_data = hamming_encode(data);

    cout << "Encoded data: ";
    for (int i : encoded_data) {
        cout << i << " ";
    }
    cout << endl;

    // Simulate an error by flipping a bit in the encoded data
    encoded_data[3] ^= 1;

    // Hamming decoding and error correction
    vector<int> decoded_data = hamming_decode(encoded_data);

    cout << "Decoded data: ";
    for (int i : decoded_data) {
        cout << i << " ";
    }
    cout << endl;

    return 0;
}

  `;
  res.json({ code: codeString });
});

module.exports = router;
