import styles from "@/styles/card.module.scss";
import { CardProps } from "@/common/Card.interface";

export default function Card({ size = "md", title }: CardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{title}</h2>
      </div>
      <p>Card of size {size}</p>
    </div>
  );
}
