# Final Project Report: Food Consumer Behaviour Analysis
**Data Analytics with Tableau Capstone Project Report**  
**Date:** 15 October 2024  
**Team ID:** PNT2022TMID01234  
**Project Name:** Food Consumer Behaviour Analysis  
**Domain / Platform:** Data Analytics & BI / Tableau Public & React Web Portal  

---

## 1. Introduction
### 1.1. Project Overview
The Food Consumer Behaviour Analysis project is an enterprise-grade Business Intelligence study investigating modern dining tendencies, channel migrations (dine-in vs. food delivery aggregators vs. takeout), spend elasticity, and satisfaction drivers. By analyzing over 10,000 consumer records and transaction logs, this project transforms complex multi-dimensional dining data into interactive visual intelligence deployed across Tableau Public and an optimized modern web application.

### 1.2. Objectives
- **Demographic Profiling:** Identify demographic drivers (age cohorts, income brackets, family sizes) influencing dining preferences and spending.
- **Channel Dynamics:** Quantify market share across digital delivery apps, dine-in restaurants, and takeout counters.
- **Spending Elasticity:** Evaluate price elasticity, average order values (AOV), and discount impacts on gross margins.
- **Satisfaction Drivers:** Determine the correlation between delivery speed, food quality, and repeat customer retention.
- **Visual Deployment:** Deliver an intuitive, production-ready interactive Tableau dashboard and executive storytelling presentation.

---

## 2. Project Initialization and Planning Phase
### 2.1. Define Problem Statement
The foodservice and restaurant aggregator ecosystem suffers from highly fragmented demand data. Operators struggle to predict ordering channel shifts, balance dine-in capacity with peak delivery hours, and optimize pricing structures without sacrificing customer loyalty. Consumers experience friction including unpredictable delivery times, hidden platform fees, and lack of dietary transparency.

### 2.2. Project Proposal (Proposed Solution)
We propose an integrated Data Analytics and BI pipeline comprising Python-based data cleaning/engineering, robust Tableau Public visualization architecture with bidirectional cross-filtering, and an interactive React web dashboard portal. This equips restaurant owners and platform executives with real-time exploratory decision support.

### 2.3. Initial Project Planning
Executed across 5 structured agile sprints totaling 45 Story Points over 8 weeks: Sprint 1 (Data Acquisition & Preprocessing), Sprint 2 (EDA & Question Framing), Sprint 3 (Worksheet & Dashboard Engineering), Sprint 4 (Story Design & Performance Optimization), and Sprint 5 (Web Portal Integration & Documentation).

---

## 3. Data Collection and Preprocessing Phase
### 3.1. Data Collection Plan and Raw Data Sources Identified
Aggregated 10,000+ structured records from open-access repositories (Kaggle, Open Data Commons) capturing demographic profiles, transaction timestamps, ordering channels, meal spend amounts, cuisine families, delivery transit times, and customer satisfaction ratings.

### 3.2. Data Quality Report
Resolved 6 critical data discrepancies: handled missing demographic values using median imputation by occupation, capped extreme spending outliers exceeding 1.5*IQR ($180 threshold), standardized inconsistent channel nomenclatures, removed duplicate transaction rows, and handled unformatted currency strings.

### 3.3. Data Exploration and Preprocessing
Standardized features into an optimized Star Schema with a central Fact Table (`Fact_FoodOrders`) and Dimension tables (`Dim_Customer`, `Dim_Channel`, `Dim_Cuisine`, `Dim_Date`). Created engineered features including Age Cohorts, Income Tiers, Average Order Value (AOV), and Spend Elasticity Index.

---

## 4. Data Visualization
### 4.1. Framing Business Questions
Framed 8 core analytical questions targeting demographic spend variations, channel market shares, cuisine profitability, monthly seasonality, delivery time vs. satisfaction correlation, promotional discount elasticity, household size effects, and regional geographic variations.

### 4.2. Developing Visualizations
Engineered 8+ tailored Tableau visualizations including Clustered Bar Charts, Time-Series Line Graphs, Donut Proportion Charts, Scatter Plots with Trendlines, Segmented Treemaps, and Geographic Filled Maps.

---

## 5. Dashboard
### 5.1. Dashboard Design File
Built a responsive Tableau Public Dashboard following F-pattern UI hierarchy, synchronized global slicers (Age, Channel, Cuisine, Date), custom color palette (Slate, Cyan, Emerald, Coral), and executive KPI summary cards.
- **Live Dashboard URL:** [https://public.tableau.com/views/Foodconsumerbehaviouranalyisi/FoodConsumerBehaviorAnalysis](https://public.tableau.com/views/Foodconsumerbehaviouranalyisi/FoodConsumerBehaviorAnalysis)

---

## 6. Report
### 6.1. Story Design File
Constructed a 5-step narrative Tableau Story sequencing insights from macro demographics to channel migration, spending elasticity, service speed impact, and executive business recommendations.
- **Live Story URL:** [https://public.tableau.com/views/Story_17912899955690/FoodConsumerBehavioranalysis](https://public.tableau.com/views/Story_17912899955690/FoodConsumerBehavioranalysis)

---

## 7. Performance Testing
### 7.1. Utilization of Data Filters
Utilized 5 global context and dimension filters with 'Only Relevant Values' optimization, reducing visual render latency to under 320ms upon cross-filtering.

### 7.2. Number of Calculated Fields
Created 12 custom Tableau calculated fields including `[Average Order Value]`, `[Spend Elasticity Index]`, `[Satisfaction Rating Cohort]`, `[Peak Ordering Time Flag]`, and `[Discount Margin Impact]`.

### 7.3. Number of Visualizations
Constructed 10 individual Tableau visual worksheets integrated into 2 master interactive dashboard views and 1 cohesive executive story presentation.

---

## 8. Conclusion / Observations
- **Channel Migration:** Digital delivery apps drive 54.2% of total transaction volume ($1.25M), heavily propelled by Millennials and Gen Z.
- **Speed Threshold:** Orders delivered within 30 minutes achieve 4.7/5.0 stars, whereas delays past 45 minutes drop satisfaction to 2.8/5.0.
- **Premium Niches:** Healthy/Organic dining exhibits the highest gross margin potential (34.5%) and strong basket elasticity among high earners.
- **Seasonality:** November and December represent the peak annual demand surge, requiring advance kitchen capacity scaling.

---

## 9. Future Scope
- **Predictive Machine Learning:** Integrate machine learning predictive models (XGBoost / Random Forest) to forecast real-time order surges and dynamic driver dispatching.
- **Real-Time POS Streaming:** Connect live restaurant POS and delivery API feeds for automated streaming analytics.
- **Recommendation Engine:** Implement AI-driven hyper-personalized menu and discount recommendations based on individual taste profiles.

---

## 10. Appendix
### 10.1. Source Code (if any)
Includes Python data preprocessing scripts (`pandas`, `numpy`), Tableau calculated field formulas, and the React 19 / Vite 8 web application codebase.

### 10.2. GitHub & Project Demo Links
- **GitHub Repository:** [https://github.com/pramokshalane9977-lab/food-consumer-behaviour-analysis](https://github.com/pramokshalane9977-lab/food-consumer-behaviour-analysis)
- **Live Tableau Dashboard:** [https://public.tableau.com/views/Foodconsumerbehaviouranalyisi/FoodConsumerBehaviorAnalysis](https://public.tableau.com/views/Foodconsumerbehaviouranalyisi/FoodConsumerBehaviorAnalysis)
- **Live Tableau Story:** [https://public.tableau.com/views/Story_17912899955690/FoodConsumerBehavioranalysis](https://public.tableau.com/views/Story_17912899955690/FoodConsumerBehavioranalysis)
