// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
# %% [markdown]
# Date: 27 March, 2025
# 
# Practical No: 8
# 
# Name: Yashvi Jain
# 
# Roll No: 24BEE040
# 
# Aim: Write a program to cluster data in iris flower dataset using k-means algorithm

# %%
import pandas as pd
import numpy as np
import math
import sklearn
# Importing the dataset values
data = pd.read_csv("Iris.csv", header = "infer").values
# print(data)
y = data[-1]
data = data[:, 1:-1]
#print(data)

# %%
# Inputting the number of clusters
k = int(input("Enter the number of clusters:"))
cluster_indices = np.zeros(shape = k, dtype=int)
cluster_centres = np.zeros(shape=(k, data.shape[1]))
cluster_indices = np.random.choice(len(data), k, replace=False)
print(cluster_indices)
cluster_centres = [data[cluster_indices]]
print(cluster_centres)

# %%
# Inputting the max number of iteration
limit = int(input("Enter the maximum number of iterations:"))

# %%
for _ in range(limit):
# Calculating the distances and assigning the clusters
    dist_mat = np.linalg.norm(data[:, np.newaxis] - cluster_centres[-1], axis=2)
    clusters = np.argmin(dist_mat, axis=1)
# Calculating the new cluster centers
    new_centers = np.array([data[clusters == i].mean(axis=0) for i in range(k)])
    cluster_centres.append(new_centers)
    if np.allclose(cluster_centres[-1], cluster_centres[-2]):
        break

for i, centers in enumerate(cluster_centres):
    if i == 0 or i == len(cluster_centres)-1:
        print(f"Iteration {i} - Cluster Centers:")
        print(centers)
        print()


# %%
# Displaying the final clusters and their lengths
for i in range(k):
    cluster_i = data[clusters == i]
# print(f"Final Cluster {i+1}:", cluster_i)
    print(f"Size of Final Cluster {i+1}:", len(cluster_i))

# %%
import warnings
warnings.filterwarnings('ignore')

# %%
from sklearn.cluster import KMeans
df = pd.read_csv("Iris.csv", header = "infer")
df = df.drop(['Id', 'Species'], axis=1)
kmeans = KMeans(n_clusters = 3).fit(df)
print(kmeans.cluster_centers_)




  `;
  res.json({ code: codeString });
});

module.exports = router;
