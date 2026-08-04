# 🚀 AI Architecture Modal - Implementation Plan

This document outlines the strategy for building the "Case Study Modal" feature in the Shyametrics portfolio.

Currently, hovering over a project card reveals an "AI ARCHITECTURE" animation. This is a visual hook designed to create a curiosity gap. The next phase is to make this functional.

---

## 🎯 The Core Objective

When a recruiter, CTO, or hiring manager clicks a project card (or the "AI Architecture" badge), they should not be immediately kicked out to a raw GitHub repository.

Instead, they should be presented with an **in-app, full-screen (or large center) modal** that breaks down the engineering decisions behind the project. You need to prove *how you think* and *how you build*.

## 📐 Required Components for the Modal

For each project, the modal should structurally contain the following sections:

### 1. The "Decision" Hook (Hero of the Modal)

- **What to show:** A one-sentence summary of the core business problem and the decision the AI enables.
- **Example:** *"Predicting liver disease stage from clinical biomarkers to enable early intervention triage."*

### 2. The Architecture Diagram (Visual)

- **What to show:** A clean, high-quality flow chart or system design diagram.
- **Tools to build it:** Draw.io, Excalidraw, or Mermaid.js (embedded directly in React).
- **Flow:** `Raw Data Input` ➔ `Preprocessing Pipeline` ➔ `ML Model / Decision Engine` ➔ `Business Output`.

### 3. The Tech Stack & Rationale

- **What to show:** Don't just list technologies (e.g., "Python, FastAPI"). Explain *why*.
- **Example:** *"FastAPI was chosen for the backend to handle high-concurrency async inference requests with minimal latency."*

### 4. The Decision Logic (The "Secret Sauce")

- **What to show:** A brief explanation of the rules engine or the post-processing logic that turns the model's raw probability output (e.g., 81% confidence) into a definitive business action (e.g., "Route to Specialist").

### 5. Call to Actions (CTAs)

- **Primary Action:** `View Live Demo` (if applicable).
- **Secondary Action:** `View Source Code on GitHub` (where they can dive into the actual implementation).

---

## 🛠 Technical Implementation Steps (For Later)

1. **State Management:**
   - Add a piece of state to `Projects.jsx` to track the currently selected project: `const [selectedProject, setSelectedProject] = useState(null);`

2. **The Modal Component:**
   - Create a new component `ProjectModal.jsx`.
   - Use `framer-motion` for a smooth scale-in and fade-in entry animation.
   - Use `AnimatePresence` to handle unmounting animations gracefully.
   - Ensure the modal traps focus and disables background scrolling (`document.body.style.overflow = 'hidden'`).

3. **Data Structure Update:**
   - Update the `caseStudies` array in `Projects.jsx` to include new fields for the modal content:
   
     ```javascript
     {
       title: "StyleSynk",
       // ... existing fields ...
       modalContent: {
         architectureDiagramUrl: "/diagrams/stylesynk_arch.png",
         techRationale: "...",
         decisionLogic: "..."
       }
     }
     ```

4. **Click Handler:**
   - Attach an `onClick={() => setSelectedProject(project)}` event to the `ProjectCard` component.

---

## 💡 UX / UI Guidelines for the Modal

- **Background:** Use a heavy blur (`backdrop-blur-xl`) with a dark translucent overlay (`bg-black/80`) to keep the user focused on the modal content.
- **Close Action:** Ensure the user can close the modal by clicking outside of it, pressing the `Escape` key, or clicking a dedicated 'X' button in the top right corner.
- **Scrollability:** If the content is long, the interior of the modal should scroll independently while the main page remains locked.
