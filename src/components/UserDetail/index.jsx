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
      onChange: event=>{handleFullNameChange(event.target.value)}
    },
    {
      labelName: "Password",
      value: password,
      type: "password",
      onChange: event=>{handlePasswordChange(event.target.value)}
    },
    {
      labelName: "Address",
      value: address,
      type: "text",
      onChange: event=>{handleAddressChange(event.target.value)}
    },
    {
      labelName: "City",
      value: city,
      type: "text",
      onChange: event=>{handleCityChange(event.target.value)}
    },
    {
      labelName: "phoneNumber",
      value: phoneNumber,
      type: "text",
      onChange: event=>{handlePhoneNumberChange(event.target.value)}
    }
  ];
  const editMode = () => {
  handleFullNameChange('')
  handlePasswordChange('')
  handleAddressChange('')
  handleCityChange('')
  handlePhoneNumberChange('')
  setDisable(false)
  };
  const updateProfile = () => {
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
      {InputDivsInfo.map((objInput) => { return(
        <div className="form-group">
      <label className='input_label'>{objInput.labelName}: </label>
      <input
            value={objInput.value}
            type={objInput.type}
            onChange={objInput.onChange}
            className="form-control"
            placeholder={`Enter your new ${objInput.labelName}`}
            disabled={disabled}
          />
        </div>       
      )})}
      {!disabled?<button onClick={() => updateProfile()}>Update</button>:''}
      </form>
    </fieldset>
  );
}

export default UserDetail;
