// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
t = 0:0.001:1;
analog_signal = sin(2 * %pi * 5 * t);


Ts = 0.01;
tsampled = 0:Ts:1;
sampled_signal = sin(2 * %pi * 5 * tsampled); 


L = 8;
min_val = -1;
max_val = 1;
quant_step = (max_val - min_val) / (L - 1);
quantized_signal = round((sampled_signal - min_val) / quant_step) * quant_step + min_val;

digital_signal = round((sampled_signal - min_val) / quant_step);
binary_signal = dec2bin(digital_signal, log2(L));

subplot(3,1,1);
plot(t, analog_signal);
title('Original Analog Signal');
xlabel('Time (s)');
ylabel('Amplitude');

subplot(3,1,2);
plot2d3(tsampled, sampled_signal);
title('Sampled Signal');
xlabel('Time (s)');
ylabel('Amplitude');

subplot(3,1,3);
plot2d3(tsampled, quantized_signal);
title('Quantized Signal');
xlabel('Time (s)');
ylabel('Amplitude');

disp("Binary Encoded Output:");
disp(binary_signal);

`;
  res.json({ code: codeString });
});

module.exports = router;
