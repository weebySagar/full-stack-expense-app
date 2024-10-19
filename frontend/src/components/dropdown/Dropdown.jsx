import React, { useState } from "react";
import "@/styles/dropdown/dropdown.scss";
import { IoIosMore } from "react-icons/io";
import { createPortal } from "react-dom";
import { FaChevronDown } from "react-icons/fa";

export default function Dropdown(props) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({
    clientX: 0,
    clientY: 0,
  });

  return (
    <div
      className="dropdown"
      onBlur={() => {
        setTimeout(() => {
          setOpen(false);
        }, 300);
      }}
    >
      {props.type === "select" && (
        <button
          className={`dropbtn ${props.disabled && "disabled"}`}
          id="all-select-dropdown"
        >
          <input
            type="checkbox"
            className="csCheckbox"
            checked={props.checked}
            ref={(el) => el && (el.indeterminate = props.indeterminate)}
            onChange={props.selectAction}
          />{" "}
          {!!props.items.length && (
            <FaChevronDown
              color="#ccc"
              onClick={(event) => {
                const { clientX, clientY } = event;
                setPos({ clientX, clientY });

                if (!props.disabled) setOpen(!open);
              }}
            />
          )}
        </button>
      )}
      {props.type !== "select" && (
        <button
          className={`${props.className || "dropBtnMore"}`}
          style={{ ...props.style }}
          onClick={(event) => {
            const { clientX, clientY } = event;
            setPos({ clientX, clientY });

            if (!props.disabled) setOpen(!open);
          }}
        >
          {props.icon ? props.icon : <IoIosMore size={16} />}
        </button>
      )}
      {open &&
        createPortal(
          <div
            className={`dropdown-content ${props.right ? "right" : ""}`}
            style={{
              position: "fixed",
              top: pos.clientY + 20,
              left: pos.clientX,
              width: `${props.width || "auto"}`,
              zIndex: 9999,
            }}
          >
            {props.items.map((item) => (
              <div
                key={item.key}
                onClick={() => {
                  item.action(props.id);
                  setOpen(false);
                }}
                className="d-flex align-items-center gap-2"
              >
                {item.icon}
                {item.title}
              </div>
            ))}
          </div>,
          document.body
        )}
    </div>
  );
}
