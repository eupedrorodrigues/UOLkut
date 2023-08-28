import React from 'react';
import styles from './Footer.module.css';

type Props = {}

function Footer({}: Props) {
  return (
    <footer className={styles.baseboard}>
        <h6>&copy; Todos os direitos reservados</h6>
    </footer>
  )
}

export default Footer;