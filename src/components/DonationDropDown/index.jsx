import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import RadioButtons from "../RadioButtons"

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: 400,
    display: "flex",
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function DropDown({setDonateInfo, donateInfo}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
   category: ''
  });

  const handleChange = name => event => {
    setDonateInfo({...donateInfo, donation_type: event.target.value})
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  return (
    <div>
      <br/>
      <h1>Choose a Category:</h1>
      <FormControl className={classes.formControl}>
        <NativeSelect
          className={classes.selectEmpty}
          value={state.clothes}
          name = "category"
          onChange={handleChange("category")}
        >
          <option value="" disabled>
            Please Choose
          </option>
          <option value='clothes' >Clothes</option>
          <option value='resources'>Resources</option>
        </NativeSelect>
        <FormHelperText>Choose a Category </FormHelperText>
      </FormControl>
      <RadioButtons/>
    </div>
  );
}

export default DropDown;
