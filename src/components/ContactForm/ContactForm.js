import React, { useState } from "react";
import "./ContactForm.css";
// import styled from "styled-components";
import { db } from "../../Firebase/Firebase";

// const form = styled.form`
//   padding: 20px 20px;
//   background: blueviolet;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

const Contact = () => {
  // variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [description, setDescription] = useState("");

  const [loader, setLoader] = useState(false);

  // upload to firebase
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contactUsForms")
      .add({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        propertyType: propertyType,
        description: description
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setDescription("");
    setPhoneNumber("");
    setPropertyType("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Request Callback</h3>
      {/* Name input */}
      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* Phone Number */}
      <label>Phone Number</label>
      <input
        placeholder="Phone  Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      {/* Email */}
      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* Property you looking for */}
      <label>Property Types</label>
      <input
        placeholder="Property Looking for.."
        value={propertyType}
        onChange={(e) => setPropertyType(e.target.value)}
      />
      {/* Description */}
      <label>Description</label>
      <textarea
        placeholder="Message"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
