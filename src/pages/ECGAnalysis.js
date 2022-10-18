import React from "react";

const a = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 100,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "white",
      }}
    >
      <iframe
        allowFullScreen
        width={"100%"}
        height={"100%"}
        frameBorder="0"
        src={"https://ecg.cardiolyse.com/sign-in"}
      />
    </div>
  );
};
export default a;
