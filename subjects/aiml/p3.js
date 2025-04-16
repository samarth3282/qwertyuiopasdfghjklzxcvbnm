// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
# %% [markdown]
# Practical 3: Write a program to handle missing values in data.

# %% [markdown]
# Name: Yashvi Jain

# %% [markdown]
# Roll No.: 24BEE040

# %%
import pandas as pd
df=pd.read_csv('train.csv',header='infer')
print(df.head(7))

# %%
df.info()

# %%
print(df.shape)

# %%
print(df.describe())

# %%
df1=df.copy()
df2=df.copy()
df3=df.copy()
df4=df.copy()
df5=df.copy()

# %%
df1=df.dropna(axis=0)

# %%
print(df1.shape)
print(df.shape)

# %%
df2=df2.dropna(axis=1)
print(df2.shape)
print(df.shape)

# %%
# Ensure df3 is defined
df3 = df.copy()

# Demonstrating replacing na with global constant
# As an example, we are going to replace na in age with 21
df3.columns = df3.columns.str.strip()
df3.loc[df3.loc[:, 'Age'].isna(), "Age"] = 21
print(df3.info())

# Now let us focus on the embarked column
# First, let us check unique values
print(df3.loc[:, "Embarked"].unique())
df3.loc[df3["Embarked"].isna(), "Embarked"] = 'S'
print(df3.info())

# Now on the cabin column
print(df3.loc[:, "Cabin"].unique())
df3.loc[df3["Cabin"].isna(), "Cabin"] = 'C85'
print(df3.info())

# %%
import numpy as np

# Strip whitespace from column names
df.columns = df.columns.str.strip()
df4.columns = df4.columns.str.strip()

# Convert Age column to numeric, coercing errors to NaN
df["Age"] = pd.to_numeric(df["Age"], errors='coerce')
df4["Age"] = pd.to_numeric(df4["Age"], errors='coerce')

# Replacing na in age with mean of age
meanage = np.mean(df.loc[~df["Age"].isna(), "Age"].values)
print(meanage)
df4.loc[df["Age"].isna(), "Age"] = meanage
# Confirming update
print(df4.info())

# Replacing na in cabin with most frequent value in cabin
# First find the most frequent 
mfcabin = df.loc[:, "Cabin"].mode()[0]
# Checking
print(mfcabin)
df4.loc[df["Cabin"].isna(), "Cabin"] = mfcabin
# Confirming the update
print(df4.info())

# Replacing na in embarked with most frequent value in embarked
# First find the most frequent 
mfembarked = df.loc[:, "Embarked"].mode()[0]
# Checking
print(mfembarked)
df4.loc[df["Embarked"].isna(), "Embarked"] = mfembarked
# Confirming the update
print(df4.info())

# %%
#Assume survived as the class
#Replacing NA in age with classwise mean
meanage0=np.mean(df.loc[(~df["Age"].isna()) & (df["Survived"]==0),"Age"].values)
meanage1=np.mean(df.loc[(~df["Age"].isna()) & (df["Survived"]==1),"Age"].values)
print(meanage0)
print(meanage1)
df5.loc[df["Age"].isna() & df["Survived"]==0,"Age"]=meanage0
df5.loc[df["Age"].isna() & df["Survived"]==1,"Age"]=meanage1
#confirming the update
print(df5.info())

#replacing NA in Cabin with classwise most frequent value in Cabin
#First find the most frequent
mfcabin0=df.loc[df["Survived"]==0,"Cabin"].mode()[0]
mfcabin1=df.loc[df["Survived"]==1,"Cabin"].mode()[0]
#checking
print(mfcabin0)
print(mfcabin1)
df5.loc[df["Cabin"].isna() & df["Survived"]==0,"Cabin"]=mfcabin0
df5.loc[df["Cabin"].isna() & df["Survived"]==1,"Cabin"]=mfcabin1
#Confirming the update
print(df5.info)

#replacing NA in Embarked with classwise most frequent value in Embarked
#First find the most frequent
mfembarked0=df.loc[df["Survived"]==0,"Embarked"].mode()[0]
mfembarked1=df.loc[df["Survived"]==1,"Embarked"].mode()[0]
#checking
print(mfembarked0)
print(mfembarked1)
df5.loc[df["Embarked"].isna() & df["Survived"]==0,"Embarked"]=mfembarked0
df5.loc[df["Embarked"].isna() & df["Survived"]==1,"Embarked"]=mfembarked0
#Confirming the update
print(df5.info)



  `;
  res.json({ code: codeString });
});

module.exports = router;
