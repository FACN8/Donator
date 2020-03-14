import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    display: "flex",
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function DropDown() {
  const classes = useStyles();
  const [state, setState] = React.useState({
   category: ''
  });

  const handleChange = name => event => {
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
          <option value={10}>Clothes</option>
          <option value={20}>Resources</option>
        </NativeSelect>
        <FormHelperText>Choose a Category </FormHelperText>
      </FormControl>
    </div>
  );
}

export default DropDown;
