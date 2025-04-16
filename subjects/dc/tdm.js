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

// Function to perform synchronous TDM
vector<string> synchronousTDM(const vector<vector<int>>& inputSignals) {
    vector<string> tdmSignal;
    int maxLen = 0;

    // Determine the maximum length of all input signals
    for (const auto& signal : inputSignals) {
        if (signal.size() > maxLen) {
            maxLen = signal.size();
        }
    }

    // Interleave samples; insert white space if data is missing
    for (int i = 0; i < maxLen; i++) {
        for (const auto& signal : inputSignals) {
            if (i < signal.size()) {
                tdmSignal.push_back(to_string(signal[i]));
            } else {
                tdmSignal.push_back(" "); // white space for empty slot
            }
        }
    }

    return tdmSignal;
}

int main() {
    int n;
    cout << "Enter number of input signals (channels): ";
    cin >> n;

    vector<vector<int>> signals(n);

    // Take input for each signal
    for (int i = 0; i < n; i++) {
        int len;
        cout << "Enter number of samples for Signal " << i + 1 << ": ";
        cin >> len;
        cout << "Enter the samples:\n";
        signals[i].resize(len);
        for (int j = 0; j < len; j++) {
            cin >> signals[i][j];
        }
    }

    // Generate TDM signal
    vector<string> tdm = synchronousTDM(signals);

    // Output the result
    cout << "\nSynchronous TDM Output Signal:\n";
    for (const string& val : tdm) {
        cout << val << "|";
    }
    cout << endl;

    return 0;
}
  `;
  res.json({ code: codeString });
});

module.exports = router;
