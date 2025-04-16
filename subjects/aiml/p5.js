// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
# %%
import pandas as pd
import numpy as np
import math
data = pd.read_csv("BostonHousing.csv", header = "infer").values
print(data)


# %% [markdown]
# Separating the Input/Output sets and Inputing the Test Split

# %%
x = data[:, 0:-1]
y = data[:, -1]
nrows = data.shape[0] # Number of rows in the dataset
test_split = float(input("Enter the split between 0 and 1: "))
print("x:", x)
print("y:", y)
print("Number of rows:", nrows)
print("Test Split:", test_split)

# %% [markdown]
# Splitting the Data without Scikit-learn

# %%
nrows_train = math.floor((1-test_split)*nrows) # Number of rows in the training set
all_indices = np.random.permutation(nrows) # Permutation of all indices of the data
print("Number of rows in training set:", nrows_train)
print("A random permutation of the indices:", all_indices)
# Splitting the data into training and test sets
x_train1 = x[all_indices[0:nrows_train], :]
y_train1 = y[all_indices[0:nrows_train]]
x_test1 = x[all_indices[nrows_train:], :]
y_test1 = y[all_indices[nrows_train:]]
print("Size of x_train:", x_train1.shape)
print("Size of y_train:", y_train1.shape)
print("Size of x_test:", x_test1.shape)
print("Size of y_test:", y_test1.shape)
# Displaying the union and intersection to check the split
print("Union:", len(set(all_indices[0:nrows_train]).union(set(all_indices[nrows_train:]))))
print("Intersection:", len(set(all_indices[0:nrows_train]).intersection(set(all_indices[nrows_train:]))))


# %% [markdown]
# Splitting the Data with Scikit-learn

# %%
# Using scikitlearn
from sklearn.model_selection import train_test_split

# Using scikitlearn
x_train2, x_test2, y_train2, y_test2 = train_test_split(x, y, test_size=test_split)
print("Size of x_train:", x_train2.shape)
print("Size of y_train:", y_train2.shape)
print("Size of x_test:", x_test2.shape)
print("Size of y_test:", y_test2.shape)



  `;
  res.json({ code: codeString });
});

module.exports = router;
