import React from "react";

import InterviewerListItem from "components/InterviewerListItem";

import "components/InterviewerList.scss";

export default function InterviewerList(props) {
  const { interviewers, interviewer ,setInterviewer } = props;
  const listItems = interviewers.map((person) =>
    <InterviewerListItem
      key={person.id}
      name={person.name}
      avatar={person.avatar}
      selected={interviewer === person.id}
      setInterviewer={setInterviewer}
    />
  );
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {listItems}
      </ul>
    </section>
  );
}