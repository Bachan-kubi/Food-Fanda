import React from 'react';

const AllFood = (props) => {
    // console.log(props);
    const {id, image, title, addToFavorite}= props;

    return (
        <div key={id}>
            <h2>All Food Items</h2>
            <div>
                <img src={image} alt="recipi" />
            </div>
            <h2>Title: {title}</h2>
            <button type='button' onClick={addToFavorite}>Add to Favourite</button>
        </div>
    );
};

export default AllFood;