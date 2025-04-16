// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
clf;

// Sine Wave
t = 0:0.1:10;
f = 0.3;
x = sin(2 * %pi * f * t);
subplot(3,3,1); plot(t, x); xlabel('Time'); ylabel('Amplitude'); title('Sine Wave');
X = fft(x);
subplot(3,3,1 + 9); plot(abs(X)); xlabel('Frequency'); ylabel('Amplitude'); title('Sine FFT');

// Cosine Wave
x = cos(2 * %pi * f * t);
subplot(3,3,2); plot(t, x); xlabel('Time'); ylabel('Amplitude'); title('Cosine Wave');
X = fft(x);
subplot(3,3,2 + 9); plot(abs(X)); xlabel('Frequency'); ylabel('Amplitude'); title('Cosine FFT');

// Square Wave
t = linspace(0,10,500);
x = 5 * squarewave(t);
subplot(3,3,3); plot(t, x); xlabel('Time'); ylabel('Amplitude'); title('Square Wave');
X = fft(x);
subplot(3,3,3 + 9); plot(abs(X)); xlabel('Frequency'); ylabel('Amplitude'); title('Square FFT');

// Unit Step
t = 0:4;
x = ones(1,5);
subplot(3,3,4); plot2d3(t, x); xlabel('Time'); ylabel('Amplitude'); title('Unit Step');
X = fft(x);
subplot(3,3,4 + 9); plot(abs(X)); xlabel('Frequency'); ylabel('Amplitude'); title('Step FFT');

// Unit Impulse
l = 5;
n = -l:l;
x = [zeros(1,l), 1, zeros(1,l)];
subplot(3,3,5); plot2d3(n, x); xlabel('Time'); ylabel('Amplitude'); title('Unit Impulse');
X = fft(x);
subplot(3,3,5 + 9); plot(abs(X)); xlabel('Frequency'); ylabel('Amplitude'); title('Impulse FFT');

// Ramp
n = 0:10;
x = n;
subplot(3,3,6); plot(n, x); xlabel('Time'); ylabel('Amplitude'); title('Ramp');
X = fft(x);
subplot(3,3,6 + 9); plot(abs(X)); xlabel('Frequency'); ylabel('Amplitude'); title('Ramp FFT');

// Exponential
t = -2:0.1:2;
x = exp(t);
subplot(3,3,7); plot(t, x); xlabel('Time'); ylabel('Amplitude'); title('Exponential');
X = fft(x);
subplot(3,3,7 + 9); plot(abs(X)); xlabel('Frequency'); ylabel('Amplitude'); title('Exp FFT');

// Random Signal
t = 0:0.01:1;
f_rand = 10 + 90 * rand();
phase_rand = 2 * %pi * rand();
x = sin(2 * %pi * f_rand * t + phase_rand);
subplot(3,3,8); plot(t, x); xlabel('Time'); ylabel('Amplitude'); title('Random Sine Wave');
X = fft(x);
subplot(3,3,8 + 9); plot(abs(X)); xlabel('Frequency'); ylabel('Amplitude'); title('Random FFT');

// Triangular Wave (approximated with sin)
a = 8;
t = 0:(%pi/4):(4*%pi);
x = a * sin(2 * t);
subplot(3,3,9); plot(t, x); xlabel('Time'); ylabel('Amplitude'); title('Triangular (approx)');
X = fft(x);
subplot(3,3,9 + 9); plot(abs(X)); xlabel('Frequency'); ylabel('Amplitude'); title('Triangular FFT');

`;
  res.json({ code: codeString });
});

module.exports = router;
