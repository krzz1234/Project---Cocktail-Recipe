import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL);
    const drink = result.data.drinks[0];

    // Pair ingredients with measures
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = drink[`strIngredient${i}`];
      const measure = drink[`strMeasure${i}`];

      if (ingredient) {
        ingredients.push({
          ingredient,
          measure: measure || "", // Fallback if measure is null
        });
      }
    }

    res.render("index.ejs", {
      recipe: drink.strInstructions,
      name: drink.strDrink,
      image: drink.strDrinkThumb,
      ingredients,
    });
  } catch (error) {
    console.log(error.response.data);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
