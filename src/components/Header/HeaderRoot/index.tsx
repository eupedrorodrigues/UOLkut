import { ReactNode } from "react";

import styles from "./HeaderRoot.module.css";

interface HeaderRootProps {
  children?: ReactNode;
}

export const HeaderRoot = ({ children }: HeaderRootProps) => {
  return (
    <header className={`${styles.header}`}>
      <h1>
        
      </h1>

      {children}
    </header>
  );
};
