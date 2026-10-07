# Data Quality Report Template
**Phase:** Data Collection and Preprocessing Phase  
**Project Title:** Food Consumer Behaviour Analysis  
**Team ID:** PNT2022TMID01234  
**Date:** 15 October 2024  
**Maximum Marks:** 3 Marks  

---

### Data Quality Report Template
The Data Quality Report Template will summarize data quality issues from the selected source, including severity levels and resolution plans. It will aid in systematically identifying and rectifying data discrepancies.

### Data Quality Assessment & Remediation Table

| Data Source | Data Quality Issue | Severity | Resolution Plan |
| :--- | :--- | :--- | :--- |
| **Food Consumer Behavior Dataset** | Missing values in 'Monthly Income' and 'Dietary Preference' fields (~4.2% missing records). | **Moderate** | Applied median imputation for numerical income stratified by occupation and age cohort. Imputed missing dietary preferences with 'Standard / No Restriction'. |
| **Food Consumer Behavior Dataset** | Outliers in 'Average Meal Spend' with unrealistic values ($2,500+ per individual meal due to keystroke entry error). | **High** | Calculated Interquartile Range (IQR); capped values exceeding Q3 + 1.5*IQR at the 99th percentile threshold ($180). |
| **Online Delivery Logs** | Inconsistent channel naming conventions across records (e.g., 'App', 'mobile_app', 'Delivery App', 'Online'). | **Moderate** | Standardized categorical nomenclature using regex string mapping into three distinct categories: 'Delivery App', 'Dine-In', and 'Takeout'. |
| **Online Delivery Logs** | Duplicate customer transaction IDs resulting from retried payment gateway requests (~1.8% duplicates). | **High** | Implemented deduplication logic in Python using subset=['CustomerID', 'Timestamp', 'Amount'] keeping the first verified record. |
| **Restaurant POS Aggregations** | Unformatted text symbols in currency columns (e.g., '$45.00', 'USD 45', '45.00-') | **Low** | Stripped non-numeric currency characters using Python string stripping and converted data type to Float64. |
| **Consumer Feedback Logs** | Null ratings in 'Delivery Satisfaction Score' for orders cancelled before dispatch (~2.5%). | **Low** | Separated cancelled orders into distinct fulfillment status cohort and assigned 'N/A - Cancelled' to prevent skewed satisfaction averages. |
