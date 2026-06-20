# 🎰 Lottery Game

A simple, fun Lottery Game built with React + Vite. Generate a random ticket of numbers and check if their sum matches the winning sum!

## 🚀 Demo

Live demo: `https://sameer-khan-dev.github.io/react-learning-projects/lottery-ticket/`

## 📖 About

This is a beginner-friendly React project that demonstrates core React concepts like components, props, state, and conditional rendering. The game generates a ticket with `n` random digits (0-9). If the sum of the digits matches the predefined `winningSum`, the player wins!

## ✨ Features

- 🎲 Randomly generated lottery ticket numbers
- 🏆 Win detection based on a target sum
- 🔄 "Buy New Ticket" button to re-roll numbers
- 🌗 Light/Dark mode support via CSS variables
- ⚡ Built with Vite for fast development and builds

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- CSS (custom properties / variables)

## 📁 Project Structure

```
├── src/
│   ├── App.jsx          # Root component, renders Lottery
│   ├── App.css
│   ├── Lottery.jsx       # Main game logic (state, win check)
│   ├── Lottery.css
│   ├── Ticket.jsx        # Renders the ticket numbers
│   ├── Ticket.css
│   ├── TicketNum.jsx     # Renders a single ticket digit
│   ├── helper.js         # genRandomNum() and sum() utility functions
│   ├── main.jsx          # App entry point
│   └── index.css         # Global styles & CSS variables
├── index.html
└── package.json
```

## ⚙️ How It Works

1. `genRandomNum(n)` generates an array of `n` random digits (0-9).
2. `sum(arr)` adds up the digits in the ticket.
3. `Lottery` compares the ticket's sum to the `winningSum` prop.
4. If they match, a congratulatory message is shown.
5. Clicking **Buy New Ticket** regenerates the ticket and re-checks the win condition.

## 🧩 Usage

The `Lottery` component accepts two props:

```jsx
<Lottery n={3} winningSum={15} />
```

| Prop         | Type   | Description                              |
|--------------|--------|-------------------------------------------|
| `n`          | number | Number of digits on the ticket            |
| `winningSum` | number | Target sum that triggers a win            |

## 💻 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/sameer-khan-dev/react-learning-projects.git

cd lottery-ticket

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
   "homepage": "https://sameer-khan-dev.github.io/react-learning-projects/lottery-ticket/",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist --dest lottery-ticket"
   }
   ```

3. In `vite.config.js`, set the `base` option to your repo name:

   ```js
   export default defineConfig({
     base: '/react-learning-projects/lottery-ticket/',
     plugins: [react()],
   })
   ```

4. Deploy:

   ```bash
   npm run deploy
   ```

## 📌 Future Improvements

- Add ticket purchase history
- Animate ticket number reveal
- Allow custom `n` and `winningSum` via UI inputs
- Add sound effects on win
 

---

Made with ❤️ using React + Vite
