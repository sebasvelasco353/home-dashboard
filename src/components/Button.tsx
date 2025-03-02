import styles from "@/styles/Button.module.scss";
import { ButtonProps } from "@/common/interfaces.ts";

const Button = ({ text, secondary = false }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${secondary && styles["button--secondary"]}`}
    >
      {text}
    </button>
  );
};

export default Button;
