# Drag & Drop Digits 🔢✨

A sleek, interactive drag-and-drop digit reordering web application built with **React**, **Vite**, and **Modular CSS**.

- **Live Demo**: [https://xdragndrop-tanmaygurav.vercel.app/](https://xdragndrop-tanmaygurav.vercel.app/)
- **Repository**: [https://github.com/tanmaygurav/XDragNDrop](https://github.com/tanmaygurav/XDragNDrop)

---

## 🎯 Features

- **Interactive Drag & Drop**: Native HTML5 Drag and Drop API implementation allowing seamless reordering of digit tiles.
- **Smart Shift Behavior**: Moving a digit box shifts neighboring digits rather than simply swapping positions.
- **Visual Feedback**: Real-time visual cue indicators showing dragged items and active drop target zones.
- **Responsive & Clean UI**: Polished card layout designed with CSS Modules for scoped styling.

---

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/)
- **Bundler / Dev Server**: [Vite](https://vitejs.dev/)
- **Styling**: CSS Modules
- **Testing**: [Cypress](https://www.cypress.io/) for E2E verification

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tanmaygurav/XDragNDrop.git
   cd XDragNDrop
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

---

## 🧪 Running Tests

The application is validated with Cypress end-to-end tests:

1. In a separate terminal, navigate to the `assessment` directory:
   ```bash
   cd assessment
   npm install
   ```

2. Run the Cypress E2E test suite (make sure the dev server is running on `http://localhost:5173`):
   ```bash
   npx cypress run --spec "cypress/e2e/spec.cy.js"
   ```

