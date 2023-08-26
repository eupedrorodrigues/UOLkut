import React from 'react';
import styles from './Header.module.css';
import Logo from './../../assets/UOLkut.svg'

type Props = {}

function Header({}: Props) {
  return (
    <div>
        <header className={styles.header}>
            <img src={Logo} alt="" />
            <nav className={styles.navigation}>
                <a href="">Centro de segurança</a>
            </nav>
        </header>
    </div>
  )
}

export default Header;