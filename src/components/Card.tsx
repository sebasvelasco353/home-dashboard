import React from "react";
import styles from "@/styles/card.module.scss";
import { CardProps } from "@/common/Card.interface";

const Card = ({ size = "md", children }: CardProps) => {
  return (
    <div className={styles.container}>
      {children}
      {size}
    </div>
  );
};

Card.Title = ({ children }: { children: React.ReactNode }) => {
  return <h2 className={styles.header}>{children}</h2>;
};

Card.Content = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.content}>{children}</div>;
};

export default Card;
