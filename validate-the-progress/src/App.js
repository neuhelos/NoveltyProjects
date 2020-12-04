import React from "react";

import {useInput} from './utilities/hooks'

const styling = {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: "1rem",
  backgroundColor: '#1B61A6',
  borderRadius: '4px',
  color: 'white',
  width: '80%',
}

const stylingForTheKids = {
  margin: '0.25rem',
  width: '80%',
  height: '3rem',
  borderRadius: '4px',
  border: 'none',
  padding: '0.5rem',
  outlineColor: '#65DA69',
  // border: 'solid 2px rgba(235, 106, 62, 1)',
}

const buttonsNeedStylingToo = {
  width: '50%',
  margin: '1rem',
  color: '#1B61A6',
  borderRadius: '5px',
  background: 'linear-gradient(to top right, rgba(251,215,74,1) 28%, rgba(101,217,101,1) 79%)',
  border: 'none',
  fontSize: '1.5rem',
  height: '3rem',
  outlineColor: '#65DA69',
}

const error = {
  marginBottom: '0.5rem',
  color: '#FAD74A'
}

const App = () => {
  const docName = useInput("", "alphanumeric");
  const email = useInput("", "email");
  const docType = useInput("", "alphanumeric");
  const docCategory = useInput("", "alphanumeric");

  let progress = docName.progress + email.progress + docType.progress + docCategory.progress

  const progressContainer = {
    margin: '1rem',
    width: '80%',
    lineHeight: '2rem',
    borderRadius: '4px',
    color: '#65DA69',
    background: '#FFFFFF',
  }

  const progressBar = {
    whiteSpace: 'nowrap',
    width: `${progress * 25}%`,
    lineHeight: '2rem',
    background: 'linear-gradient(90deg, rgba(251,215,74,1) 28%, rgba(101,217,101,1) 79%)',
    //boxShadow: '0 3px 3px -5px #FFFFFF, 0 2px 5px #FFFFFF',
    transition: 'width 1s ease',
    borderRadius: '4px',
    fontSize: '1rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    color: '#000000',
    textAlign: 'center',
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    if(docName.formIsValid && email.formIsValid && docType.formIsValid && docCategory.formIsValid){
      //Submit to the API ether
    }

  }

  return (
    <form onSubmit={handleSubmit} style={styling}>
      <h2>Quantum Validities</h2>
      <div style={progressContainer}>
        {progress ? <div style={progressBar}>{progress === 4 ? 'Welcome to Validation' : progress > 1 ? 'Validation is Upon You' : "Your Journey Begins"}</div> : "Your Progress"}
      </div>
      <input
        style={stylingForTheKids}
        value={docName.value}
        placeholder={"Enter Document Name"}
        onChange={docName.onChange}
        onBlur={docName.onBlur}
      />
      {docName.error && <div style={error}>{docName.error}</div>}
      <select style={stylingForTheKids} value={docType.value} onChange={docType.onChange} onBlur={docType.onBlur}>
        <option value="" disabled>
          Select DocType
        </option>
        <option value={"AntiFile"}>AntiFile</option>
        <option value={"TextMeNot"}>TextMeNot</option>
      </select>
      {docType.error && <div style={error}>{docType.error}</div>}
      <select style={stylingForTheKids} value={docCategory.value} onChange={docCategory.onChange} onBlur={docCategory.onBlur}>
        <option value="" disabled>
          Select DocCategory
        </option>
        <option value={"I Own My Label"}>I Own My Label</option>
        <option value={"Labels Don't Apply"}>Labels Don't Apply</option>
      </select>
      {docCategory.error && <div style={error}>{docCategory.error}</div>}
      <input
        style={stylingForTheKids}
        value={email.value}
        placeholder="Enter Email"
        onChange={email.onChange}
        onBlur={email.onBlur}
      />
      {email.error && <div style={error}>{email.error}</div>}
      <button type="submit" style={buttonsNeedStylingToo}>SUBMIT</button>
    </form>
  );
};

export default App