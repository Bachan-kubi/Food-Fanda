import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import './style.css';

const ThemeButton = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    console.log(theme, setTheme);

    return (
        <div>
            <button style={theme? {backgroundColor: 'grey'} : {backgroundColor: 'orange'}} onClick={()=>setTheme(!theme)} className='theme-btn'>Change Theme</button>
        </div>
    );
};

export default ThemeButton;