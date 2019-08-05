import React from 'react';

const PersonList = (props) => {
  return (
    <div>
      <ul>
        <li><h3>First Name:</h3> {props.firstname}</li>
        <li><h3>Last Name:</h3> {props.lastname}</li>
        <li><h3>City:</h3> {props.city}</li>
        <li><h3>State:</h3> {props.state}</li>
        <li><h3>Tel:</h3> {props.tel}</li>
        <li><h3>Email:</h3> {props.email}</li>
      </ul>
    </div>
  );
};

export default PersonList;