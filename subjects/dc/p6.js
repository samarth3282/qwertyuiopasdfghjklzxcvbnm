// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
samplingFreq = 10000;          
timeVector = 0:1/samplingFreq:0.1;  
carrierFreq = 1000;                     
carrierAmp = 1;                
messageFreq = 100;             
messageAmp = 1;       

infoSignal = messageAmp * sin(2 * %pi * messageFreq * timeVector);

amModulated = carrierAmp * (1 + 0.5 * sin(2 * %pi * messageFreq * timeVector)) ...
              .* sin(2 * %pi * carrierFreq * timeVector);

kf = 75;
fmModulated = carrierAmp * sin(2 * %pi * carrierFreq * timeVector + ...
                  kf * cumsum(infoSignal)/samplingFreq);

kp = 1;
pmModulated = carrierAmp * sin(2 * %pi * carrierFreq * timeVector + kp * infoSignal);

clf; 
subplot(3,1,1);
plot(timeVector, amModulated);
title("Amplitude Modulated Signal (AM)");
xlabel("Time (s)");
ylabel("Amplitude");

subplot(3,1,2);
plot(timeVector, fmModulated);
title("Frequency Modulated Signal (FM)");
xlabel("Time (s)");
ylabel("Amplitude");

subplot(3,1,3);
plot(timeVector, pmModulated);
title("Phase Modulated Signal (PM)");
xlabel("Time (s)");
ylabel("Amplitude");

frequencyAxis = linspace(-samplingFreq/2, samplingFreq/2, length(timeVector));

AM_Spectrum = abs(fftshift(fft(amModulated)));
FM_Spectrum = abs(fftshift(fft(fmModulated)));
PM_Spectrum = abs(fftshift(fft(pmModulated)));

figure();
subplot(3,1,1);
plot(frequencyAxis, AM_Spectrum);
title("Spectrum of AM Signal");
xlabel("Frequency (Hz)");
ylabel("Magnitude");

subplot(3,1,2);
plot(frequencyAxis, FM_Spectrum);
title("Spectrum of FM Signal");
xlabel("Frequency (Hz)");
ylabel("Magnitude");

subplot(3,1,3);
plot(frequencyAxis, PM_Spectrum);
title("Spectrum of PM Signal");
xlabel("Frequency (Hz)");
ylabel("Magnitude");

`;
  res.json({ code: codeString });
});

module.exports = router;
