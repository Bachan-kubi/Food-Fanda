import React, { useEffect, useReducer, useState } from "react";
import AllFood from "../../components/AllFood";
import FavItems from "../../components/fav/FavItems";
import Search from "../../components/search/Search";
import './style.css';

const reducer = (state, action)=>{
  switch(action.type){
    case 'filterFavorites':
      console.log(action)

    return {
      ...state,
      filteredValue: action.value,
    };


    default:
    return state;
  }
}

const initialState={
  filteredValue: '',
};


const Homepage = () => {
  // set loading state
  const [loading, setLoading] = useState(false);
  // store api response data
  const [recipes, setRecipies] = useState([]);
  // store data from selected favorites
  const [favorites, setFavorites] = useState([]);
  // state for api call suceess or not
  const [apiCallSuc, setApiCallSuc] = useState(false);
  // useRedcer funcitoanllity 
  const [filteredState, dispatch] = useReducer(reducer, initialState);

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
        setApiCallSuc(true);
      }
    }
    foodRecipes();
  };

// add to favorites method to get data from another component/
  const addToFavorite=(getFav)=>{
    console.log(getFav);
    let cpyFavourites = [...favorites];
    const index = cpyFavourites.findIndex(item=>item.id === getFav.id);
    
    if(index === -1){
      cpyFavourites.push(getFav)
      setFavorites(cpyFavourites);
      localStorage.setItem('favourites', JSON.stringify(cpyFavourites))
    }else{
      alert("Items already Added!")
    }
  };
  // show in fav sections
  useEffect(()=>{
    const getFromLs = JSON.parse(localStorage.getItem('favourites'));
    setFavorites(getFromLs)
  },[]);

  // remove from favs
  const handleRemove = (getFav)=>{
    let copyFavs = [...favorites];
    copyFavs = copyFavs.filter(item=>item.id !== getFav);
    setFavorites(copyFavs);
    localStorage.setItem('favourites', JSON.stringify(copyFavs))
  };

  console.log(filteredState, 'filteredstate');

  // filter favorites
  const filterFavoritesItems = favorites.filter(item=>item.title.toLowerCase().includes(filteredState.filteredValue))

  return (
    <div>
      <Search 
        getDataFromSearch={getDataFromSearch}
        apiCallSuc={apiCallSuc}
        setApiCallSuc={setApiCallSuc}
         />
      {/* loading warning */}
      {loading && (
        <div>
          <h2>Loading Recipes. Please wait.</h2>
        </div>
      )}
      <div>
        <h2>My Favorites</h2>
        <div className="favs">
        {filterFavoritesItems && filterFavoritesItems.length>0?filterFavoritesItems.map(item=><FavItems id={item.id} image={item.image} title={item.title} handleRemove={()=>handleRemove(item.id)} />): null}
        </div>
        <div>
          <h2>Search Favorites</h2>
          <input onChange={(event)=>dispatch({type: 'filterFavorites', value: event.target.value})} value={filteredState.filteredValue} name="search-fav" placeholder="Search Favorites" />
        </div>
      </div>
      <div className="foods">
        {/* map or render api data */}
      {recipes && recipes.length > 0 ? recipes.map(item => <AllFood id={item.id} image={item.image} title={item.title} addToFavorite={()=>addToFavorite(item)}  />): null}
      </div>
    </div>
  );
};

export default Homepage;
