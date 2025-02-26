import React, { useState } from "react";
import styles from "@/styles/card.module.scss";
import { CardProps } from "@/common/Card.interface";

const Card = ({ size = "md", children }: CardProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  function handleMinimizeClick() {
    setIsExpanded((prev) => !prev);
  }

  return (
    <div className={styles.container}>
      {children}
      {size}
    </div>
  );
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
