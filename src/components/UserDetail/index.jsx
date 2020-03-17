import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
      width: '100%'
  },
  inputRoot: {
    fontSize: 20,
    marginBottom: 20
  },
  labelRoot: {
    fontSize: 30,
    marginTop: -10,
    color: "red",
  }
}));


function UserDetail() {
  const classes = useStyles();

  const [fullName, handleFullNameChange] = useState("Francis Aboud");
  const [password, handlePasswordChange] = useState("123321");
  const [address, handleAddressChange] = useState("shekon hpoalem");
  const [city, handleCityChange] = useState("nazareth");
  const [phoneNumber, handlePhoneNumberChange] = useState("0549763352");
  const [disabled, setDisable] = useState(true);
  let InputDivsInfo = [
    {
      labelName: "Full Name",
      value: fullName,
      type: "text",
      onChange: event => {
        handleFullNameChange(event.target.value);
      },
      onFocus: (_, reset) => {
        handleFullNameChange(reset ? reset : "");
      }
    },
    {
      labelName: "Password",
      value: password,
      type: "password",
      onChange: event => {
        handlePasswordChange(event.target.value);
      },
      onFocus: (_, reset) => {
        handlePasswordChange(reset ? reset : "");
      }
    },
    {
      labelName: "Address",
      value: address,
      type: "text",
      onChange: event => {
        handleAddressChange(event.target.value);
      },
      onFocus: (_, reset) => {
        handleAddressChange(reset ? reset : "");
      }
    },
    {
      labelName: "City",
      value: city,
      type: "text",
      onChange: event => {
        handleCityChange(event.target.value);
      },
      onFocus: (_, reset) => {
        handleCityChange(reset ? reset : "");
      }
    },
    {
      labelName: "PhoneNumber",
      value: phoneNumber,
      type: "text",
      onChange: event => {
        handlePhoneNumberChange(event.target.value);
      },
      onFocus: (_, reset) => {
        handlePhoneNumberChange(reset ? reset : "");
      }
    }
  ];
  const oldDetails = [fullName, password, address, city, phoneNumber];

  const editMode = () => {
    setDisable(false);
  };
  const updateProfile = () => {
    InputDivsInfo.map((objInput, i) =>
      objInput.value === "" ? objInput.onFocus(null, oldDetails[i]) : ""
    );
    setDisable(true);
  };
  return (
    <fieldset className="userDetail">
      <legend className="legendTitle">User Details:</legend>
      <div className="legend2">
        <Button
          variant="contained"
          color="secondary"
          type="button"
          onClick={() => editMode()}
          id="submit"
          name="submit"
        >
          Edit
        </Button>
      </div>
      <form>
        {InputDivsInfo.map((objInput, i) => (
          <div key={i} className={classes.root}>
            <TextField
              InputProps={{ classes: { root: classes.inputRoot } }}
              InputLabelProps={{
                classes: {
                  root: classes.labelRoot,
                }
              }}
              label={objInput.labelName}
              value={objInput.value}
              type={objInput.type}
              onChange={objInput.onChange}
              onFocus={objInput.onFocus}
              placeholder={`Enter your new ${objInput.labelName}`}
              disabled={disabled}
            />
          </div>
        ))}
        {!disabled ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => updateProfile()}
          >
            Update
          </Button>
        ) : (
          ""
        )}
      </form>
    </fieldset>
  );
}

export default UserDetail;
