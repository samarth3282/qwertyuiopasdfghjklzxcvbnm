// subjects/dc/p1.js
const express = require("express");
const router = express.Router();

// GET /dc/p1
router.get("/", (req, res) => {
  const codeString = `
#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> addParityBit(vector<int> vec) {
    vector<vector<int>>v1(4,vector<int>(5, 0));

    int count = 0, temp = 0;
    for(int i = 0 ; i < 3 ; i++){
        for(int j = 0 ; j < 4 ; j++){
            temp = j + count;
            v1[i][j] = vec[temp];
        }
        count = (temp + 1);
    }

    for(int i = 0 ; i < 3 ; i++){
        int parity = 0;
        for(int j = 0 ; j < 4 ; j++){
            parity ^= v1[i][j];
        }
        v1[i][4] = !parity;
    }

    for(int i = 0 ; i < 5 ; i++){
        int parityCol = 0;
        for(int j = 0 ; j < 3 ; j++){
            parityCol ^= v1[j][i];
        }
        v1[3][i] = !parityCol;
    }

    return v1;
}

vector<int> TDM(vector<vector<int>> vec){
    vector<int>stream;
    for(int i = 0 ; i < 5 ; i++){
        for(int j = 0 ; j < 4 ; j++){
            stream.push_back(vec[j][i]);
        }
    }

    return stream;
}

vector<vector<int>> DEMUX(vector<int>stream){
    vector<vector<int>>v1(4,vector<int>(5, 0));

    int count = 0, temp = 0;
    for(int i = 0 ; i < 5 ; i++){
        for(int j = 0 ; j < 4 ; j++){
            temp = j + count;
            v1[j][i] = stream[temp];
        }
        count = (temp + 1);
    }

    return v1;
}

void checkError(vector<vector<int>> vec){
    for(int i = 0 ; i < 5 ; i++){
        int parityCheck = 0;
        for(int j = 0 ; j < 4 ; j++){
            parityCheck ^= vec[j][i];
        }
        if(parityCheck == 0){
            cout << "Error detected" << endl;
            return;
        }
    }

    cout << "No Error Detected" << endl;
}


int main() {
    vector<int> v(12);
    cout << "Enter 12-bit input (space-separated): ";
    for (int i = 0; i < 12; i++) {
        cin >> v[i];
    }

    vector<vector<int>> mat = addParityBit(v);

    cout << "Signals to Transmit through TDM" << endl;
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 5; j++) {
            cout << mat[i][j] << " ";
        }
        cout << endl;
    }

    vector<int>stream = TDM(mat);
    cout << "TDM Stream" << endl;
    for(auto it : stream){
        cout << it << " | ";
    }
    cout << endl;

    vector<vector<int>> demux = DEMUX(stream);
    cout << "Signals Received through TDM" << endl;
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 5; j++) {
            cout << demux[i][j] << " ";
        }
        cout << endl;
    }

    checkError(demux);


    return 0;
}
`;
  res.json({ code: codeString });
});

module.exports = router;
