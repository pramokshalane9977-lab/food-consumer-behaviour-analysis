# Data Exploration and Preprocessing Template
**Phase:** Data Collection and Preprocessing Phase  
**Project Title:** Food Consumer Behaviour Analysis  
**Team ID:** PNT2022TMID01234  
**Date:** 15 October 2024  
**Maximum Marks:** 10 Marks  

---

### Data Exploration and Preprocessing Template
Identifies data sources, assesses quality issues like missing values and duplicates, and implements resolution plans to ensure accurate and reliable analysis.

| Section | Description |
| :--- | :--- |
| **Data Overview** | The dataset contains 10,000+ consumer records across 16 core attributes detailing consumer demographic profiles (Age, Gender, Household Income, Family Size, Occupation), dining channel preferences (Dine-in, Food Delivery App, Takeaway), average meal spend ($), order frequency per week, preferred cuisines (Asian, Fast Food, Italian, Mexican, Healthy/Vegan), delivery transit duration, discount reliance, and satisfaction ratings (1 to 5 scale). |
| **Data Cleaning** | 1. **Missing Values**: Imputed numerical attributes (Income, Spend) using group median by age/occupation; categorized missing categorical fields as 'Unspecified'.<br>2. **Duplicate Removal**: Identified and dropped 182 duplicate transaction logs based on composite key (CustomerID, OrderTimestamp).<br>3. **Outlier Treatment**: Applied Interquartile Range (IQR) filtering on meal spend and delivery duration; capped extreme values at the 99th percentile ($180 meal spend, 90 mins delivery). |
| **Data Transformation** | 1. **Age Cohort Binning**: Binned continuous age values into standard demographic cohorts: 'Gen Z (18-24)', 'Young Millennial (25-34)', 'Older Millennial (35-44)', 'Gen X (45-54)', and 'Boomers (55+)'.<br>2. **Income Tiering**: Segmented income into 'Low Income (<$30k)', 'Middle Income ($30k-$75k)', 'Upper Middle ($75k-$120k)', and 'High Income ($120k+)'.<br>3. **Calculated Columns**: Created Average Order Value (AOV = TotalSpend / TotalOrders), Spend Elasticity Index, and Satisfaction Quotient. |
| **Data Type Conversion** | • Order Date/Time converted from string object to native `datetime64[ns]`.<br>• Spend, Income, Delivery Fee, and Discount Percentage converted to `float64`.<br>• Order Frequency, Age, and Family Size converted to `int64`.<br>• Ordering Channel, Cuisine, and Gender converted to categorical factors (`category`). |
| **Column Splitting and Merging** | • **Location Splitting**: Split composite 'Customer_Location' strings into discrete 'City' and 'State' columns for regional Tableau mapping.<br>• **Cuisine & Category Merging**: Merged secondary cuisine tags into standardized primary cuisine families (e.g., 'Pizza', 'Pasta' -> 'Italian').<br>• **Name Parsing**: Masked personally identifiable customer full names into anonymized Customer Hash IDs to ensure privacy compliance. |
| **Data Modeling** | Designed an analytical Star Schema in Tableau:<br>• **Fact Table**: `Fact_FoodOrders` (OrderID, CustomerID, ChannelID, CuisineID, SpendAmount, DiscountApplied, DeliveryDurationMinutes, Rating).<br>• **Dimension Tables**: `Dim_Customer` (Demographics, IncomeTier, AgeCohort), `Dim_Channel` (ChannelType, PlatformFee), `Dim_Cuisine` (CuisineCategory, HealthyFlag), and `Dim_Date` (Year, Quarter, Month, DayOfWeek, PeakHourFlag). |
| **Save Processed Data** | The cleaned, validated, and transformed dataset was exported as `food_consumer_behavior_cleaned.csv` and loaded as a Tableau Data Extract (.hyper) file for high-performance visual dashboard querying and public cloud publishing. |
