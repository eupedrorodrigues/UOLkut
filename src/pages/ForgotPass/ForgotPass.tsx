import React from 'react'
import Header from '../../components/Header/Header'
import LayoutImg from '../../components/LayoutImg/LayoutImg'
import styles from './ForgotPass.module.css'
import Footer from '../../components/Footer/Footer'
import MyFormFogot from '../../components/Forms/FormForgot/MyFormFogot'

type Props = {}

const ForgotPass = (props: Props) => {
  return (
    <div>
        <Header />
        <div>
            <main className={styles.wrapperMain}>
                <div className={styles.wrapperCards}>
                    <LayoutImg />
                    <MyFormFogot /> 
                </div>
            </main>
        </div>
        <Footer />
    </div>
  )
}

export default ForgotPass