from flask import Flask, render_template, url_for, request, redirect, Blueprint

import pandas as pd
import numpy as np

from sklearn.cluster import KMeans, MiniBatchKMeans
from sklearn.preprocessing import MinMaxScaler
from sklearn.decomposition import PCA

import json


views = Blueprint("views", __name__, template_folder='templates')

n_clusters = 8
n_components = 2


# Load Dataset
df = pd.read_csv("dataset/BankChurners.csv")
df = df.iloc[:, :-2]
df.set_index('CLIENTNUM', inplace=True)

# One-hot Encoding
dfOrigin = df.copy()
df = pd.get_dummies(df)

# normalize
scaler = MinMaxScaler()
dfNorm = scaler.fit_transform(df)

# Kmeans Clustering
km = MiniBatchKMeans(n_clusters=n_clusters, random_state=2021)
dfPred = km.fit_predict(dfNorm)

df['grp'] = dfPred
dfOrigin['grp'] = dfPred

p = PCA(n_components=n_components)
dfPca = p.fit_transform(dfNorm)
dfPca = pd.DataFrame(dfPca, index=dfOrigin.index, columns=['x', 'y'])
dfPca['grp'] = dfOrigin.grp

t1 = pd.DataFrame(dfPca.groupby('grp').mean())
t2 = pd.DataFrame(dfPca.groupby('grp').size(), columns=['r'])
t2 = t2.apply(lambda x: x/np.array(t2).sum()*180, axis=0)
t3 = pd.merge(t1, t2, left_index=True, right_index=True)
clusterValue = t3.to_json(orient='records')


@views.route('/')
def pageMain():
    # Gender
    t = pd.DataFrame(dfOrigin.groupby("Gender").size(), columns=['c'])
    t = t.apply(lambda x: x/np.array(t).sum(), axis=0)
    t.sort_values(by='c', ascending=False, inplace=True)
    gender_mf = t.index[0]
    gender_ratio = '{:.1f}'.format(t.iloc[0, 0]*100)

    # Age
    dfOrigin['Customer_Age_g'] = dfOrigin.Customer_Age//10*10
    t = pd.DataFrame(dfOrigin.groupby("Customer_Age_g").size(), columns=['c'])
    t = t.apply(lambda x: x/np.array(t).sum(), axis=0)
    t.sort_values(by='c', ascending=False, inplace=True)
    age_g = t.index[0]
    age_ratio = '{:.1f}'.format(t.iloc[0, 0]*100)

    # MOB
    mob = '{:.1f}'.format(dfOrigin.Months_on_book.mean())

    # Credit Limit
    creditLimit = '{:.1f}'.format(dfOrigin.Credit_Limit.mean())

    # Usage
    usage = '{:.1f}'.format(dfOrigin.Total_Trans_Amt.mean())

    # util ratio
    utilRatio = '{:.1f}'.format(dfOrigin.Avg_Utilization_Ratio.mean()*100)

    # avgCnt
    avgCnt = '{:.1f}'.format(dfOrigin.Total_Trans_Ct.mean())

    # avgMthInactive
    avgMthInactive = '{:.1f}'.format(dfOrigin.Months_Inactive_12_mon.mean())

    # avgContact
    avgContact = '{:.1f}'.format(dfOrigin.Contacts_Count_12_mon.mean())

    # Marital
    t = pd.DataFrame(dfOrigin.groupby("Marital_Status").size(), columns=['c'])
    t = t.apply(lambda x: x/np.array(t).sum(), axis=0)
    lstLabelsMarital = list(t.index)
    lstValueMarital = ['{:.1f}'.format(c*100) for c in t.c]

    lstLabelsMarital = json.dumps(lstLabelsMarital)
    lstValueMarital = json.dumps(lstValueMarital)

    # Income
    t = pd.DataFrame(dfOrigin.groupby("Income_Category").size(), columns=['c'])
    t = t.apply(lambda x: x/np.array(t).sum(), axis=0)
    lstLabelsIncome = list(t.index)
    lstValueIncome = ['{:.1f}'.format(c*100) for c in t.c]

    lstLabelsIncome = json.dumps(lstLabelsIncome)
    lstValueIncome = json.dumps(lstValueIncome)

    # Card
    t = pd.DataFrame(dfOrigin.groupby("Card_Category").size(), columns=['c'])
    t = t.apply(lambda x: x/np.array(t).sum(), axis=0)
    lstLabelsCard = list(t.index)
    lstValueCard = ['{:.1f}'.format(c*100) for c in t.c]

    lstLabelsCard = json.dumps(lstLabelsCard)
    lstValueCard = json.dumps(lstValueCard)

    # cluster

    return render_template("index.html",
                           gender=[gender_mf, gender_ratio],
                           age=[age_g, age_ratio],
                           mob=mob,
                           creditLimit=creditLimit,
                           usage=usage,
                           utilRatio=utilRatio,
                           avgCnt=avgCnt,
                           avgMthInactive=avgMthInactive,
                           avgContact=avgContact,
                           lstLabelsMarital=lstLabelsMarital,
                           lstValueMarital=lstValueMarital,
                           lstLabelsIncome=lstLabelsIncome,
                           lstValueIncome=lstValueIncome,
                           lstLabelsCard=lstLabelsCard,
                           lstValueCard=lstValueCard,
                           clusterValue=clusterValue
                           )


@views.route('/segment')
def pageSegment():

    # dictionary for segment information
    dictSegment = {}
    dictGender = {}

    for i in range(n_clusters):
        t = dfOrigin[dfOrigin.grp == i][['Customer_Age', 'Months_on_book', 'Credit_Limit', 'Total_Trans_Amt', 'Avg_Utilization_Ratio',
                                         'Total_Trans_Ct', 'Months_Inactive_12_mon', 'Contacts_Count_12_mon']].mean()
        t['Avg_Utilization_Ratio'] = np.array(t['Avg_Utilization_Ratio']) * 100
        t = t.to_dict()

        t2 = pd.DataFrame(dfOrigin[dfOrigin.grp == i].groupby(
            "Gender").size(), columns=['c'])
        t2 = t2.apply(lambda x: x/np.array(t2).sum(), axis=0)
        t2.sort_values(by='c', ascending=False, inplace=True)
        gender_mf = t2.index[0]
        if gender_mf == 'F':
            gender_mf = 'Female'
        else:
            gender_mf = 'Male'
        gender_ratio = '{:.1f}'.format(t2.iloc[0, 0]*100)

        dictSegment[i+1] = t
        dictGender[i+1] = {'gender_mf': gender_mf,
                           'gender_ratio': gender_ratio}

    jsonSegment = json.dumps(dictSegment)
    dictGender = json.dumps(dictGender)

    # portion
    t3 = pd.DataFrame(dfOrigin.groupby("grp").size(), columns=['c'])
    t3 = t3.apply(lambda x: x/np.array(t3).sum()*100, axis=0)
    t3 = t3.to_dict()
    dictPortion = t3['c']

    return render_template("segment.html",
                           clusterValue=clusterValue,
                           jsonSegment=jsonSegment,
                           dictGender=dictGender,
                           dictPortion=dictPortion
                           )


@views.route('/segment/<int:seg>')
def pageDetails(seg):

    seg = seg-1

    def getChart(colname, i, ascending=True):
        t = pd.DataFrame(dfOrigin.groupby(colname).size(), columns=['c'])
        t = t.apply(lambda x: x/np.array(t).sum(), axis=0)
        t2 = pd.DataFrame(dfOrigin[dfOrigin.grp == seg].groupby(
            colname).size(), columns=['c'])
        t2 = t2.apply(lambda x: x/np.array(t2).sum(), axis=0)
        t3 = pd.merge(t, t2, left_index=True, right_index=True,
                      how='left').fillna(0.0).sort_index(ascending=ascending)

        idx = list(t3.index)
        a = ['{:.1f}'.format(c*100) for c in t3.iloc[:, 0]]
        g = ['{:.1f}'.format(c*100) for c in t3.iloc[:, 1]]
        return idx, a, g
    # Gender
    _, a, g = getChart('Gender', seg, False)
    lstGender = json.dumps([a, g])

    # Age
    dfOrigin['Customer_Age_g'] = dfOrigin.Customer_Age//10*10
    idx, a, g = getChart('Customer_Age_g', seg, True)
    lstAge = json.dumps([idx, a, g])

    # Age
    dfOrigin['Months_on_book_g'] = dfOrigin.Customer_Age//6*6
    idx, a, g = getChart('Months_on_book_g', seg, True)
    lstMob = json.dumps([idx, a, g])

    # Marital
    idx, a, g = getChart('Marital_Status', seg, True)
    lstMarital = json.dumps([idx, a, g])

    # Income
    idx, a, g = getChart('Income_Category', seg, True)
    lstIncome = json.dumps([idx, a, g])

    # card
    idx, a, g = getChart('Card_Category', seg, True)
    lstCard = json.dumps([idx, a, g])

    return render_template('details.html',
                           lstGender=lstGender,
                           lstAge=lstAge,
                           lstMob=lstMob,
                           lstMarital=lstMarital,
                           lstIncome=lstIncome,
                           lstCard=lstCard,
                           seg=seg
                           )
