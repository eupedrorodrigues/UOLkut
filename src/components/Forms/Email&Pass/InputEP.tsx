import React from 'react';
import styles from './InputEP.module.css';

type Props = {}

const InputEP = (props: Props) => {
  return (
    <div>
        <div className={styles.inputBox}>
          <input 
            placeholder='Email' 
            type="email" 
            required/>
        </div>
        <div className={styles.inputBox}>
          <input 
            placeholder='Senha' 
            type="password" 
            required/>
        </div>
    </div>
  )
}

export default InputEP