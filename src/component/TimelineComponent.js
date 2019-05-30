import React from "react";

const TimelineComponent = ({ val, change }) => {
  return (
    <div>
      <input value={val} onChange={change} />
      <span>{val}</span>
    </div>
  );
};
export default TimelineComponent;
