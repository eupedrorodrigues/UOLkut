import Icon from '../../../assets/ps_orkut.svg';
import styles from './MyFormFogot.module.css';

type Props = {}

const MyFormFogot = (props: Props) => {
  return (
    <div>
        <div className={styles.formBox}>
            <img style={{margin: '10px'}} src={Icon} alt="" /> 
            <h2>Recupere sua senha</h2>
            <form>
                <div className={styles.inputBox}>
                    <input 
                    placeholder='E-mail cadastrado' 
                    type="email" 
                    required/>
                </div>
                <button className={styles.btnLogin}>Enviar código</button>
                <div className={styles.forgot}>
                    <a href="">Lembrou sua Senha?</a>
                </div>
                <div className={styles.btnCreate}>
                    <a href="">Entrar com as credenciais</a>
                </div>
            </form>
        </div>
    </div>
  )
}

export default MyFormFogot