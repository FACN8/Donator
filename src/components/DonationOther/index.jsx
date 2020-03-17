import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import DeleteIcon from "@material-ui/icons/Delete";
import "./style.css"

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 300,
      top: 200
    }
  },
  button: {
    top: 215,
  }
}));

function DonationOther() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");
  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleDelete = () => {
    setValue('');
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="8"
          value={value}
          onChange={handleChange}
          variant="outlined"
        />

        <Button
          variant="contained"
          color="secondary"
          onClick={handleDelete}
          className={classes.button}
          startIcon={<DeleteIcon />}
        >
          Delete
      </Button>
      </form>
    </div>
  );
}

export default DonationOther;
