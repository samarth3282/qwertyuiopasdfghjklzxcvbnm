// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
# %% [markdown]
# Name: Yash Sachchade
# Roll No: 24BEE035
# Practical No: 2
# AIM: Write a program to calculate and report various descriptive statistics measures.

# %%
import numpy as np
import statistics as stats
n=int(input('Enter number of observations:'))
list1 = []
for i in range(n):
    list1.append(int(input(f'Enter observation number {i+1}:')))

data = np.array(list1)
print(data)

# %%
mean = np.mean(data) 
print(f'Mean = {mean}')

variance=np.var(data) 
print(f'Variance {variance}')

stand_dev=np.std(data) 
print(f'Standard Deviation = {stand_dev}')

median=np.median(data)
print(f'Median {median}')

mode=stats.mode(data) 
print(f'Mode {mode}')

data_range= max(data)-min(data) 
print(f'Range {data_range}')

# %%
# Calculation Without Libraries


# %%
# Calculating Mean
x_sum = 0
square_sum = 0
for i in data:
    x_sum = x_sum + i
    square_sum = square_sum + i*i
mean=x_sum/n
print(f'Mean = {mean}')

# %%
#Calculating Variance and Standard Deviation
n_temp =n # If we are just considering sample
dev_square_sum = 0
for i in data:
    dev_square_sum = dev_square_sum +(i-mean)*(i-mean)    

variance=dev_square_sum/n_temp
print(f'Variance={variance}')
stand_dev = np.sqrt(variance)
print(f'Standard Deviation = {stand_dev}')

# %%
# Calculating Median
for i in range(n-1):
    for j in range(0, n-i-1):
        if data[j] > data[j + 1]:
            data[j], data[j + 1] = data[j + 1], data[j]
if n%2== 0:
    median=  0.5 * (data[n//21] + data[n//2])
else:
    median = data[n // 2] 
print(f'Median = {median}')


# %%
# Calculating Mode
frequencies = {}
for i in data:
    if i in frequencies:
        frequencies[i] = frequencies[i] + 1
    else:
        frequencies[i]=1
mod_freq = 1
for i in frequencies.values():
    if i > mod_freq:
        mod_freq = i

mode=[]
for i in frequencies:
    if frequencies[i]==mod_freq:
        mode.append(i)

if mod_freq == 1:
    print('Mode does not exist for given data')
else:
    print(f'Mode = {mode}')

data_range = max(data) - min(data)
print((f'Range = {data_range}'))



  `;
  res.json({ code: codeString });
});

module.exports = router;
