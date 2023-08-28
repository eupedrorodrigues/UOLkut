import { useNavigate } from 'react-router-dom';
import Icon from '../../../assets/ps_orkut.svg'
import styles from './MyFormFogot.module.css';
import { useState } from 'react';

type Props = {}

const MyFormFogot = (props: Props) => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    

    const handleForgotPass = () => {
        if(email === ''){
            alert('Error: Preencha todos os campos')
        }else{
            navigate('/NewPass')
        }
    }

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
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                    />
                </div>
                <button className={styles.btnLogin} onClick={handleForgotPass}>Enviar código</button>
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