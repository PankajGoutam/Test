import React, { useState } from 'react';

function Test1() {
  const [authenticationKey, setAuthenticationKey] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [response, setResponse] = useState('');

  const sendRequest = (event) => {
    event.preventDefault();

    const responseCode = 200;

    if (responseCode === 200) {
      displayNextForm();
    } else {
      promptToUpdateAuthenticationKey();
    }
  };

  const displayNextForm = () => {
    setResponse('');
    const nextForm = (
      <>
        <h2>Enter Your Name and Phone Number</h2>
        <form id="userInfoForm" onSubmit={submitUserInfo}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </>
    );
    setResponse(nextForm);
  };

  const promptToUpdateAuthenticationKey = () => {
    setResponse(<p>Please update the authentication key.</p>);
  };

  const submitUserInfo = (event) => {
    event.preventDefault();
    setResponse(
      <p>
        Thank you, {name}! Your phone number ({phoneNumber}) has been
        submitted successfully.
      </p>
    );
  };

  return (
    <>
      <h2 >Form to Send Request</h2>
      <form id="requestForm" onSubmit={sendRequest}>
        <label htmlFor="authenticationKey">Authentication Key:</label>
        <input
          type="text"
          id="authenticationKey"
          name="authenticationKey"
          value={authenticationKey}
          onChange={(e) => setAuthenticationKey(e.target.value)}
        />
        <button type="submit">Send Request</button>
      </form>

      <div id="response">{response}</div>
    </>
  );
}

export default Test1;
