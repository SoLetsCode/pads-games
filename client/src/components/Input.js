import React from "react";

//material UI
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    margin: "20px 0 0 0",
  },
});

export default function Input(props) {
  const { gameClick } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Button variant="contained" color="primary" onClick={gameClick}>
        Lets Play Another Game
      </Button>
    </div>
  );
}
