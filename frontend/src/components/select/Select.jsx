import React from "react";
import ReactSelect from "react-select";

export default function Select({ placeholder, options, value, onChange }) {
  return (
    <ReactSelect
      placeholder={placeholder}
      styles={{
        control: (styles) => ({
          ...styles,
          background: "#1b1e24",
          borderColor: "rgba(255,255,255,0.1)",
          color: "#fff",
          "::placeholder": {
            color: "#fff",
          },
        }),
        indicatorSeparator: (styles) => ({
          ...styles,
          backgroundColor: "rgba(255,255,255,0.5)",
        }),
        dropdownIndicator: (styles) => ({
          ...styles,
          color: "rgba(255,255,255,0.5)",
          ":hover": {
            color: "#fff",
          },
        }),
        menuList: (styles) => ({
          ...styles,
          background: "#272d35",
          border: "1px solid rgba(255,255,255,0.1)",
        }),
        option: (styles, state) => ({
          ...styles,
          background: state.isFocused ? "#1b1e24" : "#272d35",
        }),
        singleValue: (styles) => ({
          ...styles,
          color: "#FFF",
        }),
        clearIndicator: (styles) => ({
          ...styles,
          color: "rgba(255,255,255,0.5)",
          ":hover": {
            color: "#fff",
          },
        }),
        placeholder: (styles) => ({
          ...styles,
          color: "#fff",
        }),
      }}
      options={options}
      isClearable
      onChange={onChange}
      value={value}
      className="mb-3"
    />
  );
}
