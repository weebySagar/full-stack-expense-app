import React from "react";
import { Link } from "react-router-dom";

export default function Button({
  onClick,
  title,
  icon,
  disabled,
  variant = "primary",
  href,
  className,
  style,
  id,
  iconOnly = false,
  reverse = false,
  ...rest
}) {
  return !href?.trim() ? (
    <button
      className={`${variant === "primary" ? "btn-primary" : "btn-secondary"} ${
        reverse ? "flex-row-reverse" : ""
      } ${className}`}
      disabled={disabled}
      onClick={onClick}
      style={{ ...style }}
      id={id}
    >
      {icon && <span>{icon}</span>}
      {!iconOnly && <span>{title}</span>}
    </button>
  ) : (
    <Link
      to={href}
      style={{ ...style }}
      id={id}
      className={`${variant === "primary" ? "btn-primary" : "btn-secondary"}${
        reverse ? "flex-row-reverse" : ""
      } ${className}`}
    >
      {icon && <span>{icon}</span>}
      {!iconOnly && <span>{title}</span>}
    </Link>
  );
}
