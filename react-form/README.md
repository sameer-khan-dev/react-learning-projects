# React Controlled Forms

A React project demonstrating **controlled components** and **form handling** patterns — from a single input to multi-field forms with submission feedback.

## 🚀 Demo

Live demo: `https://sameer-khan-dev.github.io/react-learning-projects/react-form/`


---

## 📁 Project Structure

```
src/
├── App.jsx             # Root component, renders all three form demos
├── App.css             # App-level styles
├── main.jsx            # React entry point
├── index.css           # Global styles (centered layout)
├── SingleInput.jsx     # Controlled single input form
├── MultiInputs.jsx     # Controlled multi-field form
└── CommentForm.jsx     # Full comment form with rating & submission state
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or above recommended)
- npm

### Installation

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
```

### Run Locally

```bash
npm run dev
```

## 🚀 Deploying to GitHub Pages

1. Install the `gh-pages` package:

   ```bash
   npm install gh-pages --save-dev
   ```

2. In `package.json`, add:

   ```json
   "homepage": "https://sameer-khan-dev.github.io/react-learning-projects/react-form/",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist --dest react-form"
   }
   ```

3. In `vite.config.js`, set the `base` option to your repo name:

   ```js
   export default defineConfig({
    base: '/react-learning-projects/react-form/',
    plugins: [react()],
   })
   ```

4. Deploy:

   ```bash
   npm run deploy
   ```

---

## 🧩 Components

### `SingleInput.jsx`
A minimal controlled form with a single text field.
- Manages state with `useState`
- Clears the input on form submission

### `MultiInputs.jsx`
A controlled form handling multiple fields (`fullName`, `userName`) using a single shared state object.
- Uses a generic `updateFormData` handler with `event.target.name` as a dynamic key
- Resets all fields on submit

### `CommentForm.jsx`
A more complete form simulating a comment/review submission.
- Fields: **Username**, **Remarks** (textarea), **Rating** (1–5)
- Shows a **"Submitted"** confirmation message after form submission
- Resets all fields post-submit

---

## 💡 Concepts Covered

| Concept | Where |
|---|---|
| `useState` for form state | All components |
| Controlled inputs (`value` + `onChange`) | All components |
| Generic change handler with computed property names | `MultiInputs`, `CommentForm` |
| `event.preventDefault()` on submit | All components |
| Conditional rendering | `CommentForm` |

---

## 🛠️ Built With

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)

---

---

## 🧑‍💻 Author

**Sameer Khan**  
GitHub: [@sameer-khan-dev](https://github.com/sameer-khan-dev)

LinkedIn: [Sameer Khan](https://www.linkedin.com/in/sameer-khan-858a3137a)

---

## 📄 License

This project is for learning/personal use.
