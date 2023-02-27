import React from 'react';

const AllFood = (props) => {
    console.log(props);
    const {id, image, title}= props;
    return (
        <div key={id}>
            <h2>All Food Items</h2>
            <div>
                <img src={image} alt="recipi" />
            </div>
            <h2>Title: {title}</h2>
        </div>
    );
};

export default AllFood;