// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
# %% [markdown]
# Name: Krish Parmar
# Roll No: 24BEE034
# Practical No: 4
# Aim: Write a program for 6-city symmetric TSP using a brute-force approachz
# 

# %%
import pandas as pd
import time
# Importing the CSV File
data = pd.read_csv(r"6citytsp.csv", header = None).values
print(data)
print(data.dtype)

# %%
from itertools import permutations

# Inputting start_city choice
start_city = int(input("Enter the city index from 0 to " + str(data.shape[0]-1) + " : "))

# Storing the cities in a list
cities = list(range(data.shape[0]))

# Creating a list of all possible tours
temp_tours = permutations(cities)
temp_tours = list(temp_tours)

tours = []
# Filtering tours
for tour in temp_tours:
    if tour[0] == start_city:
        tours.append(tour)

print(tours) 
print(len(tours))

# %%
import numpy as np
# Sorting the starting time
starttime = time.process_time()

# Setting the default best tour length as infinity
besttourlength = np.inf

# Iterating through all the tours to calculate the tour length
for tour in tours:
    tourlength = 0
    for i in range(len(tour)-1):
        tourlength = tourlength + data[tour[i], tour[i+1]]
    
    # Adding the distace of the last tour
    tourlength = tourlength + data[tour[-1], tour[0]]

    # Comparing the current tour length with the best tour length so far
    if tourlength < besttourlength:
        besttourlength = tourlength
        besttour = tour

    # Setting the end time
    endtime = time.process_time()

# Calculating the time taken to caluclate the best tour
timetakenms = (endtime - starttime) * 1000

print("Best Tour: ", besttour)
print("Best Tour Length: ", besttourlength)
print("Time Taken: ", timetakenms)

# %% [markdown]
# Aim : Write a program for a 6-city symmetric TSP using a nearest neighbor heuristic.

# %%
import pandas as pd
import time
import numpy as np
# Importing the CSV File
data = pd.read_csv (r"11citytsp.csv", header = None).values.astype(float)
print(data)
print(data.dtype)

# %%
import pandas as pd
import time
import numpy as np

# Importing the CSV File
data = pd.read_csv(r"11citytsp.csv", header=None).values

# Inputting the city to start with
start_city = int(input("Enter the city index from 0 to " + str(data.shape[0] - 1) + ": "))

# Setting the start time
start_time = time.time()

# Initializing the tour length
tour_length = 0

# Tour starts from the start city
best_tour = [start_city]

# Setting the distances for the same city as a large number so that it doesn't interfere
large_number = 999999
data[data == 0] = large_number

# Creating a copy for the calculations
data_copy = np.copy(data)

for i in range(data_copy.shape[0] - 1):
    if i == 0:
        # Adding the nearest neighbor's distance to the tour length
        tour_length += min(data_copy[start_city, :])

        # Setting the index of the nearest neighbor
        nearest_index = np.argmin(data_copy[start_city, :])

        # Adding the next index to the tour
        best_tour.append(nearest_index)

        # Updating the indices of the cities already visited to infinity
        data_copy[:, start_city] = large_number
        data_copy[:, nearest_index] = large_number
    else:
        # Adding the nearest neighbor's distance to the tour length
        tour_length += min(data_copy[nearest_index, :])

        # Setting the index of the nearest neighbor
        nearest_index = np.argmin(data_copy[nearest_index, :])

        # Adding the next index to the tour
        best_tour.append(nearest_index)

        # Updating the indices of the cities already visited to infinity
        data_copy[:, nearest_index] = large_number

# Adding the final distance to go to the start city
tour_length += data[start_city, best_tour[-1]]

# Setting the end time
end_time = time.time()

# Calculating the time taken to calculate
time_taken_ms = (end_time - start_time) * 1000

# Displaying the data
print("Best tour: ", best_tour)
print("Best tour length:", tour_length)
print("Time taken to calculate:", time_taken_ms)

# %%




  `;
  res.json({ code: codeString });
});

module.exports = router;
