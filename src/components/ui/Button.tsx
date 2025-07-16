"use client";

import React from "react";

type BaseButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
>;

type Props = (
  | {
      variant?: "outline" | "text";
      children: string;
    }
  | {
      variant?: "arrow";
      children?: never;
    }
) &
  BaseButtonProps;

const Button: React.FC<Props> = ({
  variant = "outline",
  children,
  ...rest
}) => {
  return <button {...rest}>{children}</button>;
};

export default Button;
