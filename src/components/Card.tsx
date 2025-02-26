import React, { useState } from "react";
import styles from "@/styles/card.module.scss";
import { CardProps } from "@/common/Card.interface";

// TODO: Add a way to expand and collapse the content of the card component.
// TODO: Add props to set the type: Warning, Info, Default.
// TODO: Add Delete card functionality (a function that get called when the user click the close button).

const Card = ({ size = "md", children }: CardProps) => {
  const sizes = {
    sm: styles.small,
    md: styles.medium,
    lg: styles.large,
  };
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return <div className={`${styles.container} ${sizes[size]}`}>{children}</div>;
};

Card.Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.header}>
      <h2>{children}</h2>
      <span>icons</span>
    </div>
  );
};

Card.Content = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.content}>{children}</div>;
};

export default Card;
