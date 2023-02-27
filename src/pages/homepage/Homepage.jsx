import React, { useState } from "react";
import AllFood from "../../components/AllFood";
import Search from "../../components/search/Search";

const ami = "ami";

const Homepage = () => {
  // set loading state
  const [loading, setLoading] = useState(false);
  // store api response data
  const [recipes, setRecipies] = useState([]);

  const getDataFromSearch = (getData) => {
    // keep the loading state as true
    setLoading(true);

    //calling api
    async function foodRecipes() {
      const apiResponse = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=d9b8267938a147059b71c5ed9e184a47&query=${getData}`
      );

      const result = await apiResponse.json();
      const { results } = result;
      console.log(results);

      // set loading false and result recipes
      if (results && results.length > 0) {
        setLoading(false);
        setRecipies(results);
      }
    }
    foodRecipes();
  };
  console.log(loading, recipes);

  return (
    <div>
      <Search getDataFromSearch={getDataFromSearch} ami={ami} />
      {/* loading warning */}
      {loading && (
        <div>
          <h2>Loading Recipes. Please wait.</h2>
        </div>
      )}

      {/* map or render api data */}
      {recipes && recipes.length > 0 ? recipes.map(item => <AllFood id={item.id} image={item.image} title={item.title}   />): null}
    </div>
  );
};

export default Homepage;
