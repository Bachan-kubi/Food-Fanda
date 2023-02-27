import React from 'react';

const FavItems = (props) => {
    const {id, title, image, handleRemove} = props;
    return (
        <div key={id}>
            <h2>{title}</h2>
            <img src={image} alt="" />
            <button type='button' onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default FavItems;