// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
clf;
data = [1 0 1 1 0 0 1 0];

bitrate = 1; 
samples_per_bit = 100;
T = 1 / bitrate;
t = 0:T/samples_per_bit:length(data)*T;

nrz_l = zeros(1, length(t));
nrz_i = zeros(1, length(t));
polar_manchester = zeros(1, length(t));
diff_manchester = zeros(1, length(t));
ami = zeros(1, length(t));
pseudoternary = zeros(1, length(t));

last_level = 1;
last_transition = -1;
ami_level = 1;
pseudo_level = -1;

for i = 1:length(data)
    start_idx = (i-1) * samples_per_bit + 1;
    end_idx = i * samples_per_bit;
    half_idx = start_idx + floor(samples_per_bit / 2);

    nrz_l(start_idx:end_idx) = 2 * data(i) - 1;

    if data(i) == 1 then
        last_level = -last_level;
    end
    nrz_i(start_idx:end_idx) = last_level;

    polar_manchester(start_idx:half_idx-1) = - (2 * data(i) - 1);
    polar_manchester(half_idx:end_idx) = (2 * data(i) - 1);

    if data(i) == 1 then
        last_transition = -last_transition;
    end
    diff_manchester(start_idx:half_idx-1) = last_transition;
    last_transition = -last_transition;
    diff_manchester(half_idx:end_idx) = last_transition;

    if data(i) == 1 then
        ami_level = -ami_level;
        ami(start_idx:end_idx) = ami_level;
    else
        ami(start_idx:end_idx) = 0;
    end

    if data(i) == 0 then
        pseudo_level = -pseudo_level;
        pseudoternary(start_idx:end_idx) = pseudo_level;
    else
        pseudoternary(start_idx:end_idx) = 0;
    end
end

subplot(3,2,1); 
plot(t, nrz_l, 'b', "thickness", 2); 
title("NRZ-L");

subplot(3,2,2); 
plot(t, nrz_i, 'r', "thickness", 2); 
title("NRZ-I");

subplot(3,2,3); 
plot(t, polar_manchester, 'g', "thickness", 2); 
title("Manchester");


subplot(3,2,4); 
plot(t, diff_manchester, 'm', "thickness", 2); 
title("Differential Manchester"); 

subplot(3,2,5);
plot(t, ami, 'c', "thickness", 2); 
title("AMI"); 


subplot(3,2,6); 
plot(t, pseudoternary, 'k', "thickness", 2); 
title("Pseudoternary");

  `;
  res.json({ code: codeString });
});

module.exports = router;
