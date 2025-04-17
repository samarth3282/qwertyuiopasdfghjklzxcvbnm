// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
//MULTIPLEXING
function y=mux(x1, x2, x3)
    maxLength = max([length(x1), length(x2), length(x3)]);
    y = zeros(1, maxLength * 3);
    
    for i = 1:maxLength
        if i <= length(x3)
            y((i - 1) * 3 + 3) = x3(i);
        end
        if i <= length(x2)
            y((i - 1) * 3 + 2) = x2(i);
        end
        if i <= length(x1)
            y((i - 1) * 3 + 1) = x1(i);
        end
    end
endfunction

function [x1, x2, x3]=demux(inputSignal)
    inputLength = length(inputSignal);
    numBits = inputLength / 3;
    
    x1 = zeros(1, numBits);
    x2 = zeros(1, numBits);
    x3 = zeros(1, numBits);
    
    counter = 1; 
    
    for i = 1:inputLength
        switch counter
            case 1
                x1((i + 2) / 3) = inputSignal(i);
            case 2
                x2((i + 1) / 3) = inputSignal(i);
            case 3
                x3(i / 3) = inputSignal(i);
        end
        
        counter = counter + 1;
        if counter > 3
            counter = 1;
        end
    end
endfunction

//#x1_digital = [1, 0, 1, 1, 0, 1,]; // Digital signal 1
//#x2_digital = [0, 1, 1, 0, 1, 0, 1, 1]; // Digital signal 2
//#x3_digital = [1, 1, 0, 0, 1, 0, 0, 1]; // Digital signal 3
x = linspace(0,4*%pi,100)
x1_digital = sin(x);
x2_digital = cos(x);
x3_digital = tan(x);

y_tdm_digital = mux(x1_digital, x2_digital, x3_digital);

[x1_demuxed, x2_demuxed, x3_demuxed] = demux(y_tdm_digital);

subplot(4, 1, 1);
plot(1:length(x1_digital), x1_digital, 'b-', 'LineWidth', 2);
xlabel('Sample Index');
ylabel('Digital Signal Value');
title('Input Signal x1');

subplot(4, 1, 2);
plot(1:length(x2_digital), x2_digital, 'g-', 'LineWidth', 2);
xlabel('Sample Index');
ylabel('Digital Signal Value');
title('Input Signal x2');

subplot(4, 1, 3);
plot(1:length(x3_digital), x3_digital, 'r-', 'LineWidth', 2);
xlabel('Sample Index');
ylabel('Digital Signal Value');
title('Input Signal x3');

subplot(4, 1, 4);
plot(1:length(y_tdm_digital), y_tdm_digital, 'k-', 'LineWidth', 2);
xlabel('Sample Index');
ylabel('TDM Digital Signal Value');
title('Composite TDM Digital Signal');

figure;

subplot(3, 1, 1);
plot(1:length(x1_demuxed), x1_demuxed, 'b-', 'LineWidth', 2);
xlabel('Sample Index');
ylabel('Digital Signal Value');
title('Demultiplexed Signal x1');

subplot(3, 1, 2);
plot(1:length(x2_demuxed), x2_demuxed, 'g-', 'LineWidth', 2);
xlabel('Sample Index');
ylabel('Digital Signal Value');
title('Demultiplexed Signal x2');

subplot(3, 1, 3);
plot(1:length(x3_demuxed), x3_demuxed, 'r-', 'LineWidth', 2);
xlabel('Sample Index');
ylabel('Digital Signal Value');
title('Demultiplexed Signal x3');
    





//C++

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

// ----------- Multiplexing Function -----------
vector<int> mux(const vector<int>& x1, const vector<int>& x2, const vector<int>& x3) {
    int maxLength = max({x1.size(), x2.size(), x3.size()});
    vector<int> y(maxLength * 3, 0); // Initialize with zeros

    for (int i = 0; i < maxLength; ++i) {
        if (i < x1.size()) y[i * 3 + 0] = x1[i];  // 1st position
        if (i < x2.size()) y[i * 3 + 1] = x2[i];  // 2nd position
        if (i < x3.size()) y[i * 3 + 2] = x3[i];  // 3rd position
    }
    return y;
}

// ----------- Demultiplexing Function -----------
void demux(const vector<int>& inputSignal, vector<int>& x1, vector<int>& x2, vector<int>& x3) {
    int numBits = inputSignal.size() / 3;

    x1.resize(numBits);
    x2.resize(numBits);
    x3.resize(numBits);

    for (int i = 0; i < inputSignal.size(); ++i) {
        int pos = i / 3;
        if (i % 3 == 0) x1[pos] = inputSignal[i];
        else if (i % 3 == 1) x2[pos] = inputSignal[i];
        else if (i % 3 == 2) x3[pos] = inputSignal[i];
    }
}
int main() {
    vector<int> x1 = {1, 2};
    vector<int> x2 = {10, 20};
    vector<int> x3 = {100, 200};

    // MUX
    vector<int> combined = mux(x1, x2, x3);
    cout << "Multiplexed Signal: ";
    for (int val : combined) cout << val << " ";
    cout << endl;

    // DEMUX
    vector<int> dx1, dx2, dx3;
    demux(combined, dx1, dx2, dx3);

    cout << "Demultiplexed x1: ";
    for (int val : dx1) cout << val << " ";
    cout << "\nDemultiplexed x2: ";
    for (int val : dx2) cout << val << " ";
    cout << "\nDemultiplexed x3: ";
    for (int val : dx3) cout << val << " ";

    return 0;
}

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

// ----------- Multiplexing Function -----------
vector<int> mux(const vector<int>& x1, const vector<int>& x2, const vector<int>& x3) {
    int maxLength = max({x1.size(), x2.size(), x3.size()});
    vector<int> y(maxLength * 3, 0); // Initialize with zeros

    for (int i = 0; i < maxLength; ++i) {
        if (i < x1.size()) y[i * 3 + 0] = x1[i];  // 1st position
        if (i < x2.size()) y[i * 3 + 1] = x2[i];  // 2nd position
        if (i < x3.size()) y[i * 3 + 2] = x3[i];  // 3rd position
    }
    return y;
}

// ----------- Demultiplexing Function -----------
void demux(const vector<int>& inputSignal, vector<int>& x1, vector<int>& x2, vector<int>& x3) {
    int numBits = inputSignal.size() / 3;

    x1.resize(numBits);
    x2.resize(numBits);
    x3.resize(numBits);

    for (int i = 0; i < inputSignal.size(); ++i) {
        int pos = i / 3;
        if (i % 3 == 0) x1[pos] = inputSignal[i];
        else if (i % 3 == 1) x2[pos] = inputSignal[i];
        else if (i % 3 == 2) x3[pos] = inputSignal[i];
    }
}
int main() {
    vector<int> x1 = {1, 2};
    vector<int> x2 = {10, 20};
    vector<int> x3 = {100, 200};

    // MUX
    vector<int> combined = mux(x1, x2, x3);
    cout << "Multiplexed Signal: ";
    for (int val : combined) cout << val << " ";
    cout << endl;

    // DEMUX
    vector<int> dx1, dx2, dx3;
    demux(combined, dx1, dx2, dx3);

    cout << "Demultiplexed x1: ";
    for (int val : dx1) cout << val << " ";
    cout << "\nDemultiplexed x2: ";
    for (int val : dx2) cout << val << " ";
    cout << "\nDemultiplexed x3: ";
    for (int val : dx3) cout << val << " ";

    return 0;
}
  `;
  res.json({ code: codeString });
});

module.exports = router;
