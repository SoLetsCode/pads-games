import React, { useState } from "react";

import "./styles/app.css";

//data
import games from "./data/games.json";

//components
import Appbar from "./components/Appbar";
import GameCard from "./components/GameCard";
import Input from "./components/Input";
// import Radio from "./components/Radio";

//Material-UI
import { Grid } from "@material-ui/core";

function App() {
  const [game, setGame] = useState(
    games[Math.floor(Math.random() * games.length)]
  );
  const [flip, setFlip] = useState(false);

  const gameClick = () => {
    setFlip(!flip);
  };

  return (
    <div className="App">
      <Appbar />
      <Grid container justify="center">
        <Grid item>
          <div className="gamecard__wrapper">
            <div
              className={flip ? "gamecard__flip" : ""}
              onAnimationEnd={() => {
                setFlip(false);
                setGame(games[Math.floor(Math.random() * games.length)]);
              }}
            >
              <GameCard game={game} />
            </div>
          </div>
        </Grid>
        <Grid item>
          <Input gameClick={gameClick} />
        </Grid>
        {/* to be implemented later
        <Grid item>
          <Radio />
        </Grid> */}
      </Grid>
    </div>
  );
}

export default App;
