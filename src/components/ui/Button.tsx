"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "outline" | "text" | "arrow";
type ButtonSize = "small" | "medium";
type BaseButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
>;

type Props = (
  | {
      variant?: Exclude<ButtonVariant, "arrow">;
      size?: ButtonSize;
      children: string;
      arrowDirection?: never;
      customClassName?: string;
    }
  | {
      variant?: Exclude<ButtonVariant, "outline" | "text">;
      arrowDirection: "up" | "down";
      size?: ButtonSize;
      children?: never;
      customClassName?: string;
    }
) &
  BaseButtonProps;

const variantStyles: Record<ButtonVariant, string> = {
  outline: "bg-button-solid-bg text-button-font-color",
  text: "",
  arrow: "",
};

const sizeStyles: Record<ButtonSize, string> = {
  small:
    "pt-button-small-t pb-button-small-b px-button-small-x text-button-small",
  medium:
    "pt-button-medium-t pb-button-medium-b px-button-medium-x text-button-medium",
};

const Button: React.FC<Props> = ({
  variant = "outline",
  size = "medium",
  customClassName = "",
  children,
  ...rest
}) => {
  const classNames = twMerge(
    variantStyles[variant],
    sizeStyles[size],
    customClassName,
  );

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
};

export default Button;
