import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  // Handle input changes
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Validate input
    if (firstName.length === 0) {
      setErrors(["Please enter a first name"]);
      return;
    }
    if (lastName.length === 0) {
      setErrors(["Please enter a last name"]);
      return;
    }

    // Clear previous errors
    setErrors([]);

    // Add form data to submittedData
    const formData = {
      firstName: firstName,
      lastName: lastName,
    };
    setSubmittedData([...submittedData, formData]);

    // Reset form fields
    setFirstName("");
    setLastName("");
  }

  // Render list of submissions
  const listOfSubmissions = submittedData.map((data, index) => (
    <div key={index}>
      <p>First Name: {data.firstName}</p>
      <p>Last Name: {data.lastName}</p>
    </div>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleFirstNameChange}
          value={firstName}
          placeholder="First Name"
        />
        <input
          type="text"
          onChange={handleLastNameChange}
          value={lastName}
          placeholder="Last Name"
        />
        <button type="submit">Submit</button>
      </form>
      {errors.length > 0 && errors.map((error, index) => (
        <p key={index} style={{ color: "red" }}>{error}</p>
      ))}
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
