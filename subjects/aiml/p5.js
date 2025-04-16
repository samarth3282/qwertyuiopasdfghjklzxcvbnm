// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
# %% [markdown]
# Name: Krish Parmar
# 
# Roll No: 24BEE034
# 
# Practical No: 6
# 
# Aim: Write a program for classifing iris images using KNN Classifier. Implement Accuracy.

# %%
import pandas as pd
import numpy as np
import math
from sklearn.model_selection import train_test_split
# Importing the dataset values
data = pd.read_csv("iris.csv", header = "infer").values
print(data)
# Separating the input data and output data
x = data[:, 1:-1]
y = data[:, -1]
# Splitting the dataset into a 0.8:0.2 ratio for train:test
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, stratify=y)

# %%
# Inputting k
k = int(input("Enter the value of k: "))

# %%
data.shape

# %% [markdown]
# KNN Classification without SKLearn

# %%
# Number of classes (species here)
nclasses = np.unique(y_train).shape[0]
# Array to store the distances
dist = np.zeros(shape=x_train.shape[0])
# Array to store the predictions
pred = np.zeros(shape=x_test.shape[0])
# Array to store the weightages
classvotes = np.zeros(shape=nclasses)
# Calculating for each test case
for i in range(x_test.shape[0]):

 # Calculating the Euclidian Distance
 dist = np.sqrt(np.sum((x_train - x_test[i])**2, axis=1))

 # Storing the indices of the K-Nearest-Neighbours
 kminind = np.argpartition(dist, k)[0:k]

 # Inverting the distance
 invdist = 1/(dist + 10e-20)
 # For normalising
 denom = sum(invdist[kminind])

 # Calculating the weightages
for j in range(k):
 classvotes[int(y_train[kminind[j]])] += invdist[kminind[j]]

 # Normalising
 classvotes /= denom

 # Making the prediction based on the class with highest weightage
 pred[i] = np.argmax(classvotes)
# Displaying the predictions
print(pred)
# Calculating and displaying the accuracy
accuracy = np.sum(pred.astype(int)==y_test.astype(int))/pred.shape[0]
print(accuracy)




# %% [markdown]
# KNN Classification with SKLearn

# %%
# Importing the SKLearn Functions
from sklearn.metrics import accuracy_score, classification_report
from sklearn.neighbors import KNeighborsClassifier
# Creating an instance of the KNeighborsClassifier Class
model = KNeighborsClassifier(n_neighbors = k, weights='distance')
# Fitting the model to our data
model.fit(x_train, y_train)
# Storing the predictions from our test data
pred = model.predict(x_test)
# Calculating the accuracy of the model
accuracy = accuracy_score(y_test, pred)
# Displaying the information
print("Predictions:", pred)
print("Accuracy:", accuracy)
# print("Classification Report:\n", classification_report(y_test, pred))



  `;
  res.json({ code: codeString });
});

module.exports = router;
