// subjects/dc/p1.js
const express = require("express");
const router = express.Router();

// GET /dc/p1
router.get("/", (req, res) => {
  const codeString = `
#include <iostream>
#include <string>
#include <vector>
using namespace std;

// Function to implement B8ZS scrambling
string B8ZS(string input) {
    string output = "";
    int last_polarity = -1; // -1 for initial, 1 for positive, 0 for negative

    for (size_t i = 0; i < input.length(); ++i) {
        if (input.substr(i, 8) == "00000000") {
            // Substitution pattern depends on the last non-zero pulse
            if (last_polarity == 1 || last_polarity == -1) {
                output += "000+-0-+";
            } else {
                output += "000-+0+-";
            }
            i += 7; // Skip next 7 zeros
        } else {
            if (input[i] == '1') {
                if (last_polarity <= 0) {
                    output += "+";
                    last_polarity = 1;
                } else {
                    output += "-";
                    last_polarity = 0;
                }
            } else {
                output += "0";
            }
        }
    }
    return output;
}

// Function to implement HDB3 scrambling
string HDB3(string input) {
    string output = "";
    int last_polarity = -1; // -1 for initial, 1 for positive, 0 for negative
    int ones_count = 0; // Count of non-zero pulses (bipolar violations)

    for (size_t i = 0; i < input.length(); ++i) {
        if (input.substr(i, 4) == "0000") {
            // Violation pattern depends on number of ones encountered so far
            if (ones_count % 2 == 0) {
                // Insert violation and balancing pulse
                if (last_polarity <= 0) {
                    output += "+00+";
                    last_polarity = 1;
                } else {
                    output += "-00-";
                    last_polarity = 0;
                }
            } else {
                // Insert only violation
                if (last_polarity <= 0) {
                    output += "000+";
                    last_polarity = 1;
                } else {
                    output += "000-";
                    last_polarity = 0;
                }
            }
            ones_count = 0; // Reset after substitution
            i += 3; // Skip next 3 zeros
        } else {
            if (input[i] == '1') {
                if (last_polarity <= 0) {
                    output += "+";
                    last_polarity = 1;
                } else {
                    output += "-";
                    last_polarity = 0;
                }
                ones_count++;
            } else {
                output += "0";
            }
        }
    }
    return output;
}

int main() {
    string input;
    cout << "Enter the binary input (only 0s and 1s): ";
    cin >> input;

    cout << "\nB8ZS Scrambled Output: \n" << B8ZS(input) << endl;
    cout << "\nHDB3 Scrambled Output: \n" << HDB3(input) << endl;

    return 0;
}

`;
  res.json({ code: codeString });
});

module.exports = router;
