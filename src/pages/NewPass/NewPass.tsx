import Footer from '../../components/Footer/Footer';
import MyFormNewPass from '../../components/Forms/FormNewPass/MyFormNewPass';
import Header from '../../components/Header/Header';
import LayoutImg from '../../components/LayoutImg/LayoutImg';
import styles from './NewPass.module.css';

type Props = {}

const NewPass = (props: Props) => {
  return (
    <div>
        <Header />
        <div>
          <main className={styles.wrapperMain}>
              <div className={styles.wrapperCards}>
                <LayoutImg />
                <MyFormNewPass />
              </div>
          </main>
        </div>
        <Footer />
    </div>
  )
}

export default NewPass