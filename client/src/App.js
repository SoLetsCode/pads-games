import React, { useState } from "react";

import "./styles/app.css";

//data
import games from "./data/games.json";

//components
import Appbar from "./components/Appbar";
import GameCard from "./components/GameCard";
// import Radio from "./components/Radio";

//Material-UI
import { Grid, Button } from "@material-ui/core";

function App() {
  const [game, setGame] = useState(games[0]);

  const gameClick = () => {
    setGame(games[Math.floor(Math.random() * games.length)]);
  };

  return (
    <div className="App">
      <Appbar />
      <Grid container justify="center">
        <Grid item>
          <GameCard game={game} />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={gameClick}>
            Lets Play Another Game
          </Button>
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
