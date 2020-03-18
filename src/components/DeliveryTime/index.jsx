import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
    top: 20
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  chooseTime: {
    marginLeft: 165
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
  };

  return (
    <div>
      <br />
      <h2>
        Please Tell us when is a good time for our delivery driver to come pick
        up what you’re donating:
      </h2>
      <br />
      <br />
      <FormControl className={classes.formControl}>
        <div className="timeSelect">
          <FormHelperText className={classes.chooseTime}>
            Please Choose Time
          </FormHelperText>
          <NativeSelect>
            label="Please Choose Time" className={classes.selectEmpty}
            value={state.time}
            name="time" onChange={handleChange("time")}>
            <option value="" disabled>
              Please Choose Time
            </option>
            <option value={10}>8:00 - 12:00</option>
            <option value={20}>14:00 - 18:00</option>
            <option value={30}>Other</option>
          </NativeSelect>
        </div>
      </FormControl>
    </div>
  );
}

export default DeliveryTime;
