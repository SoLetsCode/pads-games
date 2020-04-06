import React from "react";
import Radio from "@material-ui/core/Radio";
import { makeStyles } from "@material-ui/core/styles";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles({
  radioList: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row"
  }
});

export default function RadioButtonsGroup() {
  const classes = useStyles();
  const [value, setValue] = React.useState("12m+");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">My puppy is</FormLabel>
      <RadioGroup
        aria-label="age"
        name="age1"
        value={value}
        onChange={handleChange}
        className={classes.radioList}
      >
        <FormControlLabel
          value="<3m"
          control={<Radio color="primary" />}
          label="<3m"
          labelPlacement="top"
        />
        <FormControlLabel
          value="<6m"
          control={<Radio color="primary" />}
          label="<6m"
          labelPlacement="top"
        />
        <FormControlLabel
          value="12m+"
          control={<Radio color="primary" />}
          label="12m+"
          labelPlacement="top"
        />
      </RadioGroup>
    </FormControl>
  );
}
