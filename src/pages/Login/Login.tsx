
import Header from '../../components/Header/Header'
import LayoutImg from '../../components/LayoutImg/LayoutImg';
import styles from './Login.module.css'
import Footer from '../../components/Footer/Footer';
import MyFormLogin from '../../components/Forms/FormLogin/MyFormLogin';


type Props = {}

const Login = (props: Props) => {

  return (
    <div>
        <Header />
        <div>
          <main className={styles.wrapperMain}>
              <div className={styles.wrapperCards}>
                <LayoutImg />
                <MyFormLogin /> 
              </div>
          </main>
        </div>
        <Footer />
    </div>
  )
}

export default Login