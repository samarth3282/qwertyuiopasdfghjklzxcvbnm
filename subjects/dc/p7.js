// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `

  //QUANTIZZATION
  theta = 2 * %pi;
points = 100;
freq = 1;
amp = 1;
time_vals = linspace(0, theta, points);
signal = amp * sin(2 * %pi * freq * time_vals);
subplot(411)
plot(time_vals, signal);
xlabel('Time');
ylabel('Amplitude');
title('Original Sine Wave');
sample_rate = freq * 2;
index = 1;
for j = 1:sample_rate:length(signal)
    sampled_signal(index) = signal(j);
    sampled_time(index) = time_vals(j);
    index = index + 1;
end
subplot(412)
plot2d3(sampled_time, sampled_signal);
xlabel('Time (Sampled)');
ylabel('Amplitude');
title('Downsampled Sine Wave');
levels = 8;
step_size = 2 * amp / levels;
quantized_vals = zeros(1, length(sampled_signal));
for j = 1:length(sampled_signal)
    norm_val = sampled_signal(j) / step_size;
    counter = 0;
    for k = -levels/2:1:(levels/2)-1
        if (norm_val >= k) & (norm_val < k + 1) then
            quantized_vals(j) = counter;
        end
        counter = counter + 1;
    end
end
disp("Quantized Code:");
disp(quantized_vals);
binary_vals = dec2bin(quantized_vals);
disp("Binary Representation:");
disp(binary_vals);
subplot(413)
quant_bits = 2;
quant_levels = 2^quant_bits;
quantized_x = round((signal + 1) * (quant_levels - 1) / 2);
plot(time_vals, signal, time_vals, (quantized_x * 2 / (quant_levels - 1)) - 1);
xlabel('Time');
ylabel('Amplitude');
title('Original and Quantized Sine Waves');
legend('Original', 'Quantized');
digital_out = [];
pulse_rate = 2 * freq;
for j = 1:pulse_rate
    pulse_amp = level1(quantized_vals(j));
    pulse_seq = ones(1, pulse_rate);
    pulse_seq = pulse_seq * pulse_amp;
    digital_out = [digital_out, pulse_seq];
end
subplot(414)
plot(digital_out);
xlabel('Time');
ylabel('Amplitude');
title('Digital Signal (Pulse Amplitude Modulation)');

  `;
  res.json({ code: codeString });
});

module.exports = router;
