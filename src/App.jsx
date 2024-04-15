import React from "react";
import Button from "./components/Buttons/Button";
import Landing from "./components/landingpage/Landing";
import "./App.css";
import { useState } from "react";
import GamePage from "./components/Gamepage/GamePage";


function App(){
const [isGameSatrted , setIsGameStarted]=useState(false);

function toggleGame(){
    setIsGameStarted(true);
}

    return(
        <div >
        {isGameSatrted ? <GamePage /> : <Landing toggle={toggleGame}/>}
        </div>

    );
};

export default App;