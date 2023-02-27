import React from 'react';

const FavItems = (props) => {
    const {id, title, image} = props;
    return (
        <div key={id}>
            <h2>{title}</h2>
            <img src={image} alt="" />
        </div>
    );
};

export default FavItems;