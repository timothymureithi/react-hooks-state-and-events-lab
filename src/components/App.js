import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

//darkmode toggle
// replace false with a state variable switch(true and false)
  const [darkMode, setUpDarkMode] = useState(false);
  const appClass = darkMode ? "App dark" : "App light"

  //function for darkMode that changes to 'dark' mode when the button is clicked
  function changeDarkMode(event){ 
    setUpDarkMode((darkMode) => !darkMode);
  }
    

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeDarkMode}>
          {darkMode ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
