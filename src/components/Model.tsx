import React from "react";

type props = {
  message: string;
  onClick(event: any): void;
  isVisible: boolean;
};

function Model({ isVisible, message, onClick }: props) {
  console.log(isVisible);
  if (!isVisible) return null;
  return (
    <div
      className="fixed inset-0 bg-cyan-200 bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      {...{ onClick }}
    >
      <span className="text-6xl">{message}</span>
    </div>
  );
}

export default React.memo(Model);
