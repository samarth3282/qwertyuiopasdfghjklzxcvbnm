// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
#include <iostream>
#include <string>

using namespace std;

string bitwiseXOR(const string& a, const string& divisor) {
    string xorResult = "";
    for (size_t i = 0; i < divisor.length(); i++) {
        xorResult += (a[i] == divisor[i]) ? '0' : '1';
    }
    return xorResult;
}

string senderSideEncoding(const string& data, const string& divisor) {
    int noz = divisor.length() - 1;
    string dividend = data + string(noz, '0');
    string a = dividend.substr(0, noz + 1);

    for (size_t i = noz + 1; i < dividend.length(); i++) {
        if (a[0] == '1') {
            a = bitwiseXOR(a, divisor);
        }
        a = a.substr(1) + dividend[i];
    }

    if (a[0] == '1') {
        a = bitwiseXOR(a, divisor);
    }

    a = a.substr(1);
    return data + a;
}

bool receiverSideChecking(const string& codeword, const string& divisor) {
    int noz = divisor.length() - 1;
    string a = codeword.substr(0, noz + 1);

    for (size_t i = noz + 1; i < codeword.length(); i++) {
        if (a[0] == '1') {
            a = bitwiseXOR(a, divisor);
        }
        a = a.substr(1) + codeword[i];
    }

    if (a[0] == '1') {
        a = bitwiseXOR(a, divisor);
    }

    a = a.substr(1);

    return a != string(noz, '0');
}

int main() {
    string divisor, data;

    cout << "Enter the divisor: ";
    cin >> divisor;

    cout << "ENTER DATA STREAM: ";
    cin >> data;

    string codeword = senderSideEncoding(data, divisor);
    cout << "Generated Codeword: " << codeword << endl;

    string receivedCodeword;
    cout << "Enter the Received Data: ";
    cin >> receivedCodeword;

    if (!receiverSideChecking(receivedCodeword, divisor)) {
        cout << "NO BITS ARE CORRUPTED" << endl;
    } else {
        cout << "FEW OF THE BITS ARE CORRUPTED" << endl;
    }

    return 0;
}
`;
  res.json({ code: codeString });
});

module.exports = router;
