// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
theta = 2 * %pi;
nPoints = 100;
f = 1;
A = 1;
tVals = linspace(0, theta, nPoints);
sineWave = A * sin(2 * %pi * f * tVals);
subplot(411)
plot(tVals, sineWave);
xlabel('Time');     
ylabel('Amplitude');
title('Original Sine Wave');

sampleRate = f * 2;
sIndex = 1;
for j = 1:sampleRate:length(sineWave)
    sSignal(sIndex) = sineWave(j);
    sTime(sIndex) = tVals(j);
    sIndex = sIndex + 1;
end

subplot(412)
plot2d3(sTime, sSignal);
xlabel('Time (Sampled)');
ylabel('Amplitude');
title('Downsampled Sine Wave');

numLevels = 8;
step = 2 * A / numLevels;
qCodes = zeros(1, length(sSignal));
for j = 1:length(sSignal)
    normValue = sSignal(j) / step;
    count = 0;
    for k = -numLevels/2:(numLevels/2)-1
        if (normValue >= k) & (normValue < k + 1) then
            qCodes(j) = count;
        end
        count = count + 1;
    end
end

disp("Quantized Code:");
disp(qCodes);

binaryCodes = dec2bin(qCodes);
disp("Binary Representation:");
disp(binaryCodes);

subplot(413)
qBits = 3; 
qLevels = 2^qBits;
qSignal = round((sineWave + A) * (qLevels - 1) / (2 * A));
quantizedWave = (qSignal * 2 * A / (qLevels - 1)) - A;
plot(tVals, sineWave, 'b', tVals, quantizedWave, 'r');
xlabel('Time');
ylabel('Amplitude');
title('Original and Quantized Sine Waves');
legend('Original', 'Quantized');

digitalSignal = [];
pulseRate = 2 * f;
for j = 1:pulseRate
    
    level1 = linspace(-1, 1, numLevels); 
    pulseAmplitude = level1(qCodes(j));
    pulseSeq = ones(1, pulseRate) * pulseAmplitude;
    digitalSignal = [digitalSignal, pulseSeq];
end

subplot(414)
plot(digitalSignal);
xlabel('Time');
ylabel('Amplitude');
title('Digital Signal (Pulse Amplitude Modulation)');
`;
  res.json({ code: codeString });
});

module.exports = router;
