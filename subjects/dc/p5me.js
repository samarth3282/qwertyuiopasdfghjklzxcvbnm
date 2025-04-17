// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
//AMI

clc;
clear;

// Input binary sequence
x = [1 0 1 1 0 0 1 0 1];
n = length(x);
ami_signal = [];
time = [];

prev = 1;

for i = 1:n
    t1 = i - 1;
    t2 = i;

    if x(i) == 1 then
        ami_val = prev;
        prev = -prev;
    else
        ami_val = 0;
    end

    // Create step waveform
    time = [time, t1, t2];
    ami_signal = [ami_signal, ami_val, ami_val];
end

// Plotting
plot2d(time, ami_signal, style=2)
xtitle("AMI (Alternate Mark Inversion)")
xlabel("Time")
ylabel("Amplitude")
xgrid()






//PSEUDOTERNARY

clc;
clear;

// Input binary sequence
x = [1 0 1 0 0 1 0 1];
n = length(x);
pseudo_signal = [];
time = [];

prev = 1;

for i = 1:n
    t1 = i - 1;
    t2 = i;

    if x(i) == 0 then
        pseudo_val = prev;
        prev = -prev;
    else
        pseudo_val = 0;
    end

    // Create step waveform
    time = [time, t1, t2];
    pseudo_signal = [pseudo_signal, pseudo_val, pseudo_val];
end

// Plotting
plot2d(time, pseudo_signal, style=3)
xtitle("Pseudoternary Encoding")
xlabel("Time")
ylabel("Amplitude")
xgrid()



//MANCHESTER

// Polar Manchester
x = [1 0 1 1 0 0 1 0 1]; 
n = length(x);
t = 0:0.01:n;
samples = 100;
time = [];
for i = 1:n
    time = [time, linspace(i-1, i, samples)];
end
y = [];
for i = 1:n
    if x(i) == 1 then
        y = [y ones(1, samples/2) -ones(1, samples/2)];
    else
        y = [y -ones(1, samples/2) ones(1, samples/2)];
    end
end
subplot(5,1,3);
plot2d(time, y, style=4);
xtitle('Manchester');
xgrid();





//DIFFERENTIAL MANCHESTER

// Differential Manchester
x = [1 0 1 1 0 0 1 0 1]; 
n = length(x);
t = 0:0.01:n;
samples = 100;
time = [];
for i = 1:n
    time = [time, linspace(i-1, i, samples)];
end
y = [];
state = -1;
for i = 1:n
    if x(i) == 0 then
        state = -state;
    end
    y = [y state*ones(1, samples/2) -state*ones(1, samples/2)];
end
subplot(5,1,4);
plot2d(time, y, style=5);
xtitle('Differential Manchester');
xgrid();




//NRZ-I

clf
x = [1 0 0 1 0 1];
z = 0;
flag = 1;

for i = 1:length(x)
    a = gca();
    a.data_bounds = [0, -1.5; length(x), 1.5];
    a.grid = [1, 1];
    a.grid_thickness = [1 1];
    //a.grid_color = color("gray");
    if (x(i) == 1)
        flag = -flag;
    end
    plot([z z+1], [flag flag]);

    title('Polar NRZ-I');
    z = z + 1;
end





//NRZ-L

clf
x = [1 0 0 1 0 1];
z = 0;

for i = 1:length(x)
    t = [z z+1];
    a = gca();
    a.data_bounds = [0, -1.5; length(x), 1.5];
    a.grid = [1, -1];

    if (x(i) == 0)
        plot(t, 1);
    else
        plot(t, -1);
    end

    title('Polar NRZ-L');
    z = z + 1;
end





//RZ

clf
x = [1 0 0 1 0 1];
z = 0;

for i = 1:length(x)
    a = gca();
    a.data_bounds = [0, -1.5; length(x), 1.5];
    a.grid = [1, -1];

    if (x(i) == 0)
        plot([z z+0.5], [-1 -1]);    // signal level
        plot([z+0.5 z+1], [0 0]);     // return to zero
    else
        plot([z z+0.5], [1 1]);       // signal level
        plot([z+0.5 z+1], [0 0]);     // return to zero
    end

    title('Polar RZ');
    z = z + 1;
end

  `;
  res.json({ code: codeString });
});

module.exports = router;
