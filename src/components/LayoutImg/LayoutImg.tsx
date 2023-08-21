import React from 'react';
import styles from './LayoutImg.module.css';
import People from '../../assets/unsplash_g1Kr4Ozfoac.svg'

type Props = {}

function LayoutImg({}: Props) {
  return (
    <div>
        <div className={styles.LayoutImg}>
            <div className={styles.imageGradient}>
              <div className={styles.wrapperText}>
                <p className={styles.textInGradient}>
                  Conecta-se aos seus amigos e familiares usando recados e mensagens instantâneas
                </p>
              </div>
                <div className={styles.darkGradient}></div>
                <img style={{display: 'block'}} src={People} alt="" />
            </div>
        </div>
    </div>
  )
}

export default LayoutImg;