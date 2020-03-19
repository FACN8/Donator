import React from "react";
import './style.css';


export default function ContactUs (){
    return (
        <div className="contact">
        <p>Contact Donator</p>
        <div>
        <form action="/">
        <label>First Name</label>
        <input style={{border: '1px solid #ccc'}} type="text" id="fname" name="firstname" placeholder="First Name" />
        <label>Last Name</label>
        <input style={{border: '1px solid #ccc'}} type="text" id="lname" name="Last Name" placeholder="Last Name" />
    
    
        <label>Email</label>
        <input style={{border: '1px solid #ccc'}} type="email" id="email" name="email" placeholder="Your email" />
    
    
        <label>Message</label>
        <textarea style={{border: '1px solid #ccc'}} rows="10" cols="10" id="subject" name="subject" placeholder="Reason for contacting us"></textarea>
        <input style={{border: '1px solid #ccc'}} type="submit" value="Submit" />
        </form>
        </div>
        </div>
    )
}
