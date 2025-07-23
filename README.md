# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




````markdown
# Tailwind CSS v4 + Vite + React Setup

This guide explains how I set up **Tailwind CSS v4** in a **Vite + React** project from scratch.

---

## **Steps to Set Up Tailwind CSS**

### **1. Create a Vite + React Project**
```bash
npm create vite@latest tailwind-todo-list
cd tailwind-todo-list
npm install
````

---

### **2. Install Tailwind CSS v4 and PostCSS Plugin**

```bash
npm install -D tailwindcss @tailwindcss/postcss
```

> Tailwind v4 no longer requires `autoprefixer` as it's built-in.

---

### **3. Create Tailwind Config**

```bash
npx tailwindcss init
```

This creates a `tailwind.config.js` file.
I updated it to:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

### **4. Create PostCSS Config**

At the root of the project, I created a **`postcss.config.js`** file with:

```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

---

### **5. Add Tailwind to CSS**

In **`src/index.css`**:

```css
@import "tailwindcss";
```

> Tailwind v4 replaced the old `@tailwind base; @tailwind components; @tailwind utilities;` syntax.

---

### **6. Import the CSS File**

In **`src/main.jsx`**, I imported the Tailwind styles:

```js
import './index.css';
```

---

### **7. Run the Dev Server**

To start the project:

```bash
npm run dev
```

---

### **8. Test Tailwind**

I tested Tailwind by adding this in **`App.jsx`**:

```jsx
<h1 className="text-4xl font-bold text-purple-600">
  Tailwind is working!
</h1>
```

---

## **Project Structure**

```
tailwind-todo-list/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── index.html
├── postcss.config.js
├── tailwind.config.js
├── package.json
├── vite.config.js
```

---

## **Scripts**

* **`npm run dev`** – Start development server.
* **`npm run build`** – Build for production.
* **`npm run preview`** – Preview production build.

---

## **References**

* [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)
* [Vite Documentation](https://vitejs.dev/guide/)

---



