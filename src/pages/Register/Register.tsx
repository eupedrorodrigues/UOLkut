import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './Register.module.css';
import LayoutImg from '../../components/LayoutImg/LayoutImg';
import MyFormRegister from '../../components/Forms/FormRegister/MyFormRegister';


type Props = {}

const Register = (props: Props) => {
  return (
    <div>
        <Header />
            <div>
            <main className={styles.wrapperMain}>
                <div className={styles.wrapperCards}>
                    <LayoutImg />
                    <MyFormRegister />
                </div>
            </main>
            </div>
        <Footer />
    </div>
  )
}

export default Register