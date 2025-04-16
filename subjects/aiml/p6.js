// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
# %% [markdown]
# Date: 20 March, 2025
# 
# Practical No: 6
# 
# Name: Yashvi Jain
# 
# Roll No: 24BEE040
# 
# Aim: Write a program for classifying iris images using a KNN classifier. Implement accuracy, precision, recall and f1-measure

# %%
import pandas as pd
import numpy as np
import math
from sklearn.model_selection import train_test_split
# Importing the dataset values
data = pd.read_csv("Iris.csv", header = "infer").values
#print(data)
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

# %%
classes = np.unique(y_test)
precision = np.zeros(len(classes))
recall = np.zeros(len(classes))
f1_score = np.zeros(len(classes))

for i, cls in enumerate(classes):
    tp = np.sum((pred == cls) & (y_test == cls))
    fp = np.sum((pred == cls) & (y_test != cls))
    fn = np.sum((pred != cls) & (y_test == cls))
    
    precision[i] = tp / (tp + fp) if (tp + fp) > 0 else 0
    recall[i] = tp / (tp + fn) if (tp + fn) > 0 else 0
    f1_score[i] = 2 * (precision[i] * recall[i]) / (precision[i] + recall[i]) if (precision[i] + recall[i]) > 0 else 0

print("Precision:", precision)
print("Recall:", recall)
print("F1 Score:", f1_score)

# %%
## Importing the SKLearn Functions
from sklearn.metrics import accuracy_score, precision_score,recall_score,f1_score,classification_report
from sklearn.neighbors import KNeighborsClassifier
# Creating an instance of the KNeighborsClassifier Class
model = KNeighborsClassifier(n_neighbors = k, weights='distance')
# Fitting the model to our data
model.fit(x_train, y_train)
# Storing the predictions from our test data
pred = model.predict(x_test)
# Calculating the accuracy of the model
accuracy = accuracy_score(y_test, pred)
precision=precision_score(y_test,pred,average='weighted')
recall=recall_score(y_test,pred,average='weighted')
f1=f1_score(y_test,pred,average='weighted')
# Displaying the information
print("Predictions:", pred)
print("Accuracy:", accuracy)
print("precision:",precision)
print("Recall:",recall)
print("f1 score:",f1)
#print("Classification Report:\n", classification_report(y_test, pred))

# %%




  `;
  res.json({ code: codeString });
});

module.exports = router;
