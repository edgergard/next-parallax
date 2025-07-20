"use client";

import classNames from "classnames";
import React from "react";
import { ArrowIcon } from "../icons";

type ButtonVariant = "outline" | "text" | "arrow";
type ButtonSize = "small" | "big";
type BaseButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
>;

interface BaseProps {
  disabled?: boolean;
  customClassName?: string;
  onClick?: () => void;
}

type Props = (
  | ({
      variant?: Exclude<ButtonVariant, "arrow">;
      children: string;
      arrowDirection?: never;
      size?: ButtonSize;
    } & BaseProps)
  | ({
      variant?: Exclude<ButtonVariant, "outline" | "text">;
      children?: never;
      size?: never;
      arrowDirection: "up" | "down";
    } & BaseProps)
) &
  BaseButtonProps;

const BG_HOVER_GRADIENT_STYLES = `
  hover:bg-linear-120 hover:from-button-gradient-from 
  hover:via-button-gradient-via hover:to-button-gradient-to
`;

const TEXT_HOVER_GRADIENT_STYLES = `
  ${BG_HOVER_GRADIENT_STYLES}
  hover:text-transparent hover:bg-clip-text
`;

const variantStyles: Record<ButtonVariant, string> = {
  outline: `
    text-white bg-button-solid-bg text-button-font-color
    rounded-button-radius hover:border-transparent
    border-[2px] border-button-gradient-via ${BG_HOVER_GRADIENT_STYLES}
  `,
  text: `
    text-white bg-button-solid-bg text-button-font-color
    rounded-button-radius hover:text-transparent 
    hover:bg-clip-text ${TEXT_HOVER_GRADIENT_STYLES}
  `,
  arrow: `
    border-[2px] border-white hover:border-button-gradient-via
    p-gap-button-arrow rounded-button-radius disabled:border-button-disabled
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  small: `
    pt-gap-button-small-t pb-gap-button-small-b 
    px-gap-button-small-x text-white
  `,
  big: `
    pt-gap-button-big-t pb-gap-button-big-b px-gap-button-big-x 
    text-font-size-button-big font-medium
  `,
};

const Button: React.FC<Props> = ({
  variant = "outline",
  size,
  disabled,
  customClassName,
  arrowDirection,
  children,
  onClick = () => {},
  ...rest
}) => {
  const className = classNames(
    `
      w-fit cursor-pointer disabled:cursor-not-allowed transition-colors 
      duration-400 group
    `,
    variantStyles[variant],
    size && sizeStyles[size],
    customClassName,
  );

  const iconClassName = classNames(
    `
      size-6 transition-colors duration-400 leading-0
      group-hover:text-button-gradient-via
    `,
    {
      "rotate-180": arrowDirection === "down",
      "text-button-disabled": disabled,
      "text-white": !disabled,
    },
  );

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
      {variant === "arrow" && <ArrowIcon className={iconClassName} />}
    </button>
  );
};

export default Button;
