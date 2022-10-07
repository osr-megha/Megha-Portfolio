import React, { useState } from "react";
import "./contact.scss";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <div className="imgContainer">
          <img
            src="https://img.freepik.com/free-vector/successful-business-meeting-job-interview_3446-684.jpg?t=st=1663235230~exp=1663235830~hmac=095a2a758a6cb4dc648e2b6fd8f0a24f0857ff5b000bc826495b156e9b4b176d"
            alt="handShake"
          />
        </div>
      </div>
      <div className="right">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit" onClick={handleSubmit}>
            Send
          </button>
          {message && <span>Thank you, I will reply soon!!</span>}
        </form>
        
      </div>
    </div>
  );
};

export default Contact;
