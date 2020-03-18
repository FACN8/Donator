import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import Cookie from "js-cookie";
import { getRequest, postRequest } from "../../utils/axios.js";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  inputRoot: {
    fontSize: 20,
    marginBottom: 20
  },
  labelRoot: {
    fontSize: 30,
    marginTop: -10,
    color: "red"
  }
}));

function UserDetail() {
  const classes = useStyles();
  const token = Cookie.get("token") ? Cookie.get("token") : null;
  const [userInfo, setUserInfo] = useState({
    full_name: "",
    password: "",
    address: "",
    city: "",
    phone_number: ""
  });
  React.useEffect(() => {
    fetchUserInfo();
  }, [token]);
 const [disabled, setDisable] = useState(true);


  let InputDivsInfo = [
    {
      labelName: "Full Name",
      value: userInfo.full_name,
      type: "text",
      onChange: event => {
        setUserInfo({...userInfo,full_name:event.target.value})
      },
      onFocus: (_, reset) => {
        setUserInfo({...userInfo,full_name:reset ? reset : ""})
      }
    },
    {
      labelName: "Password",
      value: userInfo.password.substring(0, 8),
      type: "password",
      onChange: event => {
        setUserInfo({...userInfo,password:event.target.value})
      },
      onFocus: (_, reset) => {
        setUserInfo({...userInfo,password:reset ? reset : ""})
      }
    },
    {
      labelName: "Address",
      value: userInfo.address,
      type: "text",
      onChange: event => {
        setUserInfo({...userInfo,address:event.target.value})
      },
      onFocus: (_, reset) => {
        setUserInfo({...userInfo,address:reset ? reset : ""})
      }
    },
    {
      labelName: "City",
      value: userInfo.city,
      type: "text",
      onChange: event => {
        setUserInfo({...userInfo,city:event.target.value})
      },
      onFocus: (_, reset) => {
        setUserInfo({...userInfo,city:reset ? reset : ""})
      }
    },
    {
      labelName: "PhoneNumber",
      value: userInfo.phone_number,
      type: "text",
      onChange: event => {
        setUserInfo({...userInfo,phone_number:event.target.value})
      },
      onFocus: (_, reset) => {
        setUserInfo({...userInfo,phone_number:reset ? reset : ""})
      }
    }
  ];

  const fetchUserInfo = () => {
    getRequest("/userInfo", token)
      .then(res => {
        res.data.error
          ? (() => {
              window.location = "/";
            })()
          : (() => {
              setUserInfo(res.data.userInfo);
            })();
      })
      .catch(err => console.log("error: ", err));
  };
  const editMode = () => {
    setDisable(false);
  };
  const updateProfile = () => {
    postRequest(
      "/updateUser",
      {
        ...userInfo
      },
      token
    )
      .then(res =>
        res.data.error
          ? (() => {
              // setErrorMsg(res.data.error);
            })()
          : (() => {
              // setErrorMsg(res.data.message);
            })()
      )
      .catch(err => console.log("error: ", err));

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
                  root: classes.labelRoot
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
