import React from "react";

import DayListItem from "components/DayListItem";

export default function DayList(props) {
  const { days, value, onChange } = props;
  const listItems = days.map((dayOfWeek) =>
    <DayListItem
      key={dayOfWeek.id}
      name={dayOfWeek.name}
      spots={dayOfWeek.spots}
      selected={value === dayOfWeek.name}
      setDay={onChange}
    />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}