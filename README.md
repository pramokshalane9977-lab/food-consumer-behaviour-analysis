# 📊 Interactive Analytics Dashboard — Food Consumer Behavior

A modern, responsive web application built with **React** and **Vite** designed to showcase an interactive **Tableau Public** business intelligence workbook studying **Food Consumer Behavior**.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel%20App-00C2FF?style=for-the-badge&logo=vercel)](https://food-consumer-behaviour-analysis-hk6g-ocfl4yfw9-pramoksh.vercel.app/)
[![Tableau Public](https://img.shields.io/badge/Tableau-Public-E97627?style=for-the-badge&logo=tableau)](https://public.tableau.com/views/Foodconsumerbehaviouranalyisi/FoodConsumerBehaviorAnalysis)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite)](https://vite.dev)

---

## 📊 Dashboard

The interactive Tableau Dashboard presents key insights using charts, KPIs, filters, and visual analytics.

🔗 ["View Tableau Dashboard"](https://public.tableau.com/views/Foodconsumerbehaviouranalyisi/FoodConsumerBehaviorAnalysis)

## 📖 Tableau Story

The Tableau Story presents the analysis in a structured manner, covering consumer behaviour, ordering channels, spending, delivery performance, and satisfaction.

🔗 ["View Tableau Story"](https://public.tableau.com/views/Story_17912899955690/FoodConsumerBehavioranalysis)

## 🌐 Web Application

The project is integrated into a simple HTML and CSS web interface and deployed using Vercel.

🔗 ["View Live Website"](https://food-consumer-behaviour-analysis-hk6g-ocfl4yfw9-pramoksh.vercel.app/)

## 🎥 Demo Video

Watch a complete walkthrough demonstration of the interactive dashboard, executive story narrative, and portal features.

🔗 ["View Demo Video"](https://drive.google.com/file/d/1e2gDP0EdiNWKQAj7dAK1lc2R6SbJM69R/view?usp=drive_link)

- 💻 **GitHub Repository**: [https://github.com/pramokshalane9977-lab/food-consumer-behaviour-analysis](https://github.com/pramokshalane9977-lab/food-consumer-behaviour-analysis)

---

## ✨ Features & Architecture

- **Direct Tableau Public Integration**: Embedded live visualization using responsive iframe architecture without artificial mock charts.
- **Dual View Modes**:
  - 📊 **Interactive Dashboard**: Multi-metric command center with dynamic cross-filtering (`Foodconsumerbehaviouranalyisi/FoodConsumerBehaviorAnalysis`).
  - 📖 **Executive Story Mode**: Narrative step-by-step presentation format (`Story_17912899955690/FoodConsumerBehavioranalysis`).
- **Responsive Embed Canvas**:
  - Desktop: 880px standard / 1050px expanded height toggle.
  - Mobile: Dynamic touch-optimized view (min 620px+).
  - Native **Fullscreen** toggle mode.
- **Loading State & Error Resilience**: Glassmorphism skeleton loader with animated spinner and live server connection indicators.
- **Theme Switcher**: Dark Mode (default tech-slate theme) and Clean Light Mode with persistent storage.
- **Structured Domain Context**: Project scope, research pillars (Demographics, Channel Dynamics, Spending Elasticity, Satisfaction Drivers), and interactive FAQ.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite 8
- **Icons**: Lucide React
- **Styling**: Vanilla Modern CSS (CSS custom properties, glassmorphism, responsive grid/flexbox)
- **Data Engine**: Tableau Public Cloud (`public.tableau.com`)
- **Deployment Platform**: Vercel Cloud

---

## ⚙️ Prerequisites

- **Node.js** (v18.0 or higher recommended)
- **NPM** (v9.0 or higher)
- **Git**

---

## 📦 Installation & Local Development

1. **Clone or navigate to the project directory**:
   ```powershell
   git clone https://github.com/pramokshalane9977-lab/food-consumer-behaviour-analysis.git
   cd food-consumer-behaviour-analysis
   ```

2. **Install project dependencies**:
   ```powershell
   npm install
   ```

3. **Start Development Server**:
   ```powershell
   npm run dev
   ```
   Open your browser and visit: **[http://localhost:5173/](http://localhost:5173/)**

   > **Note for Windows PowerShell Users:**
   > If you encounter a script execution error (`npm.ps1 cannot be loaded`), run directly with:
   > ```powershell
   > npm.cmd run dev
   > ```

4. **Build for Production**:
   ```powershell
   npm run build
   ```
   The compiled production bundle will be generated inside the `dist/` directory.

---

## 🚀 Git & Deployment Procedure

Follow these steps to stage changes, commit, push to GitHub, and trigger automatic or manual Vercel deployments:

### Step 1: Check Current Git Status
```powershell
git status
```

### Step 2: Stage Modified Files
Stage all updated files (or specify individual filenames):
```powershell
git add .
```

### Step 3: Commit Your Changes
Create a descriptive commit message:
```powershell
git commit -m "feat: update live deployment URL and documentation"
```

### Step 4: Push to GitHub
Push your local commits to the remote repository branch:
```powershell
# If working on the current branch (e.g. new-feature or main):
git push origin <your-branch-name>

# Example:
git push origin new-feature
```

### Step 5: Merge into `main` (If deploying to Production)
If your Vercel deployment is connected to the `main` branch:
```powershell
# Checkout main
git checkout main

# Pull latest changes from remote
git pull origin main

# Merge your feature branch
git merge new-feature

# Push to main to trigger production build on Vercel
git push origin main
```

---

## ☁️ Vercel Deployment Guide

### Automatic Continuous Deployment (Recommended)
1. Link your GitHub repository (`food-consumer-behaviour-analysis`) to your [Vercel Dashboard](https://vercel.com).
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Every time you push commits to GitHub (`main` or preview branches), Vercel automatically builds and deploys the new version to:
   - **Production URL**: [https://food-consumer-behaviour-analysis-hk6g-ocfl4yfw9-pramoksh.vercel.app/](https://food-consumer-behaviour-analysis-hk6g-ocfl4yfw9-pramoksh.vercel.app/)

### Manual Deployment via Vercel CLI
If you prefer deploying directly from the terminal:
```powershell
# 1. Install Vercel CLI globally (one-time)
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy to Preview
vercel

# 4. Deploy directly to Production
vercel --prod
```

---

## 📂 Project Structure

```text
├── index.html                 # Main entry point with SEO metadata and Google Fonts
├── package.json               # Dependencies and build scripts
├── vite.config.js             # Vite configuration
├── src/
│   ├── main.jsx               # React DOM mounting
│   ├── App.jsx                # Layout orchestrator & theme state
│   ├── App.css                # Layout styles, animations, responsive rules
│   ├── index.css              # Design system tokens and glassmorphism styling
│   └── components/
│       ├── Navbar.jsx         # Sticky header with brand, nav links, and theme toggle
│       ├── Hero.jsx           # Hero banner with CTA and feature highlights
│       ├── DashboardEmbed.jsx # Responsive Tableau iframe container with controls
│       ├── AboutSection.jsx   # Research pillars, tech stack info, and FAQ accordion
│       └── Footer.jsx         # Footer with copyright, links, and "Powered by Tableau Public"
```

---

## 🔒 Tableau Public URLs Used

- **Main Dashboard**: [`https://public.tableau.com/views/Foodconsumerbehaviouranalyisi/FoodConsumerBehaviorAnalysis`](https://public.tableau.com/views/Foodconsumerbehaviouranalyisi/FoodConsumerBehaviorAnalysis)
- **Story Presentation**: [`https://public.tableau.com/views/Story_17912899955690/FoodConsumerBehavioranalysis`](https://public.tableau.com/views/Story_17912899955690/FoodConsumerBehavioranalysis)

---

## 📄 License & Attribution

- © 2026 Analytics Dashboard.
- Data Visualizations Powered by **Tableau Public**.
- Deployed on **Vercel**.
