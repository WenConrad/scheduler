import React from "react";

import Header from "./Header"

import "./styles.scss";

export default function Appointment(props) {
  return (
    <article className="appointment">
      <Header time="12pm" />
      {props.time ? `Appointment at ${props.time}` : "No Appointments"}
    </article>
  );
}