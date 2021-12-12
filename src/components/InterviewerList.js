import React from "react";

import DayListItem from "components/DayListItem";

export default function DayList(props) {
  const { interviewers } = props;
  const listItems = interviewers.map((interviewer) =>
    <DayListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
    />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}