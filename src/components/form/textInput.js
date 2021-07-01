import React, { Fragment } from "react";

const TextInput = ({
  input,
  type,
  name,
  placeholder,
  meta: { touched, error, warning },
}) => {
  return (
    <Fragment>
      <input {...input} name={name} type={type} placeholder={placeholder} />
      {touched &&
        ((error && <span className="error">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </Fragment>
  );
};

export default TextInput;
