import React from "react";
import "@/styles/input/input.scss";

const Input = React.forwardRef(
  (
    {
      id,
      type,
      className,
      label,
      labelStyle,
      inputStyle,
      name,
      value,
      handleChange,
      error,
      placeholder,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={`input mb-3 col-12 ${className}`}>
        {label && (
          <label htmlFor={id} className={`form-label ${labelStyle}`}>
            {label}
          </label>
        )}

        <input
          type={type || "text"}
          className={`form-control ${inputStyle}`}
          id={id}
          name={name}
          aria-describedby={name}
          onChange={handleChange}
          value={value}
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
        {error && <p className="text-danger">{error}</p>}
      </div>
    );
  }
);

export default Input;
