# React Router Vending Machine

A simple React project built with **Vite** and **React Router v6**.  
The app simulates a vending machine where users can click snacks to view their details, with images displayed on each page.

---

## **Features**
- **VendingMachine Homepage**: Displays a list of snacks with images.
- **Snack Components**: Chips, Soda, and Gum, each with its own route and image.
- **React Router v6**: Client-side navigation between pages.
- **Back Navigation**: Each snack page includes a link back to the main vending machine.
- **404 Page**: A `NotFound` component handles unknown routes.

---

## **Project Structure**
```bash
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── App.jsx # Routes and navigation
│   ├── assets # Images for snacks
│   │   ├── chips.jpg
│   │   ├── gum.jpg
│   │   ├── soda.jpg
│   │   └── vending_machine.jpg
│   ├── components
│   │   ├── Chips.jsx
│   │   ├── Gum.jsx
│   │   ├── NotFound.jsx
│   │   ├── Soda.jsx
│   │   └── VendingMachine.jsx
│   ├── main.jsx # App entry point with BrowserRouter
│   └── styles.css # Global styles
└── vite.config.js
```

---

## **Getting Started**

### **1. Clone the repository**
```bash
git clone https://github.com/aracope/react-router-vending-machine
cd react-router-vending-machine
```
### **2. Install dependencies**
```bash
npm install
```
### **3. Run the development server**
```bash
npm run dev
```
### **4. Open http://localhost:5173 in your browser to play!**

## Built With
- React
- Vite
- React Router

## Future Improvements
- Add more snacks or categories.

- Include pricing and "purchase" interactions.

- Add unit tests with Vitest + React Testing Library.

## **Credits**
The images used in this project are sourced from the following creators:

- **Gum**: [Bubble Gum Candy Cartoon Vector](https://www.freepik.com/free-vector/bubble-gum-candy-cartoon-vector-icon-illustration-food-object-icon-concept-isolated-premium-flat_56274235.htm) - Freepik  
- **Soda**: [Soda Bubbles Illustration](https://www.freepik.com/free-vector/soda-bubbles-champagne-water-oxygen-air-fizz_7743081.htm) - Freepik  
- **Chips**: [Realistic Chips Package](https://www.freepik.com/free-vector/realistic-chips-package_9398713.htm) - Freepik  
- **Vending Machines**:  
  - [Goblin Vending Machine](https://unsplash.com/photos/red-and-green-coca-cola-vending-machine-GIklu6QAb9g) - Unsplash  
  - [Normal Vending Machine](https://www.freepik.com/free-vector/snacks-vending-machine-realistic-with-electronic-control-panel-isolated_7200947.htm) - Freepik
