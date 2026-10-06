# 📊 Interactive Analytics Dashboard — Food Consumer Behavior

A modern, responsive web application built with **React** and **Vite** designed to showcase an interactive **Tableau Public** business intelligence workbook studying **Food Consumer Behavior**.

---

## 🚀 Live Demo & Features

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

---

## ⚙️ Prerequisites

- **Node.js** (v18.0 or higher recommended)
- **NPM** (v9.0 or higher)

---

## 📦 Installation & Setup

1. **Clone or navigate to the project directory**:
   ```powershell
   cd e:\project
   ```

2. **Install project dependencies**:
   ```powershell
   npm install
   ```

---

## 💻 Running the Application

### Start Development Server
```powershell
npm run dev
```
Once started, open your browser and visit: **[http://localhost:5173/](http://localhost:5173/)**

> **Note for Windows PowerShell Users:**
> If you encounter a script execution error (`npm.ps1 cannot be loaded`), you can either:
> - Run directly with `npm.cmd`:
>   ```powershell
>   npm.cmd run dev
>   ```
> - Or enable script execution once:
>   ```powershell
>   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force
>   ```

### Build for Production
```powershell
npm run build
```
The optimized production bundle will be generated inside the `dist/` directory.

### Preview Production Build
```powershell
npm run preview
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
│       └── Footer.jsx         # Footer with copyright and "Powered by Tableau Public"
```

---

## 🔒 Tableau Public URLs Used

- **Main Dashboard**: [`https://public.tableau.com/views/Foodconsumerbehaviouranalyisi/FoodConsumerBehaviorAnalysis`](https://public.tableau.com/views/Foodconsumerbehaviouranalyisi/FoodConsumerBehaviorAnalysis)
- **Story Presentation**: [`https://public.tableau.com/views/Story_17912899955690/FoodConsumerBehavioranalysis`](https://public.tableau.com/views/Story_17912899955690/FoodConsumerBehavioranalysis)

---

## 📄 License & Attribution

- © 2026 Analytics Dashboard.
- Data Visualizations Powered by **Tableau Public**.
