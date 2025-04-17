// subjects/dc/p1.js
const express = require("express");
const router = express.Router();

// GET /dc/p1
router.get("/", (req, res) => {
  const codeString = `
clc;
clear;

// Input binary data
bits = [1 0 1 1 0 0 1 0];
bit_duration = 1;
fs = 100; // Sampling frequency
t = 0:1/fs:bit_duration - 1/fs;
time = 0:1/fs:(length(bits) * bit_duration) - 1/fs;

// Carrier frequencies and amplitude
fc = 5;    // ASK carrier frequency
f1 = 5;    // FSK frequency for bit 1
f2 = 10;   // FSK frequency for bit 0
amp1 = 1;  // ASK amplitude for bit 1
amp0 = 0;  // ASK amplitude for bit 0

// Initialize signals
ask_signal = [];
fsk_signal = [];

// Generate ASK and FSK signals
for i = 1:length(bits)
    // ASK modulation
    if bits(i) == 1 then
        amp = amp1;
    else
        amp = amp0;
    end
    ask_part = amp * sin(2 * %pi * fc * t);
    ask_signal = [ask_signal ask_part];

    // FSK modulation
    if bits(i) == 1 then
        freq = f1;
    else
        freq = f2;
    end
    fsk_part = sin(2 * %pi * freq * t);
    fsk_signal = [fsk_signal fsk_part];
end

// Plot ASK signal
figure();
plot(time, ask_signal);
title("ASK Modulation");
xlabel("Time");
ylabel("Amplitude");

// Plot FSK signal
figure();
plot(time, fsk_signal);
title("FSK Modulation");
xlabel("Time");
ylabel("Amplitude");
`;
  res.json({ code: codeString });
});

module.exports = router;
