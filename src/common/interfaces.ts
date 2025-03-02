import React from "react";

export interface CardProps extends React.PropsWithChildren {
  size?: "sm" | "md" | "lg";
  title?: string;
  onClose?: () => void;
}

export interface ButtonProps {
  text: string;
  secondary?: boolean;
  disabled?: boolean;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
}
