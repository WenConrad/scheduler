import React from "react";

import DayListItem from "components/DayListItem";

export default function DayList(props) {
  const { days, day, setDay } = props;
  const listItems = days.map((dayOfWeek) =>
    <DayListItem
      key={dayOfWeek.id}
      name={dayOfWeek.name}
      spots={dayOfWeek.spots}
      selected={day === dayOfWeek.name}
      setDay={setDay}
    />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}