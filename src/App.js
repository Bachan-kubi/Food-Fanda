import { createContext, useState } from "react";
import "./App.css";
import ThemeButton from "./components/themeButton/ThemeButton";
import Homepage from "./pages/homepage/Homepage";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(false); 
  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme,
    }}>
      <div className="App" style={theme? {backgroundColor: 'grey'} : {backgroundColor: 'orange'}}>
        <ThemeButton />
        <Homepage />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
