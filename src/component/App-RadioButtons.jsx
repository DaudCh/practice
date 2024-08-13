import React from "react";

const AppRadioButton = ({type, className, label}) => {
  return (
    <button type={type} className={className}>
      {label}
    </button>
  );
};
export default AppRadioButton;
