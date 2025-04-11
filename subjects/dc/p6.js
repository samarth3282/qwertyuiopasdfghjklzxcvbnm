// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
  //MODULATION
  fs = 10000;  
t = 0:1/fs:0.1;
fc = 1000;  
Am = 1;  
Ac = 1;  
fm = 100;
message = Am * sin(2 * %pi * fm * t);


am_signal = Ac * (1 + 0.5 * sin(2 * %pi * fm * t)) .* sin(2 * %pi * fc * t); 


kf = 75; 
fm_signal = Ac * sin(2 * %pi * fc * t + kf * cumsum(message)/fs);

 
kp = 1;
pm_signal = Ac * sin(2 * %pi * fc * t + kp * message); 


clf;
subplot(3,1,1);
plot(t, am_signal);
title("Amplitude Modulation (AM)");
xlabel("Time (s)");
ylabel("Amplitude");

subplot(3,1,2);
plot(t, fm_signal);
title("Frequency Modulation (FM)");
xlabel("Time (s)");
ylabel("Amplitude");

subplot(3,1,3);
plot(t, pm_signal);
title("Phase Modulation (PM)");
xlabel("Time (s)");
ylabel("Amplitude");


f = linspace(-fs/2, fs/2, length(t));

AM_spectrum = abs(fftshift(fft(am_signal))); 
FM_spectrum = abs(fftshift(fft(fm_signal))); 
PM_spectrum = abs(fftshift(fft(pm_signal))); 


figure();
subplot(3,1,1);
plot(f, AM_spectrum);
title("AM Spectrum");
xlabel("Frequency (Hz)");
ylabel("Magnitude");

subplot(3,1,2);
plot(f, FM_spectrum);
title("FM Spectrum");
xlabel("Frequency (Hz)");
ylabel("Magnitude");

subplot(3,1,3);
plot(f, PM_spectrum);
title("PM Spectrum");
xlabel("Frequency (Hz)");
ylabel("Magnitude");
`;
  res.json({ code: codeString });
});

module.exports = router;
