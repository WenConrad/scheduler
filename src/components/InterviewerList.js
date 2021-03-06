import React from "react";
import PropTypes from "prop-types";

import InterviewerListItem from "components/InterviewerListItem";

import "components/InterviewerList.scss";

export default function InterviewerList(props) {
  const { interviewers, value, onChange } = props;
  const listItems = interviewers.map((person) => (
    <InterviewerListItem
      key={person.id}
      name={person.name}
      avatar={person.avatar}
      selected={value === person.id}
      setInterviewer={() => onChange(person.id)}
    />
  ));
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{listItems}</ul>
    </section>
  );
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
};
