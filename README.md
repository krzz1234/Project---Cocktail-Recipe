# 🍹 Cocktail of the Day Web App

Application - https://project-cocktail-recipe.onrender.com/

A fun and simple web application built with **Node.js**, **Express**, and **EJS** that displays a random cocktail recipe every time you load the page - just hover over the image and recipe will magically apear. It pulls data from [TheCocktailDB API](https://www.thecocktaildb.com/) and presents it in a clean, card-style layout with dynamic content.

---

## ✨ Features

### 🔁 Random Cocktail Fetching
- On each visit to the homepage (`/`), the app fetches a **random cocktail** from TheCocktailDB API.
- It displays the **cocktail name**, **instructions**, **image**, and a list of **ingredients with their measurements**.

### 🎨 Dynamic EJS Templating
- Uses EJS (`Embedded JavaScript`) as the templating engine to render dynamic content into HTML.
- All cocktail data (name, image, recipe, ingredients) is passed from the backend and injected into the frontend view.

### 🧪 Ingredient & Measure Pairing
- Ingredients and their corresponding measurements are programmatically paired by iterating through `strIngredient1` to `strIngredient15` and matching them with `strMeasure1` to `strMeasure15`.

### 📸 Background Image Integration
- The cocktail’s thumbnail image (`strDrinkThumb`) is used as a **background image** in a styled `.card` container, giving each drink a unique visual.

### 📁 Static Assets
- Includes a `/public` directory for CSS and other static files.
- Uses a custom font (`Gloria Hallelujah`) and styling to give the UI a fun, handwritten feel.

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express
- **Frontend:** EJS, HTML, CSS
- **API:** [TheCocktailDB](https://www.thecocktaildb.com/api.php)

---

## 🚀 Getting Started

### Prerequisites
- Node.js and npm installed

### Installation

```bash
git clone https://github.com/your-username/cocktail-app.git
cd cocktail-app
npm install
