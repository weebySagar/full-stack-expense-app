import React from "react";
import { Range, getTrackBackground } from "react-range";

export default function Slider({
  className,
  id,
  range,
  setRange,
  min,
  max,
  label,
}) {
  return (
    <div className={`mb-3 ${className}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <Range
        id={id}
        label={label}
        min={min}
        max={max}
        values={range}
        onChange={setRange}
        renderThumb={({ props, value, isDragged }) => {
          return (
            <div
              {...props}
              key={props.key}
              style={{
                ...props.style,
                height: "14px",
                width: "14px",
                backgroundColor: isDragged ? "#FFF" : "#999",
                borderRadius: "50%",
                color: "#fff",
              }}
            >
              {isDragged && (
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "-75%",
                    padding: "4px 10px",
                    background: "#000",
                    borderRadius: "4px",
                    marginTop: "20px",
                  }}
                >
                  {value}
                </span>
              )}
            </div>
          );
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "38px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values: range,
                  colors: ["#ccc", "#27c9d8", "#ccc"],
                  min,
                  max,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
      />
    </div>
  );
}
