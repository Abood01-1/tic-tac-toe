import React from "react";

function TTTboxs({ value, onClick, ind }) {
  const styles = {
    border: "1px solid #333",
    display: "grid",
    placeItems: "center",
    fontSize: "70px",
    width: "100px",
    borderRadius: "8px",
    boxShadow: "0px 0px 4px #888",
    height: "100px",
    cursor: "pointer",
    color: value === "X" ? "rgb(255,70, 37)" : "rgb(44, 135, 255)",
  };
  return (
    <span
      className={value}
      disable
      onClick={() => value === null && onClick(ind)}
      style={styles}
    >
      {value}
    </span>
  );
}

export default TTTboxs;
