import React from "react";

function InfoItem({ label, value }) {
  if (value === true) {
    value = "Yes";
  }
  if (value === false || value === null) {
    value = "No";
  }
  return (
    <div>
      {label}: {value}
    </div>
  );
}

export default InfoItem;
