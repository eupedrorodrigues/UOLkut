import Icon from  '../../../assets/ps_orkut.svg';
import styles from './MyFormNewPass.module.css';

type Props = {}

const MyFormNewPass = (props: Props) => {
  return (
    <div>
        <div className={styles.formBox}>
            <img style={{margin: '10px'}} src={Icon} alt="" /> 
            <h2>Nova senha</h2>
            <form>
                <div className={styles.inputBox}>
                    <input 
                    placeholder='Informe o código' 
                    type="email" 
                    required/>
                </div>
                <div className={styles.inputBox}>
                    <input 
                    placeholder='Nova senha' 
                    type="email" 
                    required/>
                </div>
                <div className={styles.inputBox}>
                    <input 
                    placeholder='Confirmar a senha' 
                    type="email" 
                    required/>
                </div>
                <button className={styles.btnLogin}>Salvar</button>
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

export default MyFormNewPass