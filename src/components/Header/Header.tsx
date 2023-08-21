import React from 'react';
import styles from './Header.module.css';

type Props = {}

function Header({}: Props) {
  return (
    <div>
        <header className={styles.header}>
           <h1>UOLkut</h1>
            <nav className={styles.navigation}>
                <a href="">Centro de segurança</a>
            </nav>
        </header>
    </div>
  )
}

export default Header;