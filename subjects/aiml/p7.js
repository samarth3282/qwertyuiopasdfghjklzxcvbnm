// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
# %% [markdown]
# Name: Yashvi Jain
# 
# Roll No: 24BEE40
# 
# Practical No: 7
# 
# Aim: Write a program for predicting selling price of houses in Boston dataset using a KNN
# Regressor. Implement MAE, MSE, RMSE, and MAPE.

# %%
import pandas as pd
import numpy as np
import math
from sklearn.model_selection import train_test_split
# read the data
data = pd.read_csv("BostonHousing.csv", header='infer').values

# seperating input and target/output part of the data
X=data[:,0:-1]
y=data[:,-1]

# scan test split from user
test_split=float(input("Enter a number between 0 and 1 for test split: "))
# split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=test_split)

dist=np.zeros(shape=X_test.shape[0])
pred=np.zeros(shape=X_test.shape[0])

# ask the user about number of nearest neighbours to be used, i.e. k
k=int(input("Enter the number of nearest neighbours to be used: "))
for i in range(X_test.shape[0]):
    dist=np.sqrt(np.sum((X_train-X_test[i])**2,axis=1))
    # between current test record and all training records
    kminind=np.argpartition(dist,k)[0:k] #finding indices of k nearest neighbours
    invdist=1/(dist+10e-20) #preparing for weight calculation, avoiding division by zero
    denom=sum(invdist[kminind]) #for weights normalisation
    pred[i]=np.dot(invdist[kminind]/denom,y_train[kminind])

print(pred)

# user defined function to calculate MAE
def MAE(pred, y_test):
    return np.mean(np.abs(pred-y_test))

# user defined function to calculate RMSE
def RMSE(pred, y_test):
    return np.sqrt(np.mean((pred-y_test)**2))

# user defined function to calculate MAPE
def MAPE(pred, y_test):
    return np.mean(np.abs((pred-y_test)/y_test))
print("MAE",MAE)
print("RMSE",RMSE)
print("MAPE",MAPE)



  `;
  res.json({ code: codeString });
});

module.exports = router;
