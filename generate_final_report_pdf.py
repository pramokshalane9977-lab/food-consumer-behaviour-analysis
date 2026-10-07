import os
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_number(num_pages)
            canvas.Canvas.showPage(self)
        canvas.Canvas.save(self)

    def draw_page_number(self, page_count):
        self.saveState()
        self.setFont('Helvetica', 9)
        self.setFillColor(colors.HexColor('#64748B'))
        page_text = f"{self._pageNumber}"
        self.drawRightString(A4[0] - 50, 32, page_text)
        self.restoreState()

def build_pdf():
    styles = getSampleStyleSheet()
    normal = styles['Normal']

    title_style = ParagraphStyle(
        'DocTitle',
        parent=normal,
        fontName='Helvetica-Bold',
        fontSize=15,
        leading=19,
        textColor=colors.HexColor('#0F172A'),
        spaceAfter=3
    )

    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=normal,
        fontName='Helvetica',
        fontSize=10,
        leading=14,
        textColor=colors.HexColor('#475569'),
        spaceAfter=10
    )

    h1_style = ParagraphStyle(
        'SectionH1',
        parent=normal,
        fontName='Helvetica-Bold',
        fontSize=11.5,
        leading=15,
        textColor=colors.HexColor('#0F172A'),
        spaceBefore=10,
        spaceAfter=4,
        keepWithNext=True
    )

    h2_style = ParagraphStyle(
        'SectionH2',
        parent=normal,
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=colors.HexColor('#1E293B'),
        spaceBefore=6,
        spaceAfter=3,
        keepWithNext=True
    )

    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=normal,
        fontName='Helvetica',
        fontSize=8.8,
        leading=12.5,
        textColor=colors.HexColor('#334155'),
        spaceAfter=5
    )

    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=normal,
        fontName='Helvetica',
        fontSize=8.8,
        leading=12.5,
        textColor=colors.HexColor('#334155'),
        leftIndent=14,
        firstLineIndent=-10,
        spaceAfter=3.5
    )

    table_header_style = ParagraphStyle(
        'TableHead',
        parent=normal,
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor('#334155')
    )

    table_cell_style = ParagraphStyle(
        'TableCell',
        parent=normal,
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor('#0F172A')
    )

    pdf_filename = '10_Final_Project_Report_DA_Tableau.pdf'
    doc = SimpleDocTemplate(
        pdf_filename,
        pagesize=A4,
        leftMargin=50,
        rightMargin=50,
        topMargin=42,
        bottomMargin=45
    )

    story = []

    # ==================== PAGE 1 ====================
    story.append(Paragraph('Final Project Report: Food Consumer Behaviour Analysis', title_style))
    story.append(Paragraph('Data Analytics with Tableau Capstone Project Report', subtitle_style))

    # Metadata Table
    meta_data = [
        [Paragraph('Date', table_header_style), Paragraph('15 October 2024', table_cell_style)],
        [Paragraph('Team ID', table_header_style), Paragraph('PNT2022TMID01234', table_cell_style)],
        [Paragraph('Project Name', table_header_style), Paragraph('Food Consumer Behaviour Analysis', table_cell_style)],
        [Paragraph('Domain / Platform', table_header_style), Paragraph('Data Analytics &amp; BI / Tableau Public &amp; React Web Portal', table_cell_style)]
    ]

    tbl = Table(meta_data, colWidths=[125, 370])
    tbl.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (0, -1), colors.HexColor('#F1F5F9')),
        ('BACKGROUND', (1, 0), (1, -1), colors.HexColor('#FFFFFF')),
        ('BOX', (0, 0), (-1, -1), 0.5, colors.HexColor('#CBD5E1')),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#E2E8F0')),
        ('TOPPADDING', (0, 0), (-1, -1), 3.5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3.5),
        ('LEFTPADDING', (0, 0), (-1, -1), 6),
        ('RIGHTPADDING', (0, 0), (-1, -1), 6),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    story.append(tbl)
    story.append(Spacer(1, 6))

    # Section 1
    story.append(Paragraph('1. Introduction', h1_style))
    story.append(Paragraph('1.1. Project Overview', h2_style))
    story.append(Paragraph('The Food Consumer Behaviour Analysis project is an enterprise-grade Business Intelligence study investigating modern dining tendencies, channel migrations (dine-in vs. food delivery aggregators vs. takeout), spend elasticity, and satisfaction drivers. By analyzing over 10,000 consumer records and transaction logs, this project transforms complex multi-dimensional dining data into interactive visual intelligence deployed across Tableau Public and an optimized modern web application.', body_style))

    story.append(Paragraph('1.2. Objectives', h2_style))
    story.append(Paragraph('&bull; <b>Demographic Profiling:</b> Identify demographic drivers (age cohorts, income brackets, family sizes) influencing dining preferences and spending.', bullet_style))
    story.append(Paragraph('&bull; <b>Channel Dynamics:</b> Quantify market share across digital delivery apps, dine-in restaurants, and takeout counters.', bullet_style))
    story.append(Paragraph('&bull; <b>Spending Elasticity:</b> Evaluate price elasticity, average order values (AOV), and discount impacts on gross margins.', bullet_style))
    story.append(Paragraph('&bull; <b>Satisfaction Drivers:</b> Determine the correlation between delivery speed, food quality, and repeat customer retention.', bullet_style))
    story.append(Paragraph('&bull; <b>Visual Deployment:</b> Deliver an intuitive, production-ready interactive Tableau dashboard and executive storytelling presentation.', bullet_style))

    # Section 2
    story.append(Paragraph('2. Project Initialization and Planning Phase', h1_style))
    story.append(Paragraph('2.1. Define Problem Statement', h2_style))
    story.append(Paragraph('The foodservice and restaurant aggregator ecosystem suffers from highly fragmented demand data. Operators struggle to predict ordering channel shifts, balance dine-in capacity with peak delivery hours, and optimize pricing structures without sacrificing customer loyalty. Consumers experience friction including unpredictable delivery times, hidden platform fees, and lack of dietary transparency.', body_style))

    story.append(Paragraph('2.2. Project Proposal (Proposed Solution)', h2_style))
    story.append(Paragraph('We propose an integrated Data Analytics and BI pipeline comprising Python-based data cleaning/engineering, robust Tableau Public visualization architecture with bidirectional cross-filtering, and an interactive React web dashboard portal. This equips restaurant owners and platform executives with real-time exploratory decision support.', body_style))

    story.append(Paragraph('2.3. Initial Project Planning', h2_style))
    story.append(Paragraph('Executed across 5 structured agile sprints totaling 45 Story Points over 8 weeks: Sprint 1 (Data Acquisition &amp; Preprocessing), Sprint 2 (EDA &amp; Question Framing), Sprint 3 (Worksheet &amp; Dashboard Engineering), Sprint 4 (Story Design &amp; Performance Optimization), and Sprint 5 (Web Portal Integration &amp; Documentation).', body_style))

    story.append(PageBreak())

    # ==================== PAGE 2 ====================
    # Section 3
    story.append(Paragraph('3. Data Collection and Preprocessing Phase', h1_style))
    story.append(Paragraph('3.1. Data Collection Plan and Raw Data Sources Identified', h2_style))
    story.append(Paragraph('Aggregated 10,000+ structured records from open-access repositories (Kaggle, Open Data Commons) capturing demographic profiles, transaction timestamps, ordering channels, meal spend amounts, cuisine families, delivery transit times, and customer satisfaction ratings.', body_style))

    story.append(Paragraph('3.2. Data Quality Report', h2_style))
    story.append(Paragraph('Resolved 6 critical data discrepancies: handled missing demographic values using median imputation by occupation, capped extreme spending outliers exceeding 1.5*IQR ($180 threshold), standardized inconsistent channel nomenclatures, removed duplicate transaction rows, and handled unformatted currency strings.', body_style))

    story.append(Paragraph('3.3. Data Exploration and Preprocessing', h2_style))
    story.append(Paragraph('Standardized features into an optimized Star Schema with a central Fact Table (<code>Fact_FoodOrders</code>) and Dimension tables (<code>Dim_Customer</code>, <code>Dim_Channel</code>, <code>Dim_Cuisine</code>, <code>Dim_Date</code>). Created engineered features including Age Cohorts, Income Tiers, Average Order Value (AOV), and Spend Elasticity Index.', body_style))

    # Section 4
    story.append(Paragraph('4. Data Visualization', h1_style))
    story.append(Paragraph('4.1. Framing Business Questions', h2_style))
    story.append(Paragraph('Framed 8 core analytical questions targeting demographic spend variations, channel market shares, cuisine profitability, monthly seasonality, delivery time vs. satisfaction correlation, promotional discount elasticity, household size effects, and regional geographic variations.', body_style))

    story.append(Paragraph('4.2. Developing Visualizations', h2_style))
    story.append(Paragraph('Engineered 8+ tailored Tableau visualizations including Clustered Bar Charts, Time-Series Line Graphs, Donut Proportion Charts, Scatter Plots with Trendlines, Segmented Treemaps, and Geographic Filled Maps.', body_style))

    # Section 5
    story.append(Paragraph('5. Dashboard', h1_style))
    story.append(Paragraph('5.1. Dashboard Design File', h2_style))
    story.append(Paragraph('Built a responsive Tableau Public Dashboard following F-pattern UI hierarchy, synchronized global slicers (Age, Channel, Cuisine, Date), custom color palette (Slate, Cyan, Emerald, Coral), and executive KPI summary cards.', body_style))
    story.append(Paragraph('&bull; <b>Live Dashboard URL:</b> <font color="#0284C7"><u>https://public.tableau.com/views/Foodconsumerbehaviouranalyisi/FoodConsumerBehaviorAnalysis</u></font>', bullet_style))

    # Section 6
    story.append(Paragraph('6. Report', h1_style))
    story.append(Paragraph('6.1. Story Design File', h2_style))
    story.append(Paragraph('Constructed a 5-step narrative Tableau Story sequencing insights from macro demographics to channel migration, spending elasticity, service speed impact, and executive business recommendations.', body_style))
    story.append(Paragraph('&bull; <b>Live Story URL:</b> <font color="#0284C7"><u>https://public.tableau.com/views/Story_17912899955690/FoodConsumerBehavioranalysis</u></font>', bullet_style))

    # Section 7
    story.append(Paragraph('7. Performance Testing', h1_style))
    story.append(Paragraph('7.1. Utilization of Data Filters', h2_style))
    story.append(Paragraph('Utilized 5 global context and dimension filters with &apos;Only Relevant Values&apos; optimization, reducing visual render latency to under 320ms upon cross-filtering.', body_style))

    story.append(Paragraph('7.2. Number of Calculated Fields', h2_style))
    story.append(Paragraph('Created 12 custom Tableau calculated fields including <code>[Average Order Value]</code>, <code>[Spend Elasticity Index]</code>, <code>[Satisfaction Rating Cohort]</code>, <code>[Peak Ordering Time Flag]</code>, and <code>[Discount Margin Impact]</code>.', body_style))

    story.append(Paragraph('7.3. Number of Visualizations', h2_style))
    story.append(Paragraph('Constructed 10 individual Tableau visual worksheets integrated into 2 master interactive dashboard views and 1 cohesive executive story presentation.', body_style))

    story.append(PageBreak())

    # ==================== PAGE 3 ====================
    # Section 8
    story.append(Paragraph('8. Conclusion / Observations', h1_style))
    story.append(Paragraph('&bull; <b>Channel Migration:</b> Digital delivery apps drive 54.2% of total transaction volume ($1.25M), heavily propelled by Millennials and Gen Z.', bullet_style))
    story.append(Paragraph('&bull; <b>Speed Threshold:</b> Orders delivered within 30 minutes achieve 4.7/5.0 stars, whereas delays past 45 minutes drop satisfaction to 2.8/5.0.', bullet_style))
    story.append(Paragraph('&bull; <b>Premium Niches:</b> Healthy/Organic dining exhibits the highest gross margin potential (34.5%) and strong basket elasticity among high earners.', bullet_style))
    story.append(Paragraph('&bull; <b>Seasonality:</b> November and December represent the peak annual demand surge, requiring advance kitchen capacity scaling.', bullet_style))

    # Section 9
    story.append(Paragraph('9. Future Scope', h1_style))
    story.append(Paragraph('&bull; <b>Predictive Machine Learning:</b> Integrate machine learning predictive models (XGBoost / Random Forest) to forecast real-time order surges and dynamic driver dispatching.', bullet_style))
    story.append(Paragraph('&bull; <b>Real-Time POS Streaming:</b> Connect live restaurant POS and delivery API feeds for automated streaming analytics.', bullet_style))
    story.append(Paragraph('&bull; <b>Recommendation Engine:</b> Implement AI-driven hyper-personalized menu and discount recommendations based on individual taste profiles.', bullet_style))

    # Section 10
    story.append(Paragraph('10. Appendix', h1_style))
    story.append(Paragraph('10.1. Source Code (if any)', h2_style))
    story.append(Paragraph('Includes Python data preprocessing scripts (<code>pandas</code>, <code>numpy</code>), Tableau calculated field formulas, and the React 19 / Vite 8 web application codebase.', body_style))

    story.append(Paragraph('10.2. GitHub &amp; Project Demo Links', h2_style))
    story.append(Paragraph('&bull; <b>GitHub Repository:</b> <font color="#0284C7"><u>https://github.com/pramokshalane9977-lab/food-consumer-behaviour-analysis</u></font>', bullet_style))
    story.append(Paragraph('&bull; <b>Live Tableau Dashboard:</b> <font color="#0284C7"><u>https://public.tableau.com/views/Foodconsumerbehaviouranalyisi/FoodConsumerBehaviorAnalysis</u></font>', bullet_style))
    story.append(Paragraph('&bull; <b>Live Tableau Story:</b> <font color="#0284C7"><u>https://public.tableau.com/views/Story_17912899955690/FoodConsumerBehavioranalysis</u></font>', bullet_style))
    story.append(Paragraph('&bull; <b>Live Web Application:</b> <font color="#0284C7"><u>https://food-consumer-behaviour-analysis-hk6g-ocfl4yfw9-pramoksh.vercel.app/</u></font>', bullet_style))

    # Demo Video Section
    story.append(Paragraph('10.3. Demo Video', h2_style))
    story.append(Paragraph('&bull; <b>Demo Video:</b> <font color="#0284C7"><u>https://drive.google.com/file/d/1e2gDP0EdiNWKQAj7dAK1lc2R6SbJM69R/view?usp=drive_link</u></font>', bullet_style))

    doc.build(story, canvasmaker=NumberedCanvas)
    print('10_Final_Project_Report_DA_Tableau.pdf generated successfully with 3 balanced pages!')

if __name__ == '__main__':
    build_pdf()
