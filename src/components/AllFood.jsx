import React from "react";


const AllFood = (props) => {
  // console.log(props);
  const { id, image, title, addToFavorite } = props;
  

  return (
    <div className="allFoods">
      <div key={id}>
        <h2>{title}</h2>
        <div>
          <img src={image} alt="recipi" />
        </div>
        <button className="addFav-btn" type="button" onClick={addToFavorite}>
          Add to Favourite
        </button>
      </div>
    </div>
  );
};

export default AllFood;
