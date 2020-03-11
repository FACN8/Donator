import React, { useState } from "react";
import "./style.css";

function UserDetail() {
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
      onChange: event=>{handleFullNameChange(event.target.value)},
      onFocus: (_,reset)=>{handleFullNameChange(reset?reset:'')}
    },
    {
      labelName: "Password",
      value: password,
      type: "password",
      onChange: event=>{handlePasswordChange(event.target.value)},
      onFocus: (_,reset)=>{handlePasswordChange(reset?reset:'')}
    },
    {
      labelName: "Address",
      value: address,
      type: "text",
      onChange: event=>{handleAddressChange(event.target.value)},
      onFocus: (_,reset)=>{handleAddressChange(reset?reset:'')}
    },
    {
      labelName: "City",
      value: city,
      type: "text",
      onChange: event=>{handleCityChange(event.target.value)},
      onFocus: (_,reset)=>{handleCityChange(reset?reset:'')}
      
    },
    {
      labelName: "PhoneNumber",
      value: phoneNumber,
      type: "text",
      onChange: event=>{handlePhoneNumberChange(event.target.value)},
      onFocus: (_,reset)=>{handlePhoneNumberChange(reset?reset:'')}
    }
  ];
  const oldDetails=[fullName,password,address,city,phoneNumber]

  const editMode = () => {
  setDisable(false)
  };
  const updateProfile = () => {
    InputDivsInfo.map((objInput,i) => 
      objInput.value===''?objInput.onFocus(null,oldDetails[i]):''
    )
    setDisable(true)
    };
  return (
    <fieldset className="userDetail">
      <legend>User Details:</legend>
      <div class="legend2">
        <button
          type="button"
          onClick={() => editMode()}
          id="submit"
          className="edit"
          name="submit"
        >
          Edit
        </button>
      </div>
      <form role="form">
      {InputDivsInfo.map((objInput) => 
        <div className="form-group">
      <label className='input_label'>{objInput.labelName}: </label>
      <input
            value={objInput.value}
            type={objInput.type}
            onChange={objInput.onChange}
            onFocus={objInput.onFocus}
            className="form-control"
            placeholder={`Enter your new ${objInput.labelName}`}
            disabled={disabled}
          />
        </div>       
      )}
      {!disabled?<button onClick={() => updateProfile()}>Update</button>:''}
      </form>
    </fieldset>
  );
}

export default UserDetail;
