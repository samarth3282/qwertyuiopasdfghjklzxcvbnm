// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
am = 5;
ac = 5;
fm = 5;
fc = 15;
t = 0:0.01:5;

vm = am*sin(2*(%pi)*fm*t);                            // Message Signal
vc = ac*sin(2*(%pi)*fc*t);                            // Carrier Signal
vmm = (1 + 0.2*sin(2*(%pi)*fm*t)).*ac.*sin(2*(%pi)*fc*t); // AM Signal

kf = 10;
vfm = ac * sin(2*(%pi)*fc*t + kf * cos(2*(%pi)*fm*t)); // FM Signal

clf;
subplot(4,1,1)
plot(t, vm)
title("Message Signal")
xlabel("Time")
ylabel("Amplitude")

subplot(4,1,2)
plot(t, vc)
title("Carrier Signal")
xlabel("Time")
ylabel("Amplitude")

subplot(4,1,3)
plot(t, vmm)
title("AM Signal")
xlabel("Time")
ylabel("Amplitude")

subplot(4,1,4)
plot(t, vfm)
title("FM Signal")
xlabel("Time")
ylabel("Amplitude")

`;
  res.json({ code: codeString });
});

module.exports = router;
