import Icon from '../../../assets/ps_orkut.svg'
import styles from './MyFormLogin.module.css'
import { useState } from 'react';
import InputEP from '../Email&Pass/InputEP';

type Props = {}

const MyFormLogin = (props: Props) => {
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleLogin = () => {
        if (!email || !password){
            console.log('Error: Preencha todos os campos')
        }
    }

  return (
    <div className={styles.formBox}>
        <img style={{margin: '10px'}} src={Icon} alt="" /> 
        <h2>Acesse o Orkut</h2>
        <form>
            <InputEP /> 
            <div className={styles.rememberMe}>
                <span>
                    <span className={styles.checkColor}>
                        <input type="checkbox" required/>
                    </span>
                </span>
                <label className={styles.checkbox}>
                    Lembrar minha senha
                </label>
            </div>
            <button className={styles.btnLogin} onClick={handleLogin}>Entrar na conta</button>
            <div className={styles.btnCreate}>
                {/* <Link  to="/pages/Register">Criar uma conta</Link> */}
                <a href="">Criar uma conta</a>
            </div>
            <div className={styles.forgot}>
                <a href="">Esqueci minha senha</a>
            </div>
        </form>
    </div>
  )
}

export default MyFormLogin;