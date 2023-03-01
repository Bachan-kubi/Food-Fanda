import React, { useContext } from 'react';
import { ThemeContext } from '../../App';

const FavItems = (props) => {
    const {id, title, image, handleRemove} = props;
    const {theme}= useContext(ThemeContext);
    return (
        <div key={id}>
            <h2 style={theme? {color: "white"}: {}}>{title}</h2>
            <img src={image} alt="" />
            <button style={theme? {backgroundColor: "red"}: {}} type='button' onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default FavItems;