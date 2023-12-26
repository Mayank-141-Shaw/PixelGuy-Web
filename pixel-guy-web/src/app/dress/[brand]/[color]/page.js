import React from "react";

export const Shirt = ({ params }) => {
  return (
    <>
      Color :{" "}
      <span
        style={{
          backgroundColor: params.color,
          color: "white",
          padding: "2px 8px",
        }}
      >
        {params.color}
      </span>
    </>
  );
};

export default Shirt;
