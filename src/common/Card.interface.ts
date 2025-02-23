import React from "react";

export interface CardProps extends React.PropsWithChildren {
  size?: "sm" | "md" | "lg";
  title?: string;
}
