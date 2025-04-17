// subjects/dc/p1.js
const express = require("express");
const router = express.Router();

// GET /dc/p1
router.get("/", (req, res) => {
  const codeString = `
#include <iostream>
#include <vector>
#include <string>

using namespace std;

// Function to convert binary string to integer
int binaryToInt(const string& binary) {
    return stoi(binary, nullptr, 2);
}

// Function to convert integer to binary string with leading 0s
string intToBinary(int value, int bits = 8) {
    string result = "";
    while (value > 0) {
        result = (char)((value % 2) + '0') + result;
        value /= 2;
    }
    while (result.length() < bits)
        result = '0' + result;
    return result;
}

// Function to calculate 8-bit checksum
string calculateChecksum(vector<string> dataBlocks) {
    int sum = 0;

    // Add all data blocks
    for (const string& block : dataBlocks) {
        sum += binaryToInt(block);
    }

    // Handle overflow by adding carry
    while (sum > 255) {
        int carry = sum >> 8; // get overflow bits
        sum = (sum & 0xFF) + carry; // wrap around
    }

    // Take 1's complement
    int checksum = ~sum & 0xFF;

    return intToBinary(checksum);
}

// Function to verify checksum
bool verifyChecksum(vector<string> dataBlocks, const string& checksum) {
    dataBlocks.push_back(checksum);
    string result = calculateChecksum(dataBlocks);
    return result == "00000000";
}

int main() {
    int n;
    cout << "Enter number of 8-bit data blocks: ";
    cin >> n;

    vector<string> dataBlocks(n);
    cout << "Enter each 8-bit data block:\n";
    for (int i = 0; i < n; ++i) {
        cin >> dataBlocks[i];
    }

    string checksum = calculateChecksum(dataBlocks);
    cout << "Checksum: " << checksum << endl;

    // Simulate transmission
    cout << "\nEnter received data blocks and checksum for verification:\n";
    vector<string> receivedBlocks(n);
    for (int i = 0; i < n; ++i) {
        cin >> receivedBlocks[i];
    }
    string receivedChecksum;
    cin >> receivedChecksum;

    if (verifyChecksum(receivedBlocks, receivedChecksum)) {
        cout << "No Error Detected (Checksum Verified)" << endl;
    } else {
        cout << "Error Detected (Checksum Mismatch)" << endl;
    }

    return 0;
}
`;
  res.json({ code: codeString });
});

module.exports = router;
