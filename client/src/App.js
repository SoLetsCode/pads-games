import React from "react";

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
  return (
    <div className="App">
      <Appbar />
      <Grid container justify="center">
        <Grid item>
          <GameCard game={games[1]} />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
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
