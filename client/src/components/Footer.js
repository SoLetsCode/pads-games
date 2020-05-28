import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    position: "relative",
    bottom: "0",
    padding: "50px",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.root} variant="subtitle2">
        Disclaimer: Not all games are endorsed by PADS. Please use with
        discretion
      </Typography>
    </div>
  );
}
