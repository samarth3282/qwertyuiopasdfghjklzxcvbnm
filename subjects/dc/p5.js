// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
  //LINECODING
  clf;

function sig=nrz(bits)
    encoded=[];
    sig=[];
    l=length(bits);
    for i=1:length(bits)
        if bits(i)==1 
            encoded=[encoded,1];
        else
            encoded=[encoded,0];
        end
    end
    for i=1:length(encoded)
        if bits(i)==0 
            for j=1:100
                sig=[sig,0.05];
            end
        else
             for j=1:100
                sig=[sig,2.495];
             end
        end
    end
    
endfunction


function sig=nrzl(bits)
    encoded=[];
    sig=[];
    l=length(bits);
    for i=1:length(bits)
        if bits(i)==1 
            encoded=[encoded,1];
        else
            encoded=[encoded,-1];
        end
    end
    for i=1:length(encoded)
        for j=1:100
            sig=[sig,encoded(i)*2.5]
        end
    end
    
endfunction


function sig=nrzi(bits)
    encoded=[];
    sig=[];
    l=length(bits);
    curr=0;
    for i=1:length(bits)
        if bits(i)==1
            curr=1-curr;
        end
        encoded=[encoded,curr];
        
    end
    
    for i=1:length(encoded)
        if encoded(i)==0 
            for j=1:100
                sig=[sig,-2.5];
            end
        else
             for j=1:100
                sig=[sig,2.5];
             end
        end
    end
    
endfunction


function sig=manchester(bits)
    encoded=[];
    sig=[];
    for i=1:length(bits)
        if bits(i)==1 
            encoded=[encoded,-1,1];
        else
            encoded=[encoded,1,-1];
        end
        
    end
    
    for i=1:length(encoded)
       for j=1:50
           sig=[sig,2.5*encoded(i)];
       end
    end
    
endfunction

function sig=diff_manchester(x)
    encoded=[];
    sig=[];
    curr=1;
    for i=1:length(x)
        if x(i)==0
            curr=1-curr
        end
        encoded=[encoded,curr,1-curr];
        curr=1-curr;
    end
    
    for i=1:length(encoded)
        
        if encoded(i)==1
            for i=1:50
                sig=[sig,2.5];
            end
        else 
            for i=1:50
                sig=[sig,-2.5];
            end
        end
    end
endfunction

function sig=ami(x)
    sig=[];
    encoded=[];
    prev=-1;
    for i=1:length(x)
        if x(i)==0
            encoded=[encoded,0];
        else
            prev=-prev;
            encoded=[encoded,prev];
        end
    end
    
    for i=1:length(encoded)
        for j=1:100
            sig=[sig,2.5*encoded(i)];
        end
    end
    
endfunction
function sig=psudoternary(x)
    sig=[];
    encoded=[];
    prev=-1;
    for i=1:length(x)
        if x(i)==1
            encoded=[encoded,0];
        else
            prev=-prev;
            encoded=[encoded,prev];
        end
    end
    
    for i=1:length(encoded)
        for j=1:100
            sig=[sig,2.5*encoded(i)];
        end
    end
    
endfunction
x=[0,1,0,0,1,1,1,0,1];

Y=nrz(x);
t=1:length(Y);
subplot(421);
title("NRZ/Normal binary signal");
plot(t,Y);
xlabel("Time");
ylabel("Amplitude");

Y=nrzl(x);
t=1:length(Y);
subplot(423);
title("NRZ-L");
plot(t,Y);
xlabel("Time");
ylabel("Amplitude");

Y=nrzi(x);
t=1:length(Y);
subplot(424);
title("NRZ-I");
plot(t,Y);
xlabel("Time");
ylabel("Amplitude");

Y=manchester(x);
t=1:length(Y);
subplot(425);
title("Manchester");
plot(t,Y);          
xlabel("Time");
ylabel("Amplitude");

Y=diff_manchester(x);
t=1:length(Y);
subplot(426);
title("Differential Manchester");
plot(t,Y);  
xlabel("Time");
ylabel("Amplitude");

Y=ami(x);
t=1:length(Y);
subplot(427);
title("AMI");
plot(t,Y); 
xlabel("Time");
ylabel("Amplitude");

Y=psudoternary(x);
t=1:length(Y);
subplot(428);
title("Psudoternary");
plot(t,Y);        
xlabel("Time");
ylabel("Amplitude");

  `;
  res.json({ code: codeString });
});

module.exports = router;
