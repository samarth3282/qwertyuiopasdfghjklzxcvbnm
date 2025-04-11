// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
  //MATHS GRAPHS
  clf
t=0:0.1:10
f=0.3

x=2*sin(2*%pi*f*t)

subplot(8,5,1)
plot(t,x)
xlabel("Time")
ylabel("Amplitude")
title("Sin Wave")

x=2*cos(2*%pi*f*t)
subplot(8,5,2)
plot(t,x)
xlabel("Time")
ylabel("Amplitude")
title("Cos Wave")

x=tan(2*%pi*f*t)
subplot(8,5,3)
plot(t,x)
xlabel("Time")
ylabel("Amplitude")
title("Tan Wave")

x=log(t)
subplot(8,5,4)
plot(t,x)
xlabel("Time")
ylabel("Amplitude")
title("Logrithmic Wave")

ct=-10:0.1:10
x=sinc(ct)
subplot(8,5,5)
plot(ct,x)
xlabel("Time")
ylabel("Amplitude")
title("Sinc Wave")


x=sec(t)
subplot(8,5,6)
plot(t,x)
xlabel("Time")
ylabel("Amplitude")
title("Sec Wave")

x=5*squarewave(t)
subplot(8,5,7)
plot(t,x)
xlabel("Time")
ylabel("Amplitude")
title("Square Wave")

wt=0:0.83:10
x=sin(2*%pi*f*wt)
subplot(8,5,8)
plot(wt,x)
xlabel("Time")
ylabel("Amplitude")
title("Traingle Wave")

x=-t
subplot(8,5,9)
plot(t,x)
xlabel("Time")
ylabel("Amplitude")
title("Ramp Wave")

x=exp(t)
subplot(8,5,10)
plot(t,x)
xlabel("Time")
ylabel("Amplitude")
title("Exponential Wave")

x=sqrt(t)
subplot(8,5,11)
plot(t,x)
xlabel("Time")
ylabel("Amplitude")
title("Square-Root Wave")

x=rand(t)
subplot(8,5,12)
plot(t,x)
xlabel("Time")
ylabel("Amplitude")
title("Random Wave")


x=t.^3
subplot(8,5,13)
plot(t,x)
xlabel("Time")
ylabel("Amplitude")
title("Cube Wave")

subplot(8,5,14);
plot(t, tan(t));
title("Tangent Wave");
xlabel("Time");
ylabel("Amplitude");

subplot(8,5,15);
plot(t, sinh(t));
title("Hyperbolic Sine");
xlabel("Time");
ylabel("Amplitude");

subplot(8,5,16);
plot(t, atan(t));
title("Inverse Tangent");
xlabel("Time");
ylabel("Amplitude");


subplot(8,5,17);
plot(t, acosh(t + 1));
title("Inverse Hyperbolic Cosine");
xlabel("Time");
ylabel("Amplitude");

subplot(8,5,18);
plot(t, 1 ./ cosh(t));
title("Hyperbolic Secant");
xlabel("Time");
ylabel("Amplitude");

subplot(8,5,19);
valid_t = t(t<>0);
plot(valid_t, cotg(valid_t));
title("Cotangent Wave");
xlabel("Time");
ylabel("Amplitude");

subplot(8,5,20);
plot(t, (t >= 5));
title("Heaviside Step");
xlabel("Time");
ylabel("Amplitude");

subplot(8,5,21);
plot(t, modulo(t, 3));
title("Modulo Function");
xlabel("Time");
ylabel("Amplitude");

subplot(8,5,22);
plot(t, erf(t));
title("Error Function");
xlabel("Time");
ylabel("Amplitude");

subplot(8,5,23);
plot(t, besseli(0, t));
title("Bessel Function");
xlabel("Time");
ylabel("Amplitude");

subplot(8,5,24);
plot(t, t.*sin(t));
title("Modulated Sine");
xlabel("Time");
ylabel("Amplitude");


subplot(8,5,25);
plot(t, exp(-t).*sin(2*%pi*f*t));
title("Damped Sine");
xlabel("Time");
ylabel("Amplitude");

subplot(8,5,26);
plot(t, t.^2.*exp(-0.5*t));
title("Bell Curve");
xlabel("Time");
ylabel("Amplitude");

subplot(8,5,27);
plot(t, asinh(t));
title("Inverse Hyperbolic Sine");
xlabel("Time");
ylabel("Amplitude");

subplot(8,5,28);
plot(t, tanh(t));
title("Hyperbolic Tangent");
xlabel("Time");
ylabel("Amplitude");

subplot(8,5,29);
plot(t, sqrt(t));
title("Square Root");
xlabel("Time");
ylabel("Amplitude");

subplot(8,5,30);
plot(t, log10(t+1));
title("Logarithm (base 10)");
xlabel("Time");
ylabel("Amplitude");

subplot(8,5,31);
plot(t, cosh(t));
title("Hyperbolic Cosine");
xlabel("Time");
ylabel("Amplitude");

subplot(8,5,32);
plot(t, t.*cos(t.^2));
title("Chirp Signal");
xlabel("Time");
ylabel("Amplitude");


subplot(8,5,33);
plot(t, sin(t)./max(t, 0.1));
title("Modified Sinc");
xlabel("Time");
ylabel("Amplitude");

subplot(8,5,34);
plot(t, exp(-t.^2));
title("Gaussian");
xlabel("Time");
ylabel("Amplitude");

subplot(8,5,35);
plot(t, 1./(1 + t.^2));
title("Lorentzian");
xlabel("Time");
ylabel("Amplitude");

subplot(8,5,36);
plot(t, cos(t).*exp(-0.2*t));
title("Damped Cosine");
xlabel("Time");
ylabel("Amplitude");

subplot(8,5,37);
plot(t, t.*exp(-t));
title("Gamma Distribution");
xlabel("Time");
ylabel("Amplitude");

subplot(8,5,38);
plot(t, sin(1./(t+0.1)));
title("Inverse Sine");
xlabel("Time");
ylabel("Amplitude");

subplot(8,5,39);
plot(t, cos(2*%pi*f*t) + 0.5*sin(4*%pi*f*t));
title("Combined Waves");
xlabel("Time");
ylabel("Amplitude");

subplot(8,5,40);
plot(t, exp(-t).*cos(2*%pi*f*t));
title("Damped Exponential");
xlabel("Time");
ylabel("Amplitude");
`;
  res.json({ code: codeString });
});

module.exports = router;
