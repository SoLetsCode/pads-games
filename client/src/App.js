import React from "react";

import "./styles/app.css";

//components
import Appbar from "./components/Appbar";
import GameCard from "./components/GameCard";

//Material-UI
import { Grid } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Appbar />
      <Grid container justify="center">
        <Grid item>
          <GameCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
