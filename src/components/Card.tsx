import { StyledCard } from "@/styles/card.styled";
import React from "react";

interface CardProps extends React.PropsWithChildren {
  size?: "sm" | "md" | "lg";
}

export default function Card({ size = "md" }: CardProps) {
  return <StyledCard>Card of size {size}</StyledCard>;
}
