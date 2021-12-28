import React from "react";

const Input = (props) => {
  const element =
    props.element === "input" ? (
      <input id={props.id} type={props.type} placeholder={props.placeholder} />
    ) : (
      <textarea />
    );
  return (
    <>
      <div className="form-control">
        <label htmlFor={props.id}>{props.label}</label>
      </div>
    </>
  );
}; 

export default Input;
