import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Icon from '../../../assets/ps_orkut.svg';
import styles from './MyFormNewPass.module.css';

type Props = {}

const MyFormNewPass = (props: Props) => {
    
    const navigate = useNavigate();
    const [cod, setCod] = useState('');
    const [pass, setPass] = useState('');
    const [confirmpass, setConfirmpass] = useState('');

    const handleNewPass = () => {
        if(cod === '' || pass === '' || confirmpass === ''){
            alert("Preencha todos os campos");
        }else{
            navigate('/')
        }
    }

  return (
    <div>
        <div className={styles.formBox}>
            <img style={{margin: '10px'}} src={Icon} alt="" /> 
            <h2>Nova senha</h2>
            <form>
                <div className={styles.inputBox}>
                    <input 
                        placeholder='Informe o código' 
                        type="number" 
                        onChange={(e) => setCod(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.inputBox}>
                    <input 
                        placeholder='Nova senha' 
                        type="password"
                        onChange={(e) => setPass(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.inputBox}>
                    <input 
                        placeholder='Confirmar a senha' 
                        type="password"
                        onChange={(e) => setConfirmpass(e.target.value)}
                        required
                    />
                </div>
                <button className={styles.btnLogin} onClick={handleNewPass}>Salvar</button>
                <div className={styles.forgot}>
                    <p>Lembrou sua Senha?</p>
                </div>
                <div className={styles.btnCreate}>
                    <p>Entrar com as credenciais</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default MyFormNewPass