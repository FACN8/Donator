import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
    top: 50
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function DeliveryTime() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    time: ""
  });

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
}

    return (
      <div>
          <br/>
        <h2>
          Please Tell us when is a good time for our delivery driver to come
          pick up what you’re donating:
        </h2>
        <br/>
        <br/>
        <h3>Please Choose a Time:</h3>
        <FormControl className={classes.formControl}>
          <NativeSelect
            className={classes.selectEmpty}
            value={state.time}
            name="time"
            onChange={handleChange("time")}
          >
            <option value="" disabled>
              Please Choose
            </option>
            <option value={10}>8:00 - 12:00</option>
            <option value={20}>14:00 - 18:00</option>
            <option value={30}>Other</option>
          </NativeSelect>
          <FormHelperText>Choose a Time</FormHelperText>
        </FormControl>
      </div>
    );
  };

export default DeliveryTime;
