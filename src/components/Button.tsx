import styles from "@/styles/Button.module.scss";
import { ButtonProps } from "@/common/interfaces.ts";

const Button = ({
  text,
  handleClick,
  secondary = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${
        secondary ? styles["button--secondary"] : ""
      }`}
      onClick={handleClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
