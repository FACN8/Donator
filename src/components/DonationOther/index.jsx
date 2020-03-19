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
      top: 100
    }
  },
  button: {
    top: 115,
  }
}));

function DonationOther({setDonateInfo, donateInfo}) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleChange = event => {
    setDonateInfo({...donateInfo, donation_info: event.target.value})
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
          label="Other"
          multiline
          rowsMax="8"
          value={value}
          onChange={handleChange}
          variant="outlined"
          placeholder="Please Specify Donation"
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
