import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function Language() {
  const classes = useStyles();
  const [language, setLanguage] = React.useState("");

  const handleChange = event => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          value={language}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="" disabled>
            Language
          </MenuItem>
          <MenuItem value={10}>English</MenuItem>
          <MenuItem value={20}>Hebrew</MenuItem>
          <MenuItem value={30}>Arabic</MenuItem>
        </Select>
        <FormHelperText>Choose a Language</FormHelperText>
      </FormControl>
    </div>
  );
}

export default Language;
