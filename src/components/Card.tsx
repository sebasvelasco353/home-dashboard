import React, { useState, useContext, createContext } from "react";
import styles from "@/styles/card.module.scss";
import { CardProps } from "@/common/interfaces.ts";

// TODO: Add a way to expand and collapse the content of the card component.
// TODO: Add Delete card functionality (a function that get called when the user click the close button).

interface CardContextProps {
  isExpanded: boolean;
  handleChangeExpanded: () => void;
}

const CardContext = createContext<CardContextProps | null>(null);

const Card = ({ size = "md", type = "default", children }: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const sizes = {
    sm: styles.small,
    md: styles.medium,
    lg: styles.large,
  };
  const types = {
    default: styles.default,
    warning: styles.warning,
    info: styles.info,
  };

  const handleChangeExpanded = () => {
    setIsExpanded((oldValue) => !oldValue);
  };

  return (
    <div className={`${styles.container} ${sizes[size]} ${types[type]}`}>
      <CardContext.Provider value={{ isExpanded, handleChangeExpanded }}>
        {children}
      </CardContext.Provider>
    </div>
  );
};

const Title = ({ children }: { children: React.ReactNode }) => {
  const { isExpanded, handleChangeExpanded } = useContext(CardContext);

  return (
    <div className={styles.header}>
      <h2>{children}</h2>
      <span>{isExpanded ? "s" : "n"}</span>
      <div className={styles.header__actions}>
        {/* Arrow down icon */}
        <svg
          onClick={handleChangeExpanded}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e3e3e3"
        >
          <path d="M480-360 280-560h400L480-360Z" />
        </svg>
        {/* other options icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e3e3e3"
        >
          <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
        </svg>
      </div>
    </div>
  );
};

Card.Content = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.content}>{children}</div>;
};

Card.Title = Title;
export default Card;
